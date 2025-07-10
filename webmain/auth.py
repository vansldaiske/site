from flask import Blueprint, render_template, redirect, url_for, flash, request
from flask_login import login_user, logout_user, login_required, current_user
from webmain.models import User
from webmain.database import Session
from webmain.forms import RegisterForm, LoginForm

auth_bp = Blueprint('auth', __name__)

# --- REGISTER ---
@auth_bp.route('/register', methods=['GET', 'POST'])
def register():
    form = RegisterForm()
    if form.validate_on_submit():
        with Session() as conn:
            existing_user = conn.query(User).filter_by(email=form.email.data.lower()).first()
            if existing_user:
                flash('Email already registered', 'danger')
                return redirect(url_for('auth.register'))

            user = User(
                name=form.name.data,
                lastname=form.lastname.data,
                phone=form.phone.data,
                email=form.email.data.lower()
            )
            user.set_password(form.password.data)
            conn.add(user)
            conn.commit()

        flash('Account created — please log in.', 'success')
        return redirect(url_for('auth.login'))

    return render_template('register.html', form=form)

# --- LOGIN ---
@auth_bp.route('/login', methods=['GET', 'POST'])
def login():
    if current_user.is_authenticated:
        return redirect(url_for('products_api.index'))

    form = LoginForm()
    if form.validate_on_submit():
        with Session() as conn:
            user = conn.query(User).filter_by(email=form.email.data.lower()).first()
            if user and user.check_password(form.password.data):
                login_user(user, remember=True)
                flash('Welcome back!', 'success')
                next_page = request.args.get('next')
                return redirect(next_page or url_for('products_api.index'))

        flash('Invalid email / password', 'danger')

    return render_template('login.html', form=form)

# --- LOGOUT ---
@auth_bp.route('/logout')
@login_required
def logout():
    logout_user()
    flash('Logged out', 'info')
    return redirect(url_for('products_api.index'))

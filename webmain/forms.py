from flask_wtf import FlaskForm, RecaptchaField
from wtforms import StringField, PasswordField, SubmitField
from wtforms.validators import DataRequired, Email, Length, Regexp

phone_regex = Regexp(r'^\+?\d{7,15}$', 0,
                     'Enter phone in international format, e.g. +15551234567')

class RegisterForm(FlaskForm):
    name      = StringField('Name',      validators=[DataRequired(), Length(max=50)])
    lastname  = StringField('Last Name', validators=[DataRequired(), Length(max=50)])
    phone     = StringField('Phone',     validators=[DataRequired(), phone_regex])
    email     = StringField('E-mail',    validators=[DataRequired(), Email()])
    password  = PasswordField('Password',validators=[DataRequired(), Length(min=6)])
    recaptcha = RecaptchaField()
    submit    = SubmitField('Sign up')

class LoginForm(FlaskForm):
    email    = StringField('E-mail',    validators=[DataRequired(), Email(), Length(max=120)])
    password = PasswordField('Password', validators=[DataRequired(), Length(min=6)])
    submit   = SubmitField('Sign in')
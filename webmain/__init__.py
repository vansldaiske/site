# coding=utf-8

from flask import Flask, render_template
from webmain.database import migrate, Session
from webmain.routes import blueprint as main_bp
from webmain.auth import auth_bp
from webmain.config import Config
from flask_wtf.csrf import CSRFProtect
from flask_login import LoginManager

csrf = CSRFProtect()
login_manager = LoginManager()

def page_not_found(e):
  return render_template('404.html'), 404

def internal_server_error(e):
  return render_template('500.html'), 500

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    app.register_blueprint(auth_bp)
    app.register_blueprint(main_bp)
    csrf.init_app(app)
    login_manager.init_app(app)
    login_manager.login_view = 'auth.login'  # where to transfer if @login_required
    login_manager.login_message_category = 'warning'
    app.register_error_handler(404, page_not_found)
    app.register_error_handler(500, internal_server_error)
    migrate()

    return app

@login_manager.user_loader
def load_user(user_id):
    from webmain.models import User
    with Session() as db:
        return db.get(User, int(user_id))

app = create_app()

if __name__ == '__main__':
	app.run(host='0.0.0.0', port=8000)

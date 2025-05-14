from flask_wtf import FlaskForm
from wtforms import StringField, validators, SubmitField, FloatField, BooleanField, SelectMultipleField, HiddenField
from wtforms.validators import DataRequired, Email

class Payment(FlaskForm):
    username = StringField('Имя', [validators.Length(min=4, max=25),
                                   validators.InputRequired(message='Поле должно быть заполнено')])
    lastname = StringField('Фамилия', [validators.Length(min=4, max=25),
                                       validators.InputRequired(message='Поле должно быть заполнено')])
    postname = StringField('Отчество', [validators.Length(min=4, max=25),
                                        validators.InputRequired(message='Поле должно быть заполнено')])
    email = StringField('Email', validators=[Email(message="Неправильный email")])
    gorod = StringField('Город', [validators.Length(min=4, max=25),
                                  validators.InputRequired(message='Поле должно быть заполнено')])
    adress = StringField('Адрес', [validators.Length(min=4, max=25),
                                   validators.InputRequired(message='Поле должно быть заполнено')])
    user_name = StringField('Владелец карты', [validators.Length(min=4, max=25),
                                              validators.InputRequired(message='Поле должно быть заполнено')])
    number = FloatField('Номер карты', validators=[DataRequired(message="Поле должно быть заполнено")])
    data = FloatField('Месяц/Год', validators=[DataRequired(message="Поле должно быть заполнено")])
    cvv = FloatField('CVV', validators=[DataRequired(message="Поле должно быть заполнено")])

    submit = SubmitField('Продолжить')

PRODUCT_QUANTITY_CHOICES = [(i, str(i)) for i in range(1, 21)]


class CartAddProductForm(FlaskForm):
    quantity = SelectMultipleField(choices=PRODUCT_QUANTITY_CHOICES, coerce=int)
    update = BooleanField()


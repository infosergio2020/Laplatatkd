# comienzo
from email import message
from importlib.resources import path
from flask import Flask, make_response, render_template, request,send_from_directory
from flask_mail import Mail, Message
import os
from entorno import config
from modules.renderizado import CustomRouter

# compresion de la app
from flask_compress import Compress
# CORS
from flask_cors import CORS, cross_origin

# creando la instancia del compresor
compress = Compress()

# instanciando el controlador que se encarga de renderizar
rutas = CustomRouter()

##Configuracion del app
app = Flask(__name__)

##
## Comienzo del gmail de sergio
##
mail_settings = {
    "MAIL_SERVER": 'smtp.gmail.com',
    "MAIL_PORT": 465,
    "MAIL_USE_TLS": False,
    "MAIL_USE_SSL": True,
    "MAIL_USERNAME":'oriailigo1.gmail.com',
    "MAIL_PASSWORD":'Onepiecetoby1@!!'
}

app.config.update(mail_settings)
mail = Mail(app)
## fin del gmail

app.config.from_object(config)

CORS(app)

compress.init_app(app)

#colocar las rutas antes de correr el servidor

@app.route('/')
def Index():
    return rutas.render_index()
###########################
###########################
# Aqui se detallan las 4 paginas de la barra de navegacion
@app.route('/contacto', methods=['GET','POST'])
def Contacto():
    if request.method == 'POST':
        msg=Message("Hey", sender='noreply@demo.com', recipients=['oriailigo1@gmail.com'])
        msg.body="Hey how are you? Is everything okay?"
        mail.send(msg)

    return rutas.render_contacto()
###########################
@app.route('/membership')
def Membership():
    return rutas.render_membership()
###########################
@app.route('/quienesSomos')
def QuienesSomos():
    return rutas.render_quienesSomos()
###########################
@app.route('/sedesHorarios')
def SedesHorarios():
    return rutas.render_sedesHorarios()
###########################

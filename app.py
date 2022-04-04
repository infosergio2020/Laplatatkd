# comienzo
from importlib.resources import path
from flask import Flask, make_response,send_from_directory
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
@app.route('/contacto')
def Contacto():
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

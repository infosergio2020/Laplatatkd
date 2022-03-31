# comienzo
from importlib.resources import path
from flask import Flask, make_response,send_from_directory
from entorno import config
from modules.rederizado import CustomRouter

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
@app.route('/sw.js')
def sw():
    response=make_response(
                     send_from_directory(directory='static',path='sw.js'))
    #change the content header file. Can also omit; flask will handle correctly.
    response.headers['Content-Type'] = 'application/javascript'
    return response

# ruta para service worker

@app.route('/')
def Index():
    return rutas.render_index()
###########################
###########################
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
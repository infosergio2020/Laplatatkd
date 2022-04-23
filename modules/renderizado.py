from flask import render_template,request
from .mock_data import quienesSomos, membership, clase_info, contacto, sedesHorarios, noticias, botones_navbar, beneficios

class CustomRouter:
    # index
    def render_index(self):
        return render_template('index.html', links = botones_navbar, noti = noticias, bene = beneficios)
    
    #Aqui se detallan las 4 paginas de la barra de navegacion
    def render_membership(self):
        return render_template('membership.html', links = botones_navbar)

    def render_quienesSomos(self):
        return render_template('quienesSomos.html', links = botones_navbar)

    def render_contacto(self):
        
        return render_template('contacto.html', links = botones_navbar)

    def render_sedesHorarios(self):
        return render_template('sedesHorarios.html', links = botones_navbar, lista_profes=clase_info)
   
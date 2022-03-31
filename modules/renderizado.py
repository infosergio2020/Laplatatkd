from flask import render_template,request
from .mock_data import list_album,list_shocking, quienesSomos, membership, contacto, sedesHorarios

class CustomRouter:
    # index
    def render_index(self):
        return render_template('index.html')
    
    ## esto no hiria no? porque estarian todos en la misma ruta del index
    def render_membership(self):
        return render_template('membership.html')

    def render_quienesSomos(self):
        return render_template('quienesSomos.html')

    def render_contacto(self):
        return render_template('contacto.html')

    def render_sedesHorarios(self):
        return render_template('sedesHorarios.html')

     #partials
    def render_button(self):
        return render_template('_button.html')
    
    def render_footer_notacion(self):
        return render_template('_footer_notacion.html')

    def render_head(self):
        return render_template('_head.html')

    def render_header(self):
        return render_template('_header.html')

    def render_layout(self):
        return render_template('_layout.html')

   
from api.views.bard_api import api as bard_api
from api.views.mages_api import api as mages_api

def mount_blueprints(app):
    app.register_blueprint(bard_api)
    app.register_blueprint(mages_api)
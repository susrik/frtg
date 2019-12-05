"""
automatically invoked app factory
"""
import logging

from flask import Flask

logger = logging.getLogger(__name__)


def create_app():
    """
    :return: a new flask app instance
    """

    app = Flask(__name__)
    app.secret_key = 'super secret session key'

    from frtg import routes
    app.register_blueprint(routes.blueprint, url_prefix='/')

    logger.info('frtg Flask app initialized')

    return app

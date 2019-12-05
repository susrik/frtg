import functools
import logging

from flask import Blueprint, jsonify, request, Response, render_template, current_app

blueprint = Blueprint("frtg-default-routes", __name__)

API_VERSION = '0.1'
RESPONSE_TIMEOUT_SEC = 2.0
logger = logging.getLogger(__name__)


def require_accepts_json(f):
    """
    used as a route handler decorator to return an error
    unless the request allows responses with type "application/json"
    :param f: the function to be decorated
    :return: the decorated function
    """
    @functools.wraps(f)
    def decorated_function(*args, **kwargs):
        # TODO: use best_match to disallow */* ...?
        if not request.accept_mimetypes.accept_json:
            return Response(
                response="response will be json",
                status=406,
                mimetype="text/html")
        return f(*args, **kwargs)
    return decorated_function


@blueprint.route("/version", methods=['GET', 'POST'])
@require_accepts_json
def version():
    version_params = {
        'api': API_VERSION,
        'module': None
            # pkg_resources.get_distribution('frd3g').version
    }
    return jsonify(version_params)


@blueprint.route("/tweets", methods=['GET', 'POST'])
@require_accepts_json
def tweets():
    logger.debug(f'getting tweets')
    DUMMY_DATA = [
        {'a': 1, 'b': 2, 'c': 3},
        {'a': 4, 'b': 5, 'c': 6}
    ]
    return jsonify(DUMMY_DATA)


@blueprint.route('/')
def index():
    return render_template('index.html')

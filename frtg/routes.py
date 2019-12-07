import functools
import logging

from flask import Blueprint, jsonify, request, Response, render_template, current_app
from twython import Twython

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


def _do_twitter_query(credentials, filters, max_data_points=10):

    python_tweets = Twython(
        credentials['consumer key'],
        credentials['consumer secret'])

    query = {
        'q': ' OR '.join(filters),
        # 'result_type': 'popular',
        'count': min(15, max(max_data_points, 0)),
        # 'lang': 'en'
        'tweet_mode': 'extended'
    }

    # import json
    # with open('sample_query_response.json') as f:
    #     return json.loads(f.read())
    return python_tweets.search(**query)['statuses']


def format_tweet(t):

    def _user(t):
        return {
            'name': t['user']['name'],
            'screen_name': t['user']['screen_name'],
            'profile_image': t['user']['profile_image_url'],
            'user_loc': t['user']['location']
        }

    if 'retweeted_status' in t:
        data = format_tweet(t['retweeted_status'])
        data['retweet'] = {
            'time': t['created_at'],
            'user': _user(t),
        }
        return data

    return {
        'time': t['created_at'],
        'user': _user(t),
        'hashtags': [h['text'] for h in t['entities']['hashtags']],
        'text': t['full_text']
    }


@blueprint.route("/tweets", methods=['GET', 'POST'], defaults={'raw': None})
@blueprint.route("/tweets/<raw>", methods=['GET', 'POST'])
@require_accepts_json
def tweets(raw):
    logger.debug('getting tweets')
    config = current_app.config['TWITTER_PARAMS']
    query_results = _do_twitter_query(
        credentials=config['credentials'],
        filters=config['search']['filter hints'],
        max_data_points=config['search']['max nr rows'])

    if raw:
        return jsonify(list(query_results))

    return jsonify([format_tweet(t) for t in query_results])


@blueprint.route('/')
def index():
    return render_template('index.html')

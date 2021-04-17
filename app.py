from flask import Flask
# from flask_cors import CORS
from flask_restful import Api
from flask_api.LeagueTriviaAPI import ChampionsAPI, SimilarChampionPassivesByColorAPI, SpellsAPI, SimilarSpellsByColorAPI, ItemsAPI, SimilarItemsByTagsAPI, RunesAPI, QuestionAPI

app = Flask(__name__, static_folder='./frontend/build', static_url_path='/')
api = Api(app)
# CORS(app)

@app.route('/')
def index():
  return app.send_static_file('index.html')

@app.errorhandler(404)
def not_found(e):
  return app.send_static_file('index.html')

api.add_resource(ChampionsAPI, '/api/champions')
api.add_resource(SimilarChampionPassivesByColorAPI, '/api/similarPassives')
api.add_resource(SpellsAPI, '/api/spells')
api.add_resource(SimilarSpellsByColorAPI, '/api/similarSpells')
api.add_resource(ItemsAPI, '/api/items')
api.add_resource(SimilarItemsByTagsAPI, '/api/similarItems')
api.add_resource(RunesAPI, '/api/runes')
api.add_resource(QuestionAPI, '/api/question')

if __name__ == '__main__':
  app.run(host='0.0.0.0', ddebug=False, port=os.environ.get('PORT', 80))
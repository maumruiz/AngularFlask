from flask import Flask, request, jsonify
from flask_restful import Resource, Api
from flask_cors import CORS, cross_origin

app = Flask(__name__)
api = Api(app)

CORS(app)

class Employees(Resource):
    def get(self):
        return {'employees': [{'id': 1, 'name': 'Balram'}, {'id': 2, 'name': 'Tom'}]}

api.add_resource(Employees, '/employees') # Route 1

@app.route("/")
def hello():
    return jsonify({'text': 'Hello World from python server!'})

if __name__ == '__main__':
    app.run(port=5002)

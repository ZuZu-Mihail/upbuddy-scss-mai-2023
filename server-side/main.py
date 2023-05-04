from chatterbot import ChatBot
from chatterbot.trainers import ChatterBotCorpusTrainer
from chatterbot.response_selection import get_random_response
from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

bot = ChatBot("ChatterBot", read_only = True,response_selection_method = get_random_response, logic_adapter = [{
            'import_path': 'chatterbot.logic.SpecificResponseAdapter',
            'input_text': 'empty',
            'output_text': ''
        },{
            'import_path': 'chatterbot.logic.BestMatch',
            'default_response': 'i honestly have no idea how to respond to that',
            'maximum_similarity_threshold': 0.9
        }],

        )
trainer = ChatterBotCorpusTrainer(bot)
# trainer.train("chatterbot.corpus.english")
trainer.train(
    "chatterbot.corpus.proiect" 
)

@app.route("/")
def home():
    return str('Welcome to the chatbot')

@app.route("/user", methods=["POST"])
def user():
    jsony = request.json
    data = jsony['msg']
    return str(bot.get_response(data))

app.run()


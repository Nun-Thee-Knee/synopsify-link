from flask import Flask, request, jsonify
from Data import Data
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

def data_fetcher(link):
    data = Data(link)
    data.video_link_check()
    if data.message:
        return jsonify({"error": data.message})
    else:
        return jsonify(data.data)

@app.route("/", methods=["POST"])
def main():
    if request.method == "POST":
        if "link" not in request.json:
            return jsonify({"message": "You have not provided correct arguments"})
        else:
            link = request.json['link']
            result = data_fetcher(link)
            return result
    else:
        return jsonify({"message": "Method is not allowed"})

if __name__ == "__main__":
    app.run(host="0.0.0.0")

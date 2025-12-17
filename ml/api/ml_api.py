from flask import Flask, request, jsonify
import joblib

app = Flask(__name__)

# Load trained model
model = joblib.load("../model/fraud_model.pkl")

# @app.route("/predict", methods=['GET'])
# def index():
#     return "Hello, World!"


@app.route("/predict", methods=["POST"])
def predict():
    data = request.json
    amount = data["amount"]
    hour = data["hour"]

    prediction = model.predict([[amount, hour]])[0]
    probability = model.predict_proba([[amount, hour]])[0][1]

    return jsonify({
        "fraud": int(prediction),
        "probability": round(float(probability), 2)
    })

if __name__ == "__main__":
    app.run(port=5000, debug=True)
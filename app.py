from flask import Flask, request, jsonify
import speech_recognition as sr
from langdetect import detect
import pyttsx3

app = Flask(__name__)

# Speech-to-text conversion
def speech_to_text(audio_data):
    recognizer = sr.Recognizer()
    try:
        text = recognizer.recognize_google(audio_data)
        return text
    except sr.UnknownValueError:
        return "Sorry, I didn't catch that."
    except sr.RequestError:
        return "Speech service is unavailable."

# Language Detection
def detect_language(text):
    try:
        return detect(text)
    except:
        return "en"

# AI Bot Response
def chatbot_response(text):
    responses = {
        "balance": "Your balance is classified information, but let's just say you need a side hustle.",
        "loan": "Loans? Only if you have a solid credit score and a reality check.",
        "hello": "Oh, great. Another customer. What do you want?",
        "thanks": "You're welcome. But don't get used to kindness.",
        "default": "I don't have time for nonsense. Ask something reasonable."
    }

    for keyword in responses:
        if keyword in text.lower():
            return responses[keyword]
    
    return responses["default"]

@app.route('/chat', methods=['POST'])
def chat():
    data = request.json
    user_text = data.get("text", "").strip()

    if not user_text:
        return jsonify({"error": "Empty message"}), 400

    language = detect_language(user_text)
    response_text = chatbot_response(user_text)

    return jsonify({"response": response_text, "language": language})

if __name__ == '__main__':
    app.run(debug=True)

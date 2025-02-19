import speech_recognition as sr 
import webbrowser
import pyttsx3
import requests
import google.generativeai as genai 
import os

# Configure Gemini API Key
genai.configure(api_key="AIzaSyBWkt5ZMXdRf79jC-PSLcBMAhQQNK6zVxQ")

# Initialize speech engine
recognizer = sr.Recognizer()
engine = pyttsx3.init()  
newsapi = "<pub_7060177cdf47b3ded1258542b542410eb6499>"  # Replace with your NewsAPI key

# Set default voice (Optional: Adjust rate, volume, or voice ID if needed)
engine.setProperty('rate', 160)  # Adjust speed (default ~200)
engine.setProperty('volume', 1.0)  # Full volume

def speak(text):
    """Speak using the system's default voice."""
    engine.say(text)
    engine.runAndWait()

def aiProcess(command):
    """Process the command using Gemini AI."""
    model = genai.GenerativeModel("gemini-pro")  # Use "gemini-1.5-pro" if available
    response = model.generate_content(f"You are Jarvis, a virtual assistant skilled in general tasks like Alexa and Google Assistant. Give short responses.\n\nUser: {command}")
    
    return response.text

def processCommand(c):
    """Handles predefined and AI-based commands."""
    if "open google" in c.lower():
        webbrowser.open("https://google.com")
    elif "open facebook" in c.lower():
        webbrowser.open("https://facebook.com")
    elif "open youtube" in c.lower():
        webbrowser.open("https://youtube.com")
    elif "open linkedin" in c.lower():
        webbrowser.open("https://linkedin.com")
    elif "news" in c.lower():
        r = requests.get(f"https://newsapi.org/v2/top-headlines?country=in&apiKey={newsapi}")
        if r.status_code == 200:
            data = r.json()
            articles = data.get('articles', [])
            for article in articles[:5]:  # Read only top 5 news headlines
                speak(article['title'])
    else:
        output = aiProcess(c)
        speak(output)

if __name__ == "__main__":
    speak("Initializing Jarvis....")
    while True:
        try:
            with sr.Microphone() as source:
                recognizer.adjust_for_ambient_noise(source)
                print("Listening for wake word 'Jarvis'...")
                audio = recognizer.listen(source, timeout=5, phrase_time_limit=3)
                word = recognizer.recognize_google(audio)

                if word.lower() == "jarvis":
                    speak("Yes?")
                    with sr.Microphone() as source:
                        print("Jarvis Active... Listening for command.")
                        audio = recognizer.listen(source)
                        command = recognizer.recognize_google(audio)
                        processCommand(command)
        except Exception as e:
            print(f"Error: {e}")

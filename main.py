import speech_recognition as sr 
import webbrowser
import pyttsx3
import google.generativeai as genai 
import os
import musicLibrary

# Configure Gemini API Key
genai.configure(api_key="AIzaSyBWkt5ZMXdRf79jC-PSLcBMAhQQNK6zVxQ")

recognizer = sr.Recognizer()
engine = pyttsx3.init()  

engine.setProperty('rate', 160)  
engine.setProperty('volume', 1.0) 

# Improve recognition for lower volume speech
recognizer.energy_threshold = 300  # Adjust based on mic sensitivity
recognizer.dynamic_energy_threshold = True  # Allows auto-adjustment
recognizer.pause_threshold = 0.8  # Waits slightly longer before processing
recognizer.non_speaking_duration = 0.5  # Listens longer for low-volume speech

def speak(text):
    """Speak using the system's default voice and display the text."""
    print(f"Jarvis: {text}") 
    engine.say(text)
    engine.runAndWait()

def aiProcess(command):
    """Process the command using Gemini AI."""
    model = genai.GenerativeModel("gemini-pro")  
    response = model.generate_content(f"You are Jarvis, a virtual assistant skilled in general tasks like Alexa and Google Assistant. Give short responses.\n\nUser: {command}")
    return response.text

def processCommand(c):
    """Handles predefined and AI-based commands."""
    print(f"You: {c}")  
    if "open google" in c.lower():
        webbrowser.open("https://google.com")
        speak("Opening Google")
    elif "open facebook" in c.lower():
        webbrowser.open("https://facebook.com")
        speak("Opening Facebook")
    elif "open youtube" in c.lower():
        webbrowser.open("https://youtube.com")
        speak("Opening YouTube")
    elif "open linkedin" in c.lower():
        webbrowser.open("https://linkedin.com")
        speak("Opening LinkedIn")
    elif c.lower().startswith("play"):
        song = c.lower().split(" ", 1)[1]  # Ensure entire song name is taken
        link = musicLibrary.music.get(song, None)  # Use .get() to avoid KeyError
        if link:
            webbrowser.open(link)
            speak(f"Playing {song}")
        else:
            speak(f"Sorry, I couldn't find {song} in your music library.")            
    elif "exit" in c.lower():
        speak("Okay, exiting. Have a great day!")
        exit()  # Stop execution
    else:
        output = aiProcess(c)
        speak(output)

if __name__ == "__main__":
    speak("Initializing Jarvis. Say 'Jarvis' to wake me up.")
    
    while True:
        try:
            with sr.Microphone() as source:
                recognizer.adjust_for_ambient_noise(source, duration=1)  # More time to adapt
                print("Listening for wake word 'Jarvis'...")
                audio = recognizer.listen(source, timeout=7, phrase_time_limit=4)  # More time for input
                word = recognizer.recognize_google(audio)

                if word.lower() == "jarvis":
                    speak("I am listening. Say 'exit' to stop.")
                    while True: 
                        try:
                            with sr.Microphone() as source:
                                recognizer.adjust_for_ambient_noise(source, duration=0.5)  # Adaptive adjustment
                                print("Listening for command...")
                                audio = recognizer.listen(source, timeout=7, phrase_time_limit=5)  # Increased timeout
                                command = recognizer.recognize_google(audio)
                                processCommand(command)
                        except sr.UnknownValueError:
                            print("Couldn't understand, please repeat.")
                        except sr.RequestError:
                            print("Speech recognition service unavailable.")
        except Exception as e:
            print(f"Error: {e}")

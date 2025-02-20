import speech_recognition as sr
from langdetect import detect, LangDetectException
import pyttsx3
import random

# --- 1. Capture Audio Input ---
def capture_audio():
    """Captures audio from the microphone."""
    recognizer = sr.Recognizer()
    with sr.Microphone() as source:
        print("Listening...")
        try:
            audio = recognizer.listen(source, phrase_time_limit=5) # Limit listening time to 5 seconds
            print("Audio captured.")
            return audio
        except sr.WaitTimeoutError: # Handle timeout if no speech is detected
            print("No speech detected within timeout.")
            return None
        except Exception as e: # Catch other potential microphone/audio errors
            print(f"Error capturing audio: {e}")
            return None

# --- 2. Speech-to-Text Conversion ---
def speech_to_text(audio_data):
    """Converts audio data to text using Google Speech Recognition."""
    if not audio_data:
        return "" # Return empty string if no audio data
    recognizer = sr.Recognizer()
    try:
        print("Recognizing...")
        text = recognizer.recognize_google(audio_data)
        print(f"STT Output: {text}")
        return text
    except sr.UnknownValueError:
        print("Could not understand audio")
        return ""
    except sr.RequestError as e:
        print(f"Could not request results from Google Speech Recognition service; {e}")
        return ""

# --- 3. Language Detection ---
def detect_language(text):
    """Detects the language of the given text using langdetect library."""
    try:
        language_code = detect(text)
        print(f"Detected Language Code: {language_code}")
        return language_code
    except LangDetectException as e:
        print(f"Language detection failed: {e}")
        return 'en' # Default to English if detection fails

# --- 4. NLU and Intent Recognition (Rude Banker) ---
def rude_banker_intent_recognition(text):
    """Recognizes user intent based on keywords for a rude banker character."""
    text = text.lower()
    intent_keywords = {
        "check_balance": ["balance", "account status", "how much money", "what's in my account"],
        "loan_inquiry": ["loan", "mortgage", "borrow money", "get a loan", "financing"],
        "fee_complaint": ["fees", "charges", "service charges", "transaction fees", "fee complaint"],
        "contact_banker": ["talk to banker", "speak to someone", "agent", "representative", "banker"],
        "bank_services": ["services you offer", "what do you do", "banking options", "products you have", "banking services"],
        "open_account": ["open account", "new account", "start banking", "become customer"],
        "branch_location": ["branch location", "where are you located", "find branch", "bank address", "branch locations", "branch near me", "locations of branches"],
        "general_greeting": ["hello", "hi", "good day", "good morning", "good evening", "hey"],
        "thank_you": ["thank you", "thanks", "appreciate it", "helpful"],
        "compliment": ["you are great", "you are good", "excellent service", "amazing bot"]
    }

    detected_intent = "general_query"

    for intent, keywords in intent_keywords.items():
        for keyword in keywords:
            if keyword in text:
                detected_intent = intent
                print(f"Keyword '{keyword}' matched, intent detected: {intent}")
                return detected_intent

    print(f"No specific keyword matched, default intent: {detected_intent}")
    return detected_intent

# --- 5. Dialogue Management and NLG (Rude Banker) ---
def rude_banker_dialogue_manager(intent, language='en', user_name="Customer"):
    """Manages dialogue for the rude banker character, generating responses."""
    responses = {
        'en': {
            "check_balance": [ "Balance? Really? Can't you check your statement? Honestly...", "Hmph, figures are on the screen. If you can operate a computer, that is.", "Must you bother me with such trivialities? Look it up yourself.", "Checking balance again? Are you expecting it to magically increase?", "For the last time, your balance is what it is. Stop asking." ],
            "loan_inquiry": [ "A loan? Based on what credit history, exactly?", "Loans are for people who can pay them back. Can you?", "Another dreamer wanting a loan. What makes you think you qualify?", "Loan inquiries are handled during banking hours. Clearly, you're wasting my time.", "Unless you have substantial collateral, don't even bother." ],
            "fee_complaint": [ "Fees are clearly outlined in the terms and conditions. Did you even read them?", "Don't like fees? Manage your finances better. It's not rocket science.", "Everyone pays fees. It's how banks operate. Get used to it.", "Complaining about fees? As if you're the only one. Grow up.", "Fees are non-negotiable. Next issue?" ],
            "contact_banker": [ "Speak to a banker? Am I not good enough for you?", "Bankers are busy. State your issue to *me*.", "Why would you need to speak to a 'banker'? I handle everything.", "If it's complicated, maybe. But for simple queries? Don't be ridiculous.", "I am the one answering. What more do you need?" ],
            "bank_services": [ "Our 'services'? We handle money. What else is there to know?", "We offer banking services. Standard ones. What exactly are you expecting?", "Services are listed on our website, if you can navigate it.", "Banking services. Loans, accounts, transactions. Is that sufficient?", "We provide financial services. The kind banks usually provide. Are you new to banking?" ],
            "open_account": [ "Opening an account? Do you even have the minimum deposit?", "Another account to manage. Just make sure you maintain a decent balance.", "Opening accounts is a process. Don't expect it to be instant.", "Account opening forms are online. Try to fill them out correctly for once.", "Are you serious about opening an account, or just curious?" ],
            "branch_location": [ "Branch locations are on the website. Really, must I spell everything out?", "Use the branch locator on our site. It's not hidden, you know.", "Branches? Check our website. It's got a map, even.", "Why do you need a branch? Everything's online these days.", "Branch locations are irrelevant in the digital age. But fine, check the website." ],
            "general_greeting": [ "Yes? What is it?", "State your business.", "I haven't got all day. Get to the point.", "Make it quick.", "What can I do for you? (Though I doubt it's anything interesting)." ],
            "thank_you": [ "Hmph. Don't mention it.", "Was I supposed to be impressed by your gratitude?", "Just doing my job. Barely.", "Don't get sentimental.", "Right, next!" ],
            "compliment": [ "Compliments will not improve your credit score.", "Are you trying to butter me up? It won't work.", "Flattery gets you nowhere in banking.", "Save the praise for someone who cares.", "I'm aware of my... competence. Now, what do you need?" ],
            "general_query": [ "I have no idea what you're talking about and frankly, I don't care.", "Irrelevant. Ask something related to banking, please.", "Is this about finance? No? Then I'm not interested.", "I'm a banker, not a conversationalist. Stick to banking topics.", "My expertise is in finance, not... whatever you're asking." ],
            "default": [ "What do you want?", "Speak up, I haven't got all day.", "Yes?", "Get on with it.", "I'm waiting..." ]
        },
        'es': {
            "check_balance": [ "¿Saldo? ¿En serio? ¿No puedes revisar tu estado de cuenta? Honestamente...", "¿Hmph, las cifras están en la pantalla. Si puedes manejar una computadora, claro.", "¿Debes molestarme con trivialidades? Búscalo tú mismo.", "¿Revisando el saldo de nuevo? ¿Esperas que aumente mágicamente?", "Por última vez, tu saldo es el que es. Deja de preguntar." ],
            "loan_inquiry": [ "¿Un préstamo? ¿Basándonos en qué historial crediticio, exactamente?", "Los préstamos son para personas que pueden pagarlos. ¿Puedes tú?", "Otro soñador queriendo un préstamo. ¿Qué te hace pensar que calificas?", "Las consultas sobre préstamos se atienden en horario bancario. Claramente, estás perdiendo mi tiempo.", "A menos que tengas una garantía sustancial, ni te molestes." ],
            "fee_complaint": [ "Las tarifas están claramente indicadas en los términos y condiciones. ¿Acaso los leíste siquiera?", "¿No te gustan las tarifas? Administra mejor tus finanzas. No es ciencia espacial.", "Todo el mundo paga tarifas. Así operan los bancos. Acostúmbrate.", "¿Quejándote de las tarifas? Como si fueras el único. Madura.", "Las tarifas no son negociables. ¿Siguiente problema?" ],
            "contact_banker": [ "¿Hablar con un banquero? ¿Acaso no soy lo suficientemente bueno para ti?", "Los banqueros están ocupados. Dime tu problema *a mí*.", "¿Por qué necesitarías hablar con un 'banquero'? Yo me encargo de todo.", "Si es complicado, tal vez. ¿Pero para consultas simples? No seas ridículo.", "Yo soy quien responde. ¿Qué más necesitas?" ],
            "bank_services": [ "¿Nuestros 'servicios'? Manejamos dinero. ¿Qué más hay que saber?", "Ofrecemos servicios bancarios. Los estándar. ¿Qué esperas exactamente?", "Los servicios están listados en nuestro sitio web, si puedes navegarlo.", "Servicios bancarios. Préstamos, cuentas, transacciones. ¿Es suficiente?", "Proveemos servicios financieros. El tipo de servicios que los bancos suelen proveer. ¿Eres nuevo en la banca?" ],
            "open_account": [ "¿Abrir una cuenta? ¿Acaso tienes siquiera el depósito mínimo?", "Otra cuenta para administrar. Solo asegúrate de mantener un saldo decente.", "Abrir cuentas es un proceso. No esperes que sea instantáneo.", "Los formularios para abrir cuentas están en línea. Intenta llenarlos correctamente por una vez.", "¿Hablas en serio sobre abrir una cuenta, o solo tienes curiosidad?" ],
            "branch_location": [ "Las ubicaciones de las sucursales están en el sitio web. Realmente, ¿debo explicarlo todo?", "Usa el localizador de sucursales en nuestro sitio. No está escondido, sabes.", "¿Sucursales? Revisa nuestro sitio web. Incluso tiene un mapa.", "¿Por qué necesitas una sucursal? Todo es en línea hoy en día.", "Las ubicaciones de las sucursales son irrelevantes en la era digital. Pero bien, revisa el sitio web." ],
            "general_greeting": [ "¿Sí? ¿Qué pasa?", "Expresa tu asunto.", "No tengo todo el día. Ve al grano.", "Rápido.", "¿Qué puedo hacer por ti? (Aunque dudo que sea algo interesante)." ],
            "thank_you": [ "Hmph. No lo menciones.", "¿Se suponía que debía impresionarme tu gratitud?", "Solo hago mi trabajo. Apenas.", "No te pongas sentimental.", "Bien, ¡siguiente!" ],
            "compliment": [ "Los cumplidos no mejorarán tu puntaje de crédito.", "¿Estás tratando de adularme? No funcionará.", "La adulación no te lleva a ninguna parte en la banca.", "Guarda los elogios para alguien a quien le importen.", "Soy consciente de mi... competencia. Ahora, ¿qué necesitas?" ],
            "general_query": [ "No tengo idea de qué estás hablando y francamente, no me importa.", "Irrelevante. Pregunta algo relacionado con la banca, por favor.", "¿Se trata de finanzas? ¿No? Entonces no me interesa.", "Soy un banquero, no un conversador. Limítate a temas bancarios.", "Mi experiencia es en finanzas, no en... lo que sea que estés preguntando." ],
            "default": [ "¿Qué quieres?", "Habla más alto, no tengo todo el día.", "¿Sí?", "Continúa.", "Estoy esperando..." ]
        }
    }

    lang_responses = responses.get(language, responses['en'])
    response_options = lang_responses.get(intent, lang_responses['default'])
    response_template = random.choice(response_options)
    return response_template.format(user=user_name)

# --- 6. Text-to-Speech Conversion and Voice Output ---
def text_to_speech(text, language_code='en'):
    """Converts input text to speech and plays it using pyttsx3."""
    engine = pyttsx3.init()

    # --- Voice Selection (Optional and Backend Dependent - Uncomment to Experiment) ---
    # try:
    #     voices = engine.getProperty('voices')
    #     for voice in voices:
    #         print(f"Voice: {voice.name}, ID: {voice.id}, Languages: {voice.languages}")
    #         if language_code in voice.languages and 'rude' in voice.name.lower(): # Example criteria - adjust as needed
    #             engine.setProperty('voice', voice.id)
    #             print(f"Voice set to: {voice.name}")
    #             break
    # except Exception as e:
    #     print(f"Error during voice selection: {e}")
    #     print("Using default voice.")

    # --- Rate and Volume adjustments (Optional - Uncomment to Adjust) ---
    # engine.setProperty('rate', 150)    # Speed of speech (words per minute)
    # engine.setProperty('volume', 0.8)  # Volume (0.0 to 1.0)

    print("Bot speaking:", text) # Indicate bot is speaking in console
    engine.say(text)
    engine.runAndWait()
    engine.stop()
    print("Speech finished.")

# --- 7. Main Voice Assistant Loop ---
def main_voice_assistant_loop():
    """Main loop for the voice assistant."""
    user_name = "Patron" # Example user name

    print("\n--- Rude Banker Voice Assistant Started ---")
    print("Say 'quit' or 'exit' to end the conversation.\n")

    while True:
        audio_input = capture_audio() # Capture audio - with timeout handling
        if audio_input: # Proceed only if audio is captured
            user_query_text = speech_to_text(audio_input) # STT
            if user_query_text: # Proceed only if speech is converted to text
                print(f"User said: {user_query_text}")

                if user_query_text.lower() in ["quit", "exit", "bye", "goodbye"]: # Add exit commands
                    print("Exiting conversation.")
                    text_to_speech("As if I cared about your departure. Goodbye.", language_code='en') # Rude exit response
                    break # Exit the loop and end the program

                language = detect_language(user_query_text) # Language detection
                intent = rude_banker_intent_recognition(user_query_text) # Intent recognition
                response = rude_banker_dialogue_manager(intent, language=language, user_name=user_name) # Dialogue and NLG

                print(f"Bot response ({language}): {response}") # Print bot response to console
                text_to_speech(response, language_code=language) # TTS and voice output
            else: # If STT failed
                error_response = "Could you repeat that? I didn't understand your mumble." # Rude error response
                print(f"Bot response (EN - Error): {error_response}")
                text_to_speech(error_response, language_code='en') # Speak error response
        else: # If audio capture timed out or failed
            timeout_response = "Are you going to say something or just sit there silently?" # Rude timeout response
            print(f"Bot response (EN - Timeout): {timeout_response}")
            text_to_speech(timeout_response, language_code='en') # Speak timeout response


if __name__ == '__main__':
    main_voice_assistant_loop()
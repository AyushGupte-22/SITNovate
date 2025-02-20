# AI Bot with Voice Assistance

## 📌 Project Overview
This project is an **AI-powered chatbot with voice assistance** that listens to user queries and responds in a natural, conversational manner. It features a **Speech-to-Speech (S2S) system** and supports **multi-language recognition**, ensuring that the bot detects the language spoken by the user and responds in the same language.

### 🔥 Key Features
- **Voice Recognition**: Captures speech input and converts it to text.
- **Language Detection**: Identifies the language spoken by the user.
- **AI-powered Responses**: Uses **Google Gemini AI** to generate intelligent replies.
- **Character-Based Chatbot**: The bot has a personality (e.g., a rude banker) and only responds according to its character.
- **Text-to-Speech (TTS)**: Converts AI responses into speech output.
- **Web Interface**: Frontend built with **React + Vite** for user-friendly interaction.

---

## 🚀 Tech Stack
### 🖥️ **Frontend**
- React.js (with Vite for fast development)
- Web Speech API (for speech recognition & synthesis)

### 🛠 **Backend**
- Python (Flask / FastAPI for API handling)
- SpeechRecognition (Google STT API for Speech-to-Text)
- pyttsx3 (for Text-to-Speech conversion)
- langdetect (for language identification)

### 🤖 **AI Model**
- Google Gemini AI (for text processing and response generation)

---

## 🛠️ Installation & Setup

### **1️⃣ Install Dependencies**
Make sure **Yarn** is installed. If not, install it globally:
```sh
npm install --global yarn
```
Then, navigate to the project directory and install dependencies:
```sh
yarn install
```

### **2️⃣ Set Up API Keys**
Create a `.env` file in the root directory and add your Google API key:
```ini
VITE_GEMINI_API_KEY=your_google_api_key_here
```
Make sure to replace `your_google_api_key_here` with a valid API key from Google.

### **3️⃣ Start the Development Server**
Run the following command to start the project:
```sh
yarn dev
```
The project will be accessible at `http://localhost:5173` (default Vite port).

### **4️⃣ Run the Python Backend**
To start the backend (voice processing and AI model interaction):
```sh
python app.py
```

---

## 🔍 Folder Structure
```
📂 AI-Bot-Voice-Assistant
│── 📂 src
│   ├── 📂 components       # UI components
│   ├── 📂 config           # API configurations
│   ├── 📂 assets           # Static files
│   ├── 📂 utils            # Helper functions
│   ├── 📜 App.jsx          # Main application file
│   ├── 📜 VoiceAssistant.jsx # Handles speech input and output
│   ├── 📜 Context.jsx      # Context API for state management
│── 📂 backend
│   ├── 📜 app.py           # Python backend for speech processing
│── 📜 .env                 # API keys and environment variables
│── 📜 README.md            # Documentation
│── 📜 package.json         # Project metadata and dependencies
```

---

## 🛠️ Troubleshooting
### 1️⃣ **Vite Import Errors**
If you get an error like:
```
Failed to resolve import "@/config/gemini.js"
```
Try changing the import path:
```js
import run from "../config/gemini.js"; // Use relative path
```

### 2️⃣ **Invalid API Key Error**
If you see:
```
API key not valid. Please pass a valid API key.
```
- Make sure you have added the correct **Google Gemini API Key** in the `.env` file.
- Restart the server after adding the key:
  ```sh
  yarn dev
  ```

### 3️⃣ **Yarn Command Not Found**
If `yarn` is not recognized, install it globally:
```sh
npm install --global yarn
```
Then retry:
```sh
yarn install
```

---

## 🤖 Future Enhancements
- 🎤 **Improve Speech Recognition** (Use OpenAI Whisper for better accuracy)
- 🔥 **Expand Bot Personality Options** (Support multiple AI characters)
- 🌎 **Enhance Multilingual Support** (Translate responses dynamically)
- 📲 **Develop a Mobile App** (React Native version for mobile users)

---

## 🤝 Contributing
Want to improve this project? Feel free to fork and submit a PR!
```sh
git clone https://github.com/your-username/AI-Bot-Voice-Assistant.git
cd AI-Bot-Voice-Assistant
yarn install
```

---

## 📜 License
This project is licensed under the **MIT License**.

---

## 📝 Authors
👨‍💻 **Your Name** - Developer & Maintainer







# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

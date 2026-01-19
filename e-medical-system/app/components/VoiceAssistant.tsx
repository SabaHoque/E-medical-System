"use client";

import { useState } from "react";

export default function VoiceAssistant() {
  const [listening, setListening] = useState(false);

  const startListening = () => {
    // Use optional chaining to satisfy TypeScript
    const SpeechRecognitionClass =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognitionClass) {
      alert("Speech Recognition not supported in this browser");
      return;
    }

    const recognition: SpeechRecognition = new SpeechRecognitionClass();
    recognition.lang = "en-US";
    recognition.start();

    setListening(true);

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const command = event.results[0][0].transcript.toLowerCase();

      if (command.includes("login")) {
        window.location.href = "/auth/login";
      } else if (command.includes("sign up")) {
        window.location.href = "/auth/signup";
      } else if (command.includes("home")) {
        window.location.href = "/";
      } else if (command.includes("telemedicine")) {
        window.location.href = "/auth/login";
      } else {
        alert("Command not recognized: " + command);
      }

      setListening(false);
    };

    recognition.onerror = () => setListening(false);
    recognition.onend = () => setListening(false);
  };

  return (
    <button
      onClick={startListening}
      className="fixed bottom-6 right-6 bg-blue-600 text-white px-5 py-3 rounded-full shadow-lg hover:bg-blue-700 transition z-50"
    >
      🎤 {listening ? "Listening..." : "Voice Command"}
    </button>
  );
}

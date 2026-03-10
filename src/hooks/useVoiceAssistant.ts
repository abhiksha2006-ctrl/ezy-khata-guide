import { useState, useCallback, useRef } from "react";

type Language = "en" | "kn";

export function useVoiceAssistant() {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [language, setLanguage] = useState<Language>("en");
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const speak = useCallback((text: { en: string; kn: string }) => {
    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance();
    utterance.text = language === "en" ? text.en : text.kn;
    utterance.lang = language === "en" ? "en-US" : "kn-IN";
    utterance.rate = 0.85;
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    utteranceRef.current = utterance;
    speechSynthesis.speak(utterance);
  }, [language]);

  const stop = useCallback(() => {
    speechSynthesis.cancel();
    setIsSpeaking(false);
  }, []);

  const getText = useCallback((text: { en: string; kn: string }) => {
    return language === "en" ? text.en : text.kn;
  }, [language]);

  return { speak, stop, isSpeaking, language, setLanguage, getText };
}

import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

interface VoiceControlProps {
  isSpeaking: boolean;
  language: "en" | "kn";
  onLanguageChange: (lang: "en" | "kn") => void;
  onSpeak: () => void;
  onStop: () => void;
}

export function VoiceControl({ isSpeaking, language, onLanguageChange, onSpeak, onStop }: VoiceControlProps) {
  return (
    <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
      <span className="text-sm font-heading font-medium text-muted-foreground">
        {language === "en" ? "Voice Help" : "ಧ್ವನಿ ಸಹಾಯ"}
      </span>

      <select
        value={language}
        onChange={(e) => onLanguageChange(e.target.value as "en" | "kn")}
        className="px-3 py-1.5 text-sm rounded-md border bg-card text-foreground font-body"
      >
        <option value="en">English</option>
        <option value="kn">ಕನ್ನಡ</option>
      </select>

      {isSpeaking ? (
        <Button variant="secondary" size="sm" onClick={onStop} className="gap-2">
          <VolumeX className="h-4 w-4" />
          {language === "en" ? "Stop Voice" : "ನಿಲ್ಲಿಸಿ"}
        </Button>
      ) : (
        <Button variant="default" size="sm" onClick={onSpeak} className="gap-2">
          <Volume2 className="h-4 w-4" />
          {language === "en" ? "Read Aloud" : "ಓದಿ ಹೇಳಿ"}
        </Button>
      )}
    </div>
  );
}

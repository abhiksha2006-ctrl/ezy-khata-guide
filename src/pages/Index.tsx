import { useNavigate } from "react-router-dom";
import { services } from "@/data/services";
import { useVoiceAssistant } from "@/hooks/useVoiceAssistant";
import { VoiceControl } from "@/components/VoiceControl";

const Index = () => {
  const navigate = useNavigate();
  const { speak, stop, isSpeaking, language, setLanguage, getText } = useVoiceAssistant();

  const dashboardWelcome = {
    en: "Welcome to EasyKhata Navigator. This app will guide you step by step through BBMP e-Khata services. Choose one of the five services below: Apply for e-Khata, Check Status, Download e-Khata, B-Khata to A-Khata Conversion, or Transfer e-Khata.",
    kn: "ಈಸಿ ಖಾತಾ ನ್ಯಾವಿಗೇಟರ್‌ಗೆ ಸ್ವಾಗತ. ಈ ಆ್ಯಪ್ BBMP ಇ-ಖಾತಾ ಸೇವೆಗಳ ಮೂಲಕ ನಿಮ್ಮನ್ನು ಹಂತ ಹಂತವಾಗಿ ಮಾರ್ಗದರ್ಶಿಸುತ್ತದೆ. ಕೆಳಗಿನ ಐದು ಸೇವೆಗಳಲ್ಲಿ ಒಂದನ್ನು ಆಯ್ಕೆ ಮಾಡಿ.",
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-[700px] mx-auto px-4 py-8 md:py-12">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">
            EasyKhata Navigator
          </h1>
          <p className="text-lg font-body text-muted-foreground">
            {getText({
              en: "Simple Guide to BBMP e-Khata Services",
              kn: "BBMP ಇ-ಖಾತಾ ಸೇವೆಗಳಿಗೆ ಸರಳ ಮಾರ್ಗದರ್ಶಿ",
            })}
          </p>
        </div>

        {/* Voice help */}
        <VoiceControl
          isSpeaking={isSpeaking}
          language={language}
          onLanguageChange={setLanguage}
          onSpeak={() => speak(dashboardWelcome)}
          onStop={stop}
        />

        {/* Services heading */}
        <h2 className="text-xl font-heading font-semibold mt-8 mb-4 text-foreground">
          {getText({ en: "Choose a Service", kn: "ಸೇವೆಯನ್ನು ಆಯ್ಕೆ ಮಾಡಿ" })}
        </h2>

        {/* Service cards - single column, no ambiguity */}
        <div className="flex flex-col gap-4">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => { stop(); navigate(`/guide/${service.id}`); }}
              className="service-card text-left w-full"
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl" role="img" aria-hidden="true">
                  {service.icon}
                </span>
                <div>
                  <h3 className="text-lg font-heading font-semibold text-foreground">
                    {getText(service.title)}
                  </h3>
                  <p className="text-sm font-body text-muted-foreground mt-1">
                    {getText(service.description)}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-10 pt-6 border-t text-center">
          <p className="text-sm font-body text-muted-foreground">
            {getText({
              en: "Hackathon Demo — Digital Bridge for BBMP e-Khata Portal",
              kn: "ಹ್ಯಾಕಥಾನ್ ಡೆಮೊ — BBMP ಇ-ಖಾತಾ ಪೋರ್ಟಲ್‌ಗೆ ಡಿಜಿಟಲ್ ಸೇತುವೆ",
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;

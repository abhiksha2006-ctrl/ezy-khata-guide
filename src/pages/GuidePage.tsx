import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, ExternalLink, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import { useVoiceAssistant } from "@/hooks/useVoiceAssistant";
import { VoiceControl } from "@/components/VoiceControl";
import { StepCard } from "@/components/StepCard";

export default function GuidePage() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const { speak, stop, isSpeaking, language, setLanguage, getText } = useVoiceAssistant();

  const service = services.find((s) => s.id === serviceId);

  useEffect(() => {
    stop();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentStep, stop]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-heading mb-4">Service not found</h1>
          <Button onClick={() => navigate("/")}>
            <Home className="mr-2 h-4 w-4" /> Go Home
          </Button>
        </div>
      </div>
    );
  }

  const step = service.steps[currentStep];
  const isFirst = currentStep === 0;
  const isLast = currentStep === service.steps.length - 1;

  const handleSpeakStep = () => {
    speak({
      en: `${step.title.en}. ${step.instruction.en}`,
      kn: `${step.title.kn}. ${step.instruction.kn}`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-[700px] mx-auto px-4 py-6 md:py-10">
        {/* Back to dashboard */}
        <button
          onClick={() => { stop(); navigate("/"); }}
          className="flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          {getText({ en: "Back to Dashboard", kn: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್‌ಗೆ ಹಿಂತಿರುಗಿ" })}
        </button>

        {/* Service title */}
        <h1 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-2">
          {getText(service.title)}
        </h1>

        {/* Progress */}
        <div className="flex items-center gap-2 mb-6">
          {service.steps.map((_, i) => (
            <div
              key={i}
              className={`h-2 flex-1 rounded-full transition-all duration-300 ${
                i <= currentStep ? "bg-primary" : "bg-muted"
              }`}
            />
          ))}
          <span className="text-sm font-body text-muted-foreground ml-2">
            {currentStep + 1}/{service.steps.length}
          </span>
        </div>

        {/* Voice control */}
        <VoiceControl
          isSpeaking={isSpeaking}
          language={language}
          onLanguageChange={setLanguage}
          onSpeak={handleSpeakStep}
          onStop={stop}
        />

        {/* Step card */}
        <div className="mt-6">
          <StepCard
            key={currentStep}
            step={step}
            stepIndex={currentStep}
            isActive={true}
            getText={getText}
          />
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-between mt-8 gap-4">
          <Button
            variant="outline"
            size="lg"
            onClick={() => setCurrentStep((s) => s - 1)}
            disabled={isFirst}
            className="gap-2 font-heading text-base"
          >
            <ArrowLeft className="h-5 w-5" />
            {getText({ en: "Previous Step", kn: "ಹಿಂದಿನ ಹಂತ" })}
          </Button>

          {isLast ? (
            <Button
              size="lg"
              onClick={() => window.open(service.directLink, "_blank")}
              className="gap-2 font-heading text-base"
            >
              <ExternalLink className="h-5 w-5" />
              {getText({ en: "Open BBMP Website", kn: "BBMP ವೆಬ್‌ಸೈಟ್ ತೆರೆಯಿರಿ" })}
            </Button>
          ) : (
            <Button
              size="lg"
              onClick={() => setCurrentStep((s) => s + 1)}
              className="gap-2 font-heading text-base"
            >
              {getText({ en: "Next Step", kn: "ಮುಂದಿನ ಹಂತ" })}
              <ArrowRight className="h-5 w-5" />
            </Button>
          )}
        </div>

        {/* Direct link always visible */}
        <div className="mt-8 p-4 bg-accent rounded-lg text-center">
          <p className="text-sm font-body text-accent-foreground mb-2">
            {getText({
              en: "If you already know the steps, go directly to the website:",
              kn: "ನಿಮಗೆ ಹಂತಗಳು ಗೊತ್ತಿದ್ದರೆ, ನೇರವಾಗಿ ವೆಬ್‌ಸೈಟ್‌ಗೆ ಹೋಗಿ:",
            })}
          </p>
          <a
            href={service.directLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-heading font-semibold underline hover:no-underline"
          >
            bbmpeaasthi.karnataka.gov.in
          </a>
        </div>
      </div>
    </div>
  );
}

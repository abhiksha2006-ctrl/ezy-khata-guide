import { Step } from "@/data/services";

interface StepCardProps {
  step: Step;
  stepIndex: number;
  isActive: boolean;
  getText: (text: { en: string; kn: string }) => string;
}

export function StepCard({ step, stepIndex, isActive, getText }: StepCardProps) {
  return (
    <div className={`step-card ${isActive ? "step-card-active" : ""} animate-fade-in-up`}>
      <h2 className="text-xl md:text-2xl font-heading font-semibold mb-4 text-foreground">
        {getText(step.title)}
      </h2>

      <p className="text-base md:text-lg font-body leading-relaxed mb-6 text-foreground">
        {getText(step.instruction)}
      </p>

      {/* Screenshot with focus frame */}
      <div className="relative rounded-md overflow-hidden border-2 border-border">
        <img
          src={step.image}
          alt={getText(step.title)}
          className="w-full h-auto"
          loading="lazy"
        />
        {/* Dark overlay except highlight area */}
        {step.highlightArea && isActive && (
          <>
            <div className="absolute inset-0 bg-foreground/40 pointer-events-none" />
            <div
              className="focus-frame pointer-events-none"
              style={{
                top: step.highlightArea.top,
                left: step.highlightArea.left,
                width: step.highlightArea.width,
                height: step.highlightArea.height,
              }}
            />
            {/* Clear window in overlay */}
            <div
              className="absolute pointer-events-none bg-transparent"
              style={{
                top: step.highlightArea.top,
                left: step.highlightArea.left,
                width: step.highlightArea.width,
                height: step.highlightArea.height,
                boxShadow: "0 0 0 9999px hsl(var(--foreground) / 0.4)",
                borderRadius: "0.375rem",
              }}
            />
          </>
        )}
      </div>

      <div className="mt-4 text-sm text-muted-foreground font-body text-center">
        {getText({ en: `Screenshot ${stepIndex + 1}`, kn: `ಸ್ಕ್ರೀನ್‌ಶಾಟ್ ${stepIndex + 1}` })}
      </div>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import { Activity, HeartPulse, ShieldCheck, Stethoscope } from "lucide-react";

const FloatingIcon = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`absolute opacity-80 text-primary animate-float ${className}`}>{children}</div>
);

const Hero = () => {
  return (
    <section className="relative pt-20 pb-24">
      <div className="container relative">
        <div className="relative glass rounded-2xl p-8 md:p-12 overflow-hidden">
          {/* Floating medical icons */}
          <FloatingIcon className="-top-6 left-6"><HeartPulse className="h-10 w-10" /></FloatingIcon>
          <FloatingIcon className="top-10 -right-4 text-accent"><Stethoscope className="h-12 w-12" /></FloatingIcon>
          <FloatingIcon className="-bottom-6 left-1/3 text-primary"><Activity className="h-9 w-9" /></FloatingIcon>
          <FloatingIcon className="bottom-4 right-10 text-accent"><ShieldCheck className="h-10 w-10" /></FloatingIcon>

          <div className="relative max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              TokenWalla — Smart Tokens. Smooth Care.
            </h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground">
              The AI-powered hospital token booking system that reduces waiting times,
              streamlines clinic workflow, and keeps doctors in complete control.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/919353292757?text=Hi%20TokenWalla%2C%20I%27d%20like%20to%20book%20a%20token."
                target="_blank"
                rel="noopener"
              >
                <Button variant="hero" size="lg">Book a Token</Button>
              </a>
              <a href="#how" className="story-link text-primary">See how it works</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
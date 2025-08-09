import { Button } from "@/components/ui/button";
import logo from "@/assets/tockenwalla-logo.png";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <nav className="container flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <img src={logo} alt="TockenWalla logo" loading="lazy" className="h-8 w-auto" />
          <span className="text-lg font-extrabold tracking-tight">TockenWalla</span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
          <a href="#how" className="text-muted-foreground hover:text-foreground transition-colors">How It Works</a>
          <a href="#benefits" className="text-muted-foreground hover:text-foreground transition-colors">Benefits</a>
          <a href="#policies" className="text-muted-foreground hover:text-foreground transition-colors">Policies</a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
        </div>
        <div className="flex items-center gap-2">
          <a href="#contact">
            <Button variant="hero" size="lg">Book a Token</Button>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
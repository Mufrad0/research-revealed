import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Introduction" },
  { href: "/methodology", label: "Methodology" },
  { href: "/global-trends", label: "Global Trends" },
  { href: "/correlation", label: "Correlation" },
  { href: "/country-comparison", label: "Countries" },
  { href: "/expert-uncertainty", label: "Uncertainty" },
  { href: "/conclusion", label: "Conclusion" },
  { href: "/team", label: "Team" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full bg-background">
      {/* Top bar with logo */}
      <div className="container flex h-12 items-center border-b">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-serif text-lg font-bold text-foreground">
            DS105A Research
          </span>
          <span className="text-xs text-muted-foreground hidden sm:inline">• Pandas Express 🐼</span>
        </Link>
        
        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden h-9 w-9 ml-auto"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Tab Navigation */}
      <div className="hidden lg:block border-b bg-muted/30">
        <div className="container">
          <nav className="flex items-center gap-0">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "relative px-4 py-2.5 text-sm font-medium transition-all",
                  "border-x border-t rounded-t-md -mb-px",
                  location.pathname === link.href
                    ? "bg-background text-foreground border-border"
                    : "bg-transparent text-muted-foreground border-transparent hover:text-foreground hover:bg-muted/50"
                )}
              >
                {link.label}
                {/* Hide bottom border for active tab to connect with content */}
                {location.pathname === link.href && (
                  <span className="absolute bottom-0 left-0 right-0 h-px bg-background" />
                )}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="lg:hidden border-b bg-background">
          <div className="container py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "px-4 py-3 text-sm font-medium rounded-md transition-colors",
                  location.pathname === link.href
                    ? "bg-secondary text-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

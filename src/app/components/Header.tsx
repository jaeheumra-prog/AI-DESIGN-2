import { useState } from "react";
import { ArrowLeft, Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const navItems = [
  { label: "현실", id: "problem" },
  { label: "문제", id: "limits" },
  { label: "해결책", id: "solution" },
  { label: "핵심 기능", id: "features" },
  { label: "비교", id: "compare" },
  { label: "확장", id: "roadmap" },
  { label: "마무리", id: "closing" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const goBackToShorts = () => {
    setIsMenuOpen(false);

    if (window.parent && window.parent !== window) {
      window.parent.postMessage({ type: "close-profile-overlay" }, "*");
      return;
    }

    window.location.href = "./shorts.html";
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-[#ead9b4]/70 bg-[#fbf7ef]/88 backdrop-blur-xl supports-[backdrop-filter]:bg-[#fbf7ef]/70">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => scrollToSection("intro")}
          className="flex items-center gap-3 text-left"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#1f1915] text-sm font-semibold text-white">
            AI
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b4882f]">AI DESIGN</p>
            <p className="text-sm text-[#6c6053]">영상 기반 채용 플랫폼</p>
          </div>
        </button>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-sm font-medium text-[#6a5d50] transition-colors hover:text-[#1f1915]"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={goBackToShorts}
            className="hidden rounded-full border-[#ddc38a] bg-white/80 text-[#1f1915] hover:bg-[#f7edd5] sm:inline-flex"
          >
            <ArrowLeft className="h-4 w-4" />
            Shorts
          </Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="rounded-full text-[#1f1915] hover:bg-[#f5ead3] md:hidden"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {isMenuOpen ? (
        <div className="border-t border-[#ead9b4]/70 bg-[#fbf7ef] md:hidden">
          <div className="space-y-1 px-4 py-4 sm:px-6">
            <button
              onClick={goBackToShorts}
              className="block w-full rounded-2xl px-3 py-3 text-left text-sm font-medium text-[#1f1915] hover:bg-[#f7edd5]"
            >
              Shorts로 돌아가기
            </button>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full rounded-2xl px-3 py-3 text-left text-sm font-medium text-[#6a5d50] hover:bg-[#f7edd5] hover:text-[#1f1915]"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}

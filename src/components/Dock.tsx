import { useState, useEffect } from "react";
import { Home, User, Briefcase, FolderOpen, Award, Mail, Menu, X } from "lucide-react";
import { SiriIcon } from "./SiriIcon";

interface DockItem {
  icon: React.ElementType;
  label: string;
  href: string;
}

const dockItems: DockItem[] = [
  { icon: Home, label: "Home", href: "#home" },
  { icon: User, label: "About", href: "#about" },
  { icon: Briefcase, label: "Experience", href: "#experience" },
  { icon: FolderOpen, label: "Projects", href: "#projects" },
  { icon: Award, label: "Skills", href: "#skills" },
  { icon: Mail, label: "Contact", href: "#contact" },
];

const chatPopupMessages = [
  "👋"
];

interface DockProps {
  onChatOpen: () => void;
  isChatOpen: boolean;
}

export const Dock = ({ onChatOpen, isChatOpen }: DockProps) => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState(chatPopupMessages[0]);
  const [popupIndex, setPopupIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => {
      if (!isChatOpen) {
        setShowPopup(true);
      }
    }, 3000);
    return () => clearTimeout(showTimer);
  }, [isChatOpen]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (showPopup && !isChatOpen) {
        setPopupIndex((prev) => (prev + 1) % chatPopupMessages.length);
        setPopupMessage(chatPopupMessages[(popupIndex + 1) % chatPopupMessages.length]);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [showPopup, isChatOpen, popupIndex]);

  useEffect(() => {
    if (isChatOpen) setShowPopup(false);
  }, [isChatOpen]);

  const handleClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Dock */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 hidden md:block">
        <div className="relative dock-glossy px-6 py-4 flex items-center gap-3 border border-white/20">
          {dockItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleClick(item.href)}
              className="dock-item group relative flex flex-col items-center"
            >
              <div className="w-11 h-11 flex items-center justify-center bg-white/10 hover:bg-primary transition-colors rounded-xl">
                <item.icon className="w-5 h-5 text-foreground group-hover:text-primary-foreground transition-colors" />
              </div>
              <span className="absolute -top-10 px-3 py-1.5 bg-card/90 backdrop-blur-sm text-xs text-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10 rounded-lg">
                {item.label}
              </span>
            </button>
          ))}

          <div className="w-px h-8 bg-white/20" />

          {/* Siri Chat Button */}
          <button
            onClick={onChatOpen}
            className="dock-item group relative flex flex-col items-center"
          >
            <div className="w-11 h-11 flex items-center justify-center bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-400 hover:scale-105 transition-all rounded-xl relative overflow-hidden">
              <SiriIcon className="w-7 h-7" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            </div>
            <span className="absolute -top-10 px-3 py-1.5 bg-card/90 backdrop-blur-sm text-xs text-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10 rounded-lg">
              AI Assistant
            </span>

            {showPopup && !isChatOpen && (
              <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="chat-popup-glossy px-4 py-2 text-sm text-foreground whitespace-nowrap border border-white/20 rounded-xl bg-gradient-to-r from-purple-500/20 to-cyan-400/20">
                  {popupMessage}
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-purple-500/30" />
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Bottom Nav */}
      <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
        <div className="dock-glossy px-4 py-3 flex items-center justify-between border border-white/20">
          {/* Hamburger Menu */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-xl"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-foreground" />
            ) : (
              <Menu className="w-5 h-5 text-foreground" />
            )}
          </button>

          {/* Quick Nav - 3 main items */}
          <div className="flex items-center gap-2">
            <button onClick={() => handleClick("#home")} className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-xl">
              <Home className="w-5 h-5 text-foreground" />
            </button>
            <button onClick={() => handleClick("#projects")} className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-xl">
              <FolderOpen className="w-5 h-5 text-foreground" />
            </button>
            <button onClick={() => handleClick("#contact")} className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-xl">
              <Mail className="w-5 h-5 text-foreground" />
            </button>
          </div>

          {/* Siri Button */}
          <button
            onClick={onChatOpen}
            className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-400 rounded-xl relative"
          >
            <SiriIcon className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
          </button>
        </div>

        {/* Mobile Menu Popup */}
        {isMobileMenuOpen && (
          <div className="absolute bottom-16 left-0 right-0 dock-glossy p-4 border border-white/20 rounded-2xl animate-fade-in">
            <div className="grid grid-cols-3 gap-3">
              {dockItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleClick(item.href)}
                  className="flex flex-col items-center gap-2 p-3 bg-white/5 hover:bg-primary rounded-xl transition-colors group"
                >
                  <item.icon className="w-5 h-5 text-foreground group-hover:text-primary-foreground" />
                  <span className="text-xs text-muted-foreground group-hover:text-primary-foreground">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

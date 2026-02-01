import { useState, useRef, useEffect } from "react";
import { X, Send, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SiriIcon } from "./SiriIcon";

interface Message {
  role: "user" | "assistant";
  content: string;
}



interface AIChatbotProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AIChatbot = ({ isOpen, onClose }: AIChatbotProps) => {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hey there! 👋 The AI chatbot is disabled on the public site for security reasons. Please contact me directly for more info!" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Chatbot is disabled for public deployment
  const sendMessage = () => {
    setMessages([
      { role: "assistant", content: "Hey there! 👋 The AI chatbot is disabled on the public site for security reasons. Please contact me directly for more info!" }
    ]);
    setInput("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div 
      className={`fixed bottom-28 right-4 md:right-6 z-50 w-[calc(100%-2rem)] md:w-96 max-w-md overflow-hidden transition-all duration-300 ${
        isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'
      }`}
    >
      <div className="chatbot-glossy border border-white/20 rounded-2xl overflow-hidden shadow-2xl">
        {/* Header with Siri styling */}
        <div className="bg-gradient-to-r from-red-600 via-red-500 to-red-400 p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm flex items-center justify-center rounded-xl overflow-hidden">
              <SiriIcon className="w-8 h-8" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">ATLAS</p>
              <p className="text-white/70 text-xs flex items-center gap-1">
                <span className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" />
              Carrying intelligence across your systems.
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-white/70 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="h-72 md:h-80 overflow-y-auto p-4 space-y-4 bg-card/80 backdrop-blur-md">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex gap-3 ${message.role === "user" ? "flex-row-reverse" : ""}`}
            >
              <div className={`w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-xl overflow-hidden ${
                message.role === "user" ? "bg-primary" : "bg-gradient-to-br from-red-500 to-red-400"
              }`}>
                {message.role === "user" ? (
                  <User className="w-4 h-4 text-primary-foreground" />
                ) : (
                  <SiriIcon className="w-6 h-6" />
                )}
              </div>
              <div
                className={`max-w-[75%] p-3 text-sm rounded-2xl ${
                  message.role === "user"
                    ? "bg-primary text-primary-foreground rounded-br-md"
                    : "bg-muted/80 backdrop-blur-sm text-foreground rounded-bl-md"
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-400 flex items-center justify-center rounded-xl overflow-hidden">
                <SiriIcon className="w-6 h-6" />
              </div>
              <div className="bg-muted/80 backdrop-blur-sm p-3 text-sm text-muted-foreground rounded-2xl rounded-bl-md">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-2 h-2 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-2 h-2 bg-red-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t border-white/10 bg-card/90 backdrop-blur-md">
          <div className="flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Chatbot disabled for public demo"
              className="bg-background/50 border-white/10 text-foreground placeholder:text-muted-foreground rounded-xl focus:border-purple-500"
              disabled
            />
            <Button 
              className="bg-gradient-to-r from-white-500 to-cyan-400 text-white hover:opacity-90 rounded-xl"
              disabled
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

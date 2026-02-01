export const SiriIcon = ({ className = "w-6 h-6" }: { className?: string }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={className}
      fill="none"
    >
      <defs>
        <linearGradient id="siriGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7B68EE" />
          <stop offset="30%" stopColor="#FF6B9D" />
          <stop offset="60%" stopColor="#00D4FF" />
          <stop offset="100%" stopColor="#7B68EE" />
        </linearGradient>
        <linearGradient id="siriGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#00D4FF" />
          <stop offset="50%" stopColor="#FF6B9D" />
          <stop offset="100%" stopColor="#7B68EE" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="45" fill="url(#siriGradient1)" opacity="0.9" />
      <circle cx="50" cy="50" r="35" fill="url(#siriGradient2)" opacity="0.7" />
      <circle cx="50" cy="50" r="25" fill="url(#siriGradient1)" opacity="0.8" />
      <circle cx="50" cy="50" r="15" fill="white" opacity="0.9" />
      <style>
        {`
          @keyframes siriPulse {
            0%, 100% { transform: scale(1); opacity: 0.9; }
            50% { transform: scale(1.05); opacity: 1; }
          }
          circle { animation: siriPulse 2s ease-in-out infinite; }
          circle:nth-child(3) { animation-delay: 0.2s; }
          circle:nth-child(4) { animation-delay: 0.4s; }
          circle:nth-child(5) { animation-delay: 0.6s; }
        `}
      </style>
    </svg>
  );
};

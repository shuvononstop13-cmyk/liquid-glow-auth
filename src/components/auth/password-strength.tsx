import { useEffect, useState } from "react";

interface PasswordStrengthProps {
  password: string;
}

export function PasswordStrength({ password }: PasswordStrengthProps) {
  const [strength, setStrength] = useState(0);
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    const calculateStrength = (pwd: string) => {
      let score = 0;
      let messages = [];

      if (pwd.length >= 8) {
        score += 1;
      } else {
        messages.push("At least 8 characters");
      }

      if (/[a-z]/.test(pwd)) {
        score += 1;
      } else {
        messages.push("Lowercase letter");
      }

      if (/[A-Z]/.test(pwd)) {
        score += 1;
      } else {
        messages.push("Uppercase letter");
      }

      if (/[0-9]/.test(pwd)) {
        score += 1;
      } else {
        messages.push("Number");
      }

      if (/[^A-Za-z0-9]/.test(pwd)) {
        score += 1;
      } else {
        messages.push("Special character");
      }

      setStrength(score);
      
      if (score === 5) {
        setFeedback("Very Strong");
      } else if (score >= 4) {
        setFeedback("Strong");
      } else if (score >= 3) {
        setFeedback("Medium");
      } else if (score >= 2) {
        setFeedback("Weak");
      } else {
        setFeedback("Very Weak");
      }
    };

    if (password) {
      calculateStrength(password);
    } else {
      setStrength(0);
      setFeedback("");
    }
  }, [password]);

  if (!password) return null;

  const getStrengthColor = () => {
    switch (strength) {
      case 5:
        return "bg-neon-primary";
      case 4:
        return "bg-neon-secondary";
      case 3:
        return "bg-yellow-500";
      case 2:
        return "bg-orange-500";
      default:
        return "bg-red-500";
    }
  };

  const getTextColor = () => {
    switch (strength) {
      case 5:
        return "text-neon-primary";
      case 4:
        return "text-neon-secondary";
      case 3:
        return "text-yellow-500";
      case 2:
        return "text-orange-500";
      default:
        return "text-red-500";
    }
  };

  return (
    <div className="space-y-2 mt-2">
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((level) => (
          <div
            key={level}
            className={`h-1 flex-1 rounded-full transition-all duration-300 ${
              level <= strength
                ? getStrengthColor()
                : "bg-gray-600"
            }`}
          />
        ))}
      </div>
      {feedback && (
        <p className={`text-xs font-medium ${getTextColor()}`}>
          {feedback}
        </p>
      )}
    </div>
  );
}
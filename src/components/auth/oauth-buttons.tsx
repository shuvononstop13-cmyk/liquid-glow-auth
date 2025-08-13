import { Button } from "@/components/ui/button";

interface OAuthButtonProps {
  provider: "apple" | "google" | "microsoft";
  onClick: () => void;
}

export function OAuthButton({ provider, onClick }: OAuthButtonProps) {
  const getProviderConfig = () => {
    switch (provider) {
      case "apple":
        return {
          name: "Apple",
          icon: "🍎",
          className: "bg-black hover:bg-gray-800 text-white border-gray-700"
        };
      case "google":
        return {
          name: "Google",
          icon: "🔍",
          className: "bg-white hover:bg-gray-50 text-gray-900 border-gray-300"
        };
      case "microsoft":
        return {
          name: "Microsoft",
          icon: "🪟",
          className: "bg-blue-600 hover:bg-blue-700 text-white border-blue-500"
        };
    }
  };

  const config = getProviderConfig();

  return (
    <Button
      type="button"
      variant="outline"
      onClick={onClick}
      className={`
        w-full glass-input hover:neon-glow transition-all duration-300
        flex items-center justify-center space-x-2
        ${config.className}
      `}
    >
      <span className="text-lg">{config.icon}</span>
      <span className="font-medium">Continue with {config.name}</span>
    </Button>
  );
}

export function OAuthButtons() {
  const handleOAuthLogin = (provider: string) => {
    console.log(`OAuth login with ${provider}`);
    // Implement OAuth logic here
  };

  return (
    <div className="space-y-3">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-glass-border" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-3">
        <OAuthButton 
          provider="apple" 
          onClick={() => handleOAuthLogin("Apple")} 
        />
        <OAuthButton 
          provider="google" 
          onClick={() => handleOAuthLogin("Google")} 
        />
        <OAuthButton 
          provider="microsoft" 
          onClick={() => handleOAuthLogin("Microsoft")} 
        />
      </div>
    </div>
  );
}
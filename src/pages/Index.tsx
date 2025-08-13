import { useEffect } from "react";
import { AuthForm } from "@/components/auth/auth-form";
import { WaveBanner } from "@/components/auth/wave-banner";
import { ThemeSwitcher } from "@/components/ui/theme-switcher";

const Index = () => {
  useEffect(() => {
    // Set dark theme by default
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="min-h-screen bg-auth-bg theme-transition">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left Side - Authentication Form */}
        <div className="flex items-center justify-center p-8 lg:p-12">
          <div className="w-full max-w-md glass-panel p-8 rounded-2xl liquid-float-1">
            <AuthForm />
          </div>
        </div>

        {/* Right Side - Wave Banner */}
        <div className="hidden lg:block relative">
          <WaveBanner />
        </div>
      </div>

      {/* Theme Switcher - Bottom Left Corner */}
      <div className="fixed bottom-6 left-6 z-50">
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Index;

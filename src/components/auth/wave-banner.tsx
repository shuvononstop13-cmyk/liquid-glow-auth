import naturalOcean from "@/assets/natural-ocean-waves.jpg";
import { useEffect, useState } from "react";

export function WaveBanner() {
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    setShowWelcome(true);
  }, []);

  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* Natural Ocean Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${naturalOcean})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-teal-900/40" />
      </div>

      {/* Realistic Water Effects */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-blue-500/20 to-transparent" />
        <div className="absolute bottom-10 left-0 w-full h-32 bg-gradient-to-t from-teal-400/15 to-transparent" />
        <div className="absolute bottom-20 left-0 w-full h-24 bg-gradient-to-t from-cyan-300/10 to-transparent" />
        
        {/* Subtle Flowing Water Overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />
          <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-300/35 to-transparent" />
        </div>
      </div>

      {/* Static Water Droplets */}
      <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-white/30 opacity-60" />
      <div className="absolute top-1/2 right-1/3 w-2 h-2 rounded-full bg-cyan-200/40" />
      <div className="absolute bottom-1/3 left-1/2 w-4 h-4 rounded-full bg-blue-200/25" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center space-y-6 px-8">
          {/* Welcome Animation */}
          <div className={`transition-all duration-1000 ${showWelcome ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
            <p className="text-lg text-white/80 font-medium mb-2">
              Welcome to
            </p>
          </div>
          
          <h1 className="text-6xl font-black tracking-wider text-white pulse-neon drop-shadow-2xl">
            Streamly
          </h1>
          
          {/* Decorative Elements */}
          <div className="flex justify-center space-x-4 mt-8">
            <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <div className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse delay-100" />
            <div className="w-2 h-2 rounded-full bg-blue-300 animate-pulse delay-200" />
          </div>
        </div>
      </div>

      {/* Subtle Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }}
      />
    </div>
  );
}
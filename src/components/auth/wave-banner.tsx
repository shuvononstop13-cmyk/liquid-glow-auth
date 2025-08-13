import waveBanner from "@/assets/wave-banner.jpg";

export function WaveBanner() {
  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${waveBanner})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-neon-primary/20 to-wave-tertiary/30" />
      </div>

      {/* Animated Wave Overlays */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-wave-primary/40 to-transparent wave-animation" />
        <div className="absolute bottom-8 left-0 w-full h-24 bg-gradient-to-t from-wave-secondary/30 to-transparent liquid-float-2" />
        <div className="absolute bottom-16 left-0 w-full h-16 bg-gradient-to-t from-wave-tertiary/20 to-transparent liquid-float-3" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-12 h-12 rounded-full bg-neon-glow liquid-float-1 opacity-60" />
      <div className="absolute top-1/2 right-1/3 w-8 h-8 rounded-full bg-neon-bright/40 liquid-float-2" />
      <div className="absolute bottom-1/3 left-1/2 w-16 h-16 rounded-full bg-wave-secondary/30 liquid-float-3" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center space-y-6 px-8">
          <h1 className="text-6xl font-black tracking-wider neon-text pulse-neon">
            Streamly
          </h1>
          <div className="space-y-2">
            <p className="text-xl text-neon-bright font-medium">
              Advanced Authentication
            </p>
            <p className="text-lg text-foreground/80">
              Secure • Fast • Beautiful
            </p>
          </div>
          
          {/* Decorative Elements */}
          <div className="flex justify-center space-x-4 mt-8">
            <div className="w-2 h-2 rounded-full bg-neon-primary animate-pulse" />
            <div className="w-2 h-2 rounded-full bg-neon-secondary animate-pulse delay-100" />
            <div className="w-2 h-2 rounded-full bg-neon-bright animate-pulse delay-200" />
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
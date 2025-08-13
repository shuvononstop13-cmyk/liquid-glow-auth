import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				orbitron: ['Orbitron', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Liquid Glass Authentication Colors
				glass: {
					background: 'hsl(var(--glass-background))',
					border: 'hsl(var(--glass-border))',
					shadow: 'hsl(var(--glass-shadow))',
				},
				neon: {
					primary: 'hsl(var(--neon-primary))',
					secondary: 'hsl(var(--neon-secondary))',
					glow: 'hsl(var(--neon-glow))',
					bright: 'hsl(var(--neon-bright))',
				},
				auth: {
					bg: 'hsl(var(--auth-bg))',
					panel: 'hsl(var(--auth-panel))',
					input: 'hsl(var(--auth-input))',
					'input-focus': 'hsl(var(--auth-input-focus))',
				},
				wave: {
					primary: 'hsl(var(--wave-primary))',
					secondary: 'hsl(var(--wave-secondary))',
					tertiary: 'hsl(var(--wave-tertiary))',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				// Liquid Glass Animations
				liquidFloat1: {
					'0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
					'33%': { transform: 'translateY(-10px) rotate(1deg)' },
					'66%': { transform: 'translateY(5px) rotate(-1deg)' }
				},
				liquidFloat2: {
					'0%, 100%': { transform: 'translateX(0px) scale(1)' },
					'50%': { transform: 'translateX(10px) scale(1.05)' }
				},
				liquidFloat3: {
					'0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
					'25%': { transform: 'translateY(-5px) translateX(5px)' },
					'75%': { transform: 'translateY(5px) translateX(-5px)' }
				},
				liquidRipple: {
					'0%': { transform: 'scale(1)', opacity: '0.8' },
					'50%': { transform: 'scale(1.1)', opacity: '0.4' },
					'100%': { transform: 'scale(1)', opacity: '0.8' }
				},
				waveFlow: {
					'0%, 100%': { transform: 'translateX(0%) scaleY(1)' },
					'50%': { transform: 'translateX(2%) scaleY(1.1)' }
				},
				pulseNeon: {
					'0%': { filter: 'brightness(1) drop-shadow(0 0 5px hsl(var(--neon-glow)))' },
					'100%': { filter: 'brightness(1.2) drop-shadow(0 0 20px hsl(var(--neon-glow)))' }
				},
				shimmer: {
					'0%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '200% 0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'liquid-float-1': 'liquidFloat1 4s ease-in-out infinite',
				'liquid-float-2': 'liquidFloat2 5s ease-in-out infinite',
				'liquid-float-3': 'liquidFloat3 6s ease-in-out infinite',
				'liquid-ripple': 'liquidRipple 2s ease-out',
				'wave-flow': 'waveFlow 3s ease-in-out infinite',
				'pulse-neon': 'pulseNeon 2s ease-in-out infinite alternate',
				'shimmer': 'shimmer 2s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

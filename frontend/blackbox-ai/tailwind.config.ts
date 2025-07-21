import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      // Quantum Color System
      colors: {
        // Deep Space Foundation
        cosmic: {
          50: '#0A0E27',
          100: '#0F1629',
          200: '#141B2E',
          300: '#1A1F33',
          400: '#1F2437',
          500: '#25293C',
          600: '#2A2E40',
          700: '#2F3345',
          800: '#353849',
          900: '#3A3D4E',
          950: '#000000',
        },
        // Quantum Accent Colors
        quantum: {
          cyan: '#00FFFF',
          purple: '#8A2BE2',
          green: '#39FF14',
          orange: '#FF4500',
          pink: '#FF1493',
          blue: '#00BFFF',
        },
        // Glass Morphism Colors
        glass: {
          light: 'rgba(255, 255, 255, 0.03)',
          medium: 'rgba(255, 255, 255, 0.08)',
          heavy: 'rgba(255, 255, 255, 0.15)',
          border: 'rgba(255, 255, 255, 0.1)',
        },
        // Business Analytics Colors
        status: {
          success: '#10B981',
          warning: '#F59E0B',
          error: '#EF4444',
          info: '#3B82F6',
        },
      },
      // Glassmorphism Utilities
      backdropBlur: {
        '3xl': '64px',
        '4xl': '128px',
      },
      // Advanced Gradients
      backgroundImage: {
        'quantum-gradient': 'linear-gradient(135deg, #000000 0%, #0A0E27 50%, #141B2E 100%)',
        'neon-gradient': 'linear-gradient(90deg, #00FFFF 0%, #8A2BE2 50%, #39FF14 100%)',
        'cosmic-mesh': 'radial-gradient(circle at 20% 50%, #8A2BE2 0%, transparent 50%), radial-gradient(circle at 80% 20%, #00FFFF 0%, transparent 50%), radial-gradient(circle at 40% 80%, #39FF14 0%, transparent 50%)',
        'glass-reflection': 'linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 50%, transparent 100%)',
      },
      // Neural Animation System
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'particle': 'particle 20s linear infinite',
        'morph': 'morph 8s ease-in-out infinite',
        'quantum-spin': 'quantum-spin 4s linear infinite',
        'neural-pulse': 'neural-pulse 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(0, 255, 255, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(0, 255, 255, 1), 0 0 30px rgba(0, 255, 255, 0.5)' },
        },
        particle: {
          '0%': { transform: 'translateX(-100vw) translateY(0px)' },
          '100%': { transform: 'translateX(100vw) translateY(-100vh)' },
        },
        morph: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
        },
        'quantum-spin': {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '50%': { transform: 'rotate(180deg) scale(1.1)' },
          '100%': { transform: 'rotate(360deg) scale(1)' },
        },
        'neural-pulse': {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
      },
      // Quantum Shadows
      boxShadow: {
        'quantum': '0 8px 32px rgba(0, 255, 255, 0.3), 0 4px 16px rgba(138, 43, 226, 0.2)',
        'neural': '0 0 20px rgba(57, 255, 20, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.3), 0 4px 16px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        'glow-cyan': '0 0 20px rgba(0, 255, 255, 0.6)',
        'glow-purple': '0 0 20px rgba(138, 43, 226, 0.6)',
        'glow-green': '0 0 20px rgba(57, 255, 20, 0.6)',
      },
      // Advanced Typography
      fontFamily: {
        'quantum': ['Orbitron', 'monospace'],
        'neural': ['Roboto Mono', 'monospace'],
      },
      // Fluid Spacing
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      // Screen Sizes for Ultra-Wide Displays
      screens: {
        '3xl': '1600px',
        '4xl': '1920px',
        '5xl': '2560px',
      },
      // Quantum Border Radius
      borderRadius: {
        'quantum': '20px',
        'neural': '16px',
        'glass': '24px',
      },
    },
  },
  plugins: [
    // Custom Glassmorphism Plugin
    function({ addUtilities }: any) {
      const newUtilities = {
        '.glass-light': {
          background: 'rgba(255, 255, 255, 0.03)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        },
        '.glass-medium': {
          background: 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
        },
        '.glass-heavy': {
          background: 'rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(32px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
        },
        '.glass-ultra': {
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(64px)',
          border: '2px solid rgba(255, 255, 255, 0.1)',
        },
        '.quantum-border': {
          border: '2px solid transparent',
          backgroundImage: 'linear-gradient(90deg, #00FFFF, #8A2BE2, #39FF14)',
          backgroundClip: 'border-box',
          borderImage: 'linear-gradient(90deg, #00FFFF, #8A2BE2, #39FF14) 1',
        },
        '.neural-glow': {
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: '-2px',
            background: 'linear-gradient(45deg, #00FFFF, #8A2BE2, #39FF14, #FF4500)',
            borderRadius: 'inherit',
            zIndex: '-1',
            opacity: '0.7',
            filter: 'blur(8px)',
          },
        },
      }
      addUtilities(newUtilities)
    },
  ],
}

export default config
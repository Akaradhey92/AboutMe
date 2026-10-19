/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#060911',
          900: '#0a0f1d',
          850: '#0e1628',
          800: '#152037',
          700: '#1e2e4f',
          600: '#2c426f',
        },
        slate: {
          850: '#111c30',
          900: '#0f172a',
          950: '#020617',
        },
        accent: {
          cyan: '#06b6d4',
          sky: '#0ea5e9',
          teal: '#14b8a6',
          blue: '#3b82f6',
          amber: '#f59e0b',
        },
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
        mono: [
          '"JetBrains Mono"',
          '"Fira Code"',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace',
        ],
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -5px rgba(6, 182, 212, 0.15)',
        'glow-card': '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
};


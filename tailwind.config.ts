import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    // Safelist gradient color combinations used in departments
    'from-green-400',
    'to-green-600',
    'from-red-400',
    'to-red-600',
    'from-blue-400',
    'to-blue-600',
    'from-purple-400',
    'to-purple-600',
    'from-orange-400',
    'to-orange-600',
    'from-yellow-400',
    'to-yellow-600',
    'from-pink-400',
    'to-pink-600',
    'bg-gradient-to-br',
    'bg-gradient-to-r',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F6FAFD',   // Very light blue/white
          100: '#E8F2F9',
          200: '#B3CFE5',  // Light blue
          300: '#8DB8D9',
          400: '#6FA1CC',
          500: '#4A7FA7',  // Medium blue
          600: '#3A6685',
          700: '#2A5068',
          800: '#1A3D63',  // Deep blue
          900: '#0A1931',  // Dark navy
        },
        government: {
          orange: '#FF9933',
          green: '#138808',
          blue: '#1A3D63',  // Updated to deep blue from palette
        },
        navy: {
          darkest: '#0A1931',
          deep: '#1A3D63',
          medium: '#4A7FA7',
          light: '#B3CFE5',
          lightest: '#F6FAFD',
        }
      },
      fontSize: {
        // Government Standard Font Sizes
        'gov-xs': ['0.75rem', { lineHeight: '1.5' }],      // 12px
        'gov-sm': ['0.875rem', { lineHeight: '1.6' }],     // 14px
        'gov-base': ['1rem', { lineHeight: '1.6' }],       // 16px - body text
        'gov-lg': ['1.125rem', { lineHeight: '1.6' }],     // 18px
        'gov-xl': ['1.25rem', { lineHeight: '1.5' }],      // 20px
        'gov-2xl': ['1.5rem', { lineHeight: '1.4' }],      // 24px - section titles
        'gov-3xl': ['1.875rem', { lineHeight: '1.3' }],    // 30px - page titles
        'gov-4xl': ['2.25rem', { lineHeight: '1.2' }],     // 36px - main headings
      },
      spacing: {
        // Government Standard Spacing
        'gov-xs': '0.5rem',   // 8px
        'gov-sm': '0.75rem',  // 12px
        'gov-md': '1rem',     // 16px
        'gov-lg': '1.5rem',   // 24px
        'gov-xl': '2rem',     // 32px
        'gov-2xl': '3rem',    // 48px
      },
      borderRadius: {
        'gov': '0.375rem',    // 6px - government standard
      },
      boxShadow: {
        'gov-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'gov': '0 2px 4px 0 rgba(0, 0, 0, 0.1)',
        'gov-md': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'gov-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};
export default config;

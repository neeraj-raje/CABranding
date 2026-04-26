import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#1A1A1A',
        ground: '#F8F7F4',
        rule: '#DEDBD5',
        muted: '#8A8880',
        accent: '#2B4C7E',
        'accent-green': '#2E7D52',
      },
      fontFamily: {
        cormorant: ['var(--font-cormorant)', 'Georgia', 'serif'],
        'dm-sans': ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        display: ['clamp(3rem, 6vw, 5.5rem)', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
        title: ['clamp(2rem, 3.5vw, 3.25rem)', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        heading: ['clamp(1.5rem, 2.5vw, 2rem)', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        lead: ['clamp(1.1rem, 1.5vw, 1.35rem)', { lineHeight: '1.75' }],
        body: ['1rem', { lineHeight: '1.75' }],
        small: ['0.875rem', { lineHeight: '1.6' }],
        micro: ['0.75rem', { lineHeight: '1.5' }],
      },
      letterSpacing: {
        label: '0.12em',
      },
      maxWidth: {
        prose: '68ch',
        '8xl': '88rem',
      },
      borderColor: {
        DEFAULT: '#DEDBD5',
      },
    },
  },
  plugins: [],
}

export default config

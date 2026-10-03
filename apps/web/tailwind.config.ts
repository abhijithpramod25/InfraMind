import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: 'hsl(var(--canvas))',
        surface: 'hsl(var(--surface))',
        panel: 'hsl(var(--panel))',
        line: 'hsl(var(--line))',
        signal: 'hsl(var(--signal))',
        foreground: 'hsl(var(--foreground))',
        muted: 'hsl(var(--muted))',
      },
    },
  },
  plugins: [],
};

export default config;

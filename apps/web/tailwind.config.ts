import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#08111f',
        surface: '#0f1b2d',
        line: '#22324a',
        signal: '#65d8b1',
      },
    },
  },
  plugins: [],
};

export default config;

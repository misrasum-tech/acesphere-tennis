import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        championship: '#047857',
        luxury: '#6D28D9',
        graphite: '#0F172A'
      }
    }
  },
  plugins: []
};

export default config;

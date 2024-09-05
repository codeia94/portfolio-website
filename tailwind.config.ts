import type { Config } from "tailwindcss";
import { roboto } from "./app/utils/font";


const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
		screens: {
			'xxs': '320px',   // Small Mobile devices
			'xs': '480px',    // Medium Mobile devices
			'sm': '768px',    // Tablets
			'md': '1024px',   // Laptops
			'lg': '1280px',   // Desktops
			'xl': '1440px',   // Large Desktops
			'2xl': '1600px',  // Extra Large Desktops
			'3xl': '1920px',  // 1920px and larger
		},
    extend: {
			fontFamily: {
				'roboto': ['Roboto', 'sans-serif'],
			},
			colors: {
				// green: '#3CCF91',
				// white: '#FAF9F6',
				// pearl: '#FBFCF8',
				// coconut: '#FFF1E6',
				galaxyblack: '#2A292B',
				babypink: '#f4c2c2',
				blush:'#de5d83',
				pastelpink:'#ffd1dc',
				coin:'#9897A9',
				flint:'#7F7D9C',
				teal:'#3CCF91',
				smoke: '#F5F5F5'
			},
			backgroundImage: {
				'rainbow-gradient': 'linear-gradient(45deg, #f3ec78, #af4261, #577399, #2b4f81, #0a4c6c)',
				'text-gradient': 'linear-gradient(45deg, #f3ec78, #af4261, #577399, #2b4f81, #0a4c6c)',
			},
    },
  },
  plugins: [],
};
export default config;

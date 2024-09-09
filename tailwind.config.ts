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
			height: {
				'90screen': '90vh',
			},

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
				smoke: '#F5F5F5',
				greenpea: '#1a5239',
				coralblue: '#3cc7cf87',

				//#3 color theme
				beautybush: '#EEBBC3', //btn & highlight
				portgore: '#232946', //background
				bluebell: '#577399', //seconday background
				spindle: '#B8C1EC', //secondary content



				//#1 color theme
				// primary: "#5866f2",
				// "primary-content": "#ffffff",
				// "primary-dark": "#293bee",
				// "primary-light": "#8791f6",

				// secondary: "#f25899",
				// "secondary-content": "#460520",
				// "secondary-dark": "#ee297c",
				// "secondary-light": "#f687b6",

				// background: "#131420",
				// foreground: "#1d1e30",
				// border: "#303350",

				// copy: "#fafafc",
				// "copy-light": "#cfd1e2",
				// "copy-lighter": "#8f93bc",

				// success: "#58f258",
				// warning: "#f2f258",
				// error: "#f25858",

				// "success-content": "#054605",
				// "warning-content": "#464605",
				// "error-content": "#460505"

				//#2 color theme
				//background: '#16161A',
				//btn: '#7F5AF0',
				//highlight: '#2CB67D',
				//'primary-content': '#FFFFFE',
				//'secondary-content': '#94A1B2',

				//#3 color theme
				//background: '#232946',
				//btn: '#EEBBC3',
				//highlight: '#EEBBC3',
				//'primary-content': '#FFFFFE',
				//'secondary-content': '#B8C1EC',

			},
			// backgroundImage: {
			// 	'rainbow-gradient': 'linear-gradient(45deg, #f3ec78, #af4261, #577399, #2b4f81, #0a4c6c)',
			// 	'text-gradient': 'linear-gradient(45deg, #f3ec78, #af4261, #577399, #2b4f81, #0a4c6c)',
			// },
    },
  },
  plugins: [],
};
export default config;

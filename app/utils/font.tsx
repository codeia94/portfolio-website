import { Inter } from "next/font/google";
import { Roboto } from "next/font/google";
import { Montserrat } from "next/font/google";

export const inter = Inter({subsets: ["latin"]});
export const roboto = Roboto({
	subsets: ["latin"],
	weight: ['100', '300', '400', '500', '700', '900'],
});
export const montserrat = Montserrat({
	subsets: ['latin']
})
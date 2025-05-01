import { Geist, Geist_Mono } from "next/font/google";
import { Roboto } from "next/font/google";
import "./globals.css";

import Bottomnav from "../ui/Bottomnav/Bottomnav";
import TopNav from "../ui/Topnav/Topnav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
ui-bottomnav
  title: "Heal U",
  description: "Mental health companion app",
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>

				<TopNav />
				{children}
				<Bottomnav />

			</body>
		</html>
	);
}

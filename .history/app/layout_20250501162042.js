"use client";

import { Geist, Geist_Mono } from "next/font/google";
import { Roboto } from "next/font/google";
import "./globals.css";
import { usePathname } from "next/navigation";

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
	title: "Heal U",
	description: "Mental health companion app",
};

export default function RootLayout({ children }) {
	const pathname = usePathname();
	const showBottomNav = !pathname?.includes("/onboarding");

	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${roboto.className} antialiased`}
				suppressHydrationWarning
			>
				<div className='min-h-screen w-full flex items-center justify-center bg-gray-100'>
					<div className='w-[440px] h-[956px] bg-white shadow-lg relative overflow-hidden flex flex-col'>
						<TopNav />
						<main className='flex-1 overflow-y-auto'>
							{children}
						</main>
						{showBottomNav && (
							<div className='absolute bottom-0 left-0 right-0'>
								<Bottomnav />
							</div>
						)}
					</div>
				</div>
			</body>
		</html>
	);
}

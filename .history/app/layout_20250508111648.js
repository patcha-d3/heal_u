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

export default function RootLayout({ children }) {
	const pathname = usePathname();
	const showBottomNav = !pathname?.includes("/onboarding");

	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${roboto.className} antialiased`}
				suppressHydrationWarning
			>
				<div className='min-h-screen w-full flex items-center justify-center'>
					<div className='w-[440px] h-[956px] relative overflow-hidden flex flex-col bg-[#29424D]'>
						<TopNav />
						<main className='flex-1 overflow-y-auto flex items-center justify-center'>
							<div className='w-[406px] h-[800px] bg-[#FDFBF9] mx-4 mb-4 rounded-[48px]'>
								{children}
							</div>
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

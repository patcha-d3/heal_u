"use client";

import { Geist, Geist_Mono } from "next/font/google";
import { Roboto } from "next/font/google";
import "./globals.css";
import { usePathname } from "next/navigation";
import { jsx as _jsxDEV } from "react/jsx-dev-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
import { jsxs as _jsxsDEV } from "react/jsx-dev-runtime";
import TopNav from "@ui/Topnav/Topnav";
import Bottomnav from "@ui/Bottomnav/Bottomnav";
import { ThemeProvider, useTheme } from "@context/ThemeContext";

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

function ThemedContainer({ children }) {
	const { theme } = useTheme();
	return (
		<div className='min-h-screen w-full flex items-center justify-center'>
			<div
				className={`w-[440px] h-[956px] relative flex flex-col`}
				style={{
					background:
						theme === "dark"
							? "#29424D"
							: "#FFFFFF",
				}}
			>
				{children}
			</div>
		</div>
	);
}

export default function RootLayout({ children }) {
	const pathname = usePathname();
	const isHome = pathname === "/home";
	const hideNav = pathname.startsWith("/plandetail");
	const showBottomNav =
		!pathname?.includes("/onboarding") &&
		!pathname?.startsWith("/recovery-plan/step-one") &&
		!pathname?.startsWith("/recovery-plan/step-two") &&
		!pathname?.startsWith("/recovery-plan/step-three");
	const isStepOne = pathname?.includes("/onboarding/step-one");
	const isStepTwo = pathname?.includes("/onboarding/step-two");
	const isRecoveryStepOne = pathname?.includes("/recovery-plan/step-one");
	const isRecoveryStepTwo = pathname?.includes("/recovery-plan/step-two");
	const isStepThree = pathname?.includes("/onboarding/step-three");
	const isStepFour = pathname?.includes("/onboarding/step-four");

	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${roboto.className} antialiased`}
				suppressHydrationWarning
			>
				<ThemeProvider>
					<ThemedContainer>
						{!hideNav && (
							<TopNav
								isHome={isHome}
							/>
						)}
						<main className='flex-1 overflow-y-auto flex items-center justify-center'>
							{children}
						</main>
						{showBottomNav && (
							<div className='absolute bottom-0 left-0 right-0'>
								<Bottomnav />
							</div>
						)}
					</ThemedContainer>
				</ThemeProvider>
			</body>
		</html>
	);
}

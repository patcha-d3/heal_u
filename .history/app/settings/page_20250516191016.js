"use client";

import React, { useState } from "react";
import SettingsCard from "@ui/Settings-card/Settings-card";
import Image from "next/image";
import { useTheme } from "@context/ThemeContext";

export default function SettingsPage() {
	const [settings, setSettings] = useState({
		notifications: true,
		sound: true,
		vibration: true,
		gps: true,
		sync: false,
	});

	const { theme, setTheme } = useTheme();

	const handleToggle = (setting) => {
		setSettings((prev) => ({
			...prev,
			[setting]: !prev[setting],
		}));
	};

	return (
		<div className='flex flex-col items-center w-full min-h-screen px-4 py-6'>
			{/* Main Title */}
			<h1 className="font-['Roboto'] font-bold text-[24px] leading-[32px] text-[#1A1A1A] mb-6 w-full text-left">
				Settings
			</h1>

			{/* Account Section */}
			<h2 className="font-['Roboto'] font-bold text-[16px] text-[#1A1A1A] mb-2 w-full text-left">
				Account
			</h2>
			<SettingsCard
				icon='/icons/account.svg'
				text='My Account'
				hasSwitch={false}
			/>

			{/* Notifications Section */}
			<h2 className="font-['Roboto'] font-bold text-[16px] text-[#1A1A1A] mt-6 mb-2 w-full text-left">
				Notifications
			</h2>
			<SettingsCard
				icon='/icons/notification.svg'
				text='Notifications'
				isEnabled={settings.notifications}
				onToggle={() => handleToggle("notifications")}
			/>

			{/* Appearance Section */}
			<h2 className="font-['Roboto'] font-bold text-[16px] text-[#1A1A1A] mt-6 mb-2 w-full text-left">
				Appearance
			</h2>
			<div className='flex flex-row gap-6 mb-2'>
				<div
					className={`flex flex-col items-center cursor-pointer ${
						theme === "light"
							? "ring-2 ring-[#29424D]"
							: ""
					}`}
					onClick={() => setTheme("light")}
				>
					<Image
						src='/assets/lightmode.png'
						alt='Light mode'
						width={120}
						height={90}
						className='rounded-xl'
					/>
					<span className="font-['Roboto'] text-base text-[#1A1A1A] mt-2">
						Light mode
					</span>
				</div>
				<div
					className={`flex flex-col items-center cursor-pointer ${
						theme === "dark"
							? "ring-2 ring-[#29424D]"
							: ""
					}`}
					onClick={() => setTheme("dark")}
				>
					<Image
						src='/assets/darkmode.png'
						alt='Dark mode'
						width={120}
						height={90}
						className='rounded-xl'
					/>
					<span className="font-['Roboto'] text-base text-[#1A1A1A] mt-2">
						Dark mode
					</span>
				</div>
			</div>

			{/* Sound & Vibration Section */}
			<h2 className="font-['Roboto'] font-bold text-[16px] text-[#1A1A1A] mt-6 mb-2 w-full text-left">
				Sound & Vibration
			</h2>
			<SettingsCard
				icon='/icons/sound.svg'
				text='Sound On'
				isEnabled={settings.sound}
				onToggle={() => handleToggle("sound")}
			/>
			<SettingsCard
				icon='/icons/vibration.svg'
				text='Vibration On'
				isEnabled={settings.vibration}
				onToggle={() => handleToggle("vibration")}
			/>

			{/* Privacy Setting Section */}
			<h2 className="font-['Roboto'] font-bold text-[16px] text-[#1A1A1A] mt-6 mb-2 w-full text-left">
				Privacy Setting
			</h2>
			<SettingsCard
				icon='/icons/gps.svg'
				text='Allow GPS'
				isEnabled={settings.gps}
				onToggle={() => handleToggle("gps")}
			/>
			<SettingsCard
				icon='/icons/sync.svg'
				text='Sync to other health app'
				isEnabled={settings.sync}
				onToggle={() => handleToggle("sync")}
			/>
			<SettingsCard
				icon='/icons/delete.svg'
				text='Delete all progress & Data'
				hasSwitch={false}
			/>
			<SettingsCard
				icon='/icons/signout.svg'
				text='Sign Out'
				hasSwitch={false}
			/>
		</div>
	);
}

"use client";

import React, { useState } from "react";
import SettingsCard from "@ui/Settings-card/Settings-card";

export default function SettingsPage() {
	const [settings, setSettings] = useState({
		notifications: true,
		sound: true,
		vibration: true,
		gps: true,
		sync: false,
	});

	const handleToggle = (setting) => {
		setSettings((prev) => ({
			...prev,
			[setting]: !prev[setting],
		}));
	};

	return (
		<div className='flex flex-col items-center gap-2 py-4'>
			<SettingsCard
				icon='/icons/account.svg'
				text='My Account'
				hasSwitch={false}
			/>
			<SettingsCard
				icon='/icons/notification.svg'
				text='Notifications'
				isEnabled={settings.notifications}
				onToggle={() => handleToggle("notifications")}
			/>
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

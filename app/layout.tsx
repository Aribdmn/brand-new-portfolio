import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";

const jetbrains = JetBrains_Mono({
	subsets: ["latin"],
	variable: "--font-jetbrains",
});

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

export const metadata: Metadata = {
	title: "Software Developer Portfolio",
	description: "Portfolio of Ariyanto Budiman",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${jetbrains.className} h-full antialiased`}>
			<head>
				<link href="https://fonts.googleapis.com" rel="preconnect" />
				<link
					crossOrigin=""
					href="https://fonts.gstatic.com"
					rel="preconnect"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&amp;display=swap"
					rel="stylesheet"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap"
					rel="stylesheet"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap"
					rel="stylesheet"
				/>
			</head>
			<body className="bg-surface text-on-surface antialiased font-body-md text-body-md selection:bg-secondary-container selection:text-primary">
				{children}
			</body>
		</html>
	);
}

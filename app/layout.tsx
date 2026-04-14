import type { Metadata } from "next";
import { IBM_Plex_Mono, Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const plexMono = IBM_Plex_Mono({
	variable: "--font-plex-mono",
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
	title: {
		default: "Polaris",
		template: "%s | Polaris",
	},
	description: "A modern full-stack application built with Next.js",
	keywords: ["Next.js", "React", "full-stack", "modern web"],
	openGraph: {
		title: "Polaris",
		description: "A modern full-stack application built with Next.js",
		type: "website",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={cn(inter.variable, plexMono.variable, "antialiased")}
			>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}

import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "NovaX Esports", description: "Competitive gaming, community tournaments and livestreams." };
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>){return <html lang="en"><body>{children}</body></html>}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Job filtering",
  description: "Mini project from frontendmentor.io. Made by Turóczy Vajk",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode;}>) {
	return (
		<html lang="en">
			<body>
				{children}
			</body>
		</html>
	);
}

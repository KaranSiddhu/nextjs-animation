'use client';
import { Inter } from 'next/font/google';
import './globals.scss';
import SplashScreen from '@/components/splashScreen/SplashScreen';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
	const pathName = usePathname();
	const isHome = pathName === '/';
	const [isLoading, setIsLoading] = useState(isHome);

	useEffect(() => {
		if (isLoading) return;
	}, [isLoading]);

	return (
		<html lang="en">
			<body className={inter.className}>
				{isLoading && isHome ? (
					<SplashScreen isLoading={isLoading} finishLoading={() => setIsLoading(false)} />
				) : (
					children
				)}
			</body>
		</html>
	);
}

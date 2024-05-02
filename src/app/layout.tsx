import { Rubik } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { GlobalProvider } from '../context/GlobalState';

const rubik = Rubik({ subsets: ['latin'] });

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${rubik.className} text-slate-600 text-xl`}>
				<GlobalProvider>
					<Header />
					<main>{children}</main>
					<Footer />
				</GlobalProvider>
			</body>
		</html>
	);
}

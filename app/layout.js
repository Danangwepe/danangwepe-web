import Script from 'next/script';
import './globals.css';

export const metadata = {
    title: 'Danang Wahyu Prasektiyo — AI & ML Portfolio',
    description: 'Personal portfolio of Danang Wahyu Prasektiyo, a Computer Engineering student specializing in AI, Machine Learning, and Data Science.',
    keywords: ['AI', 'Machine Learning', 'Data Science', 'Portfolio', 'Danang Wahyu Prasektiyo', 'Computer Engineering'],
    authors: [{ name: 'Danang Wahyu Prasektiyo' }],
    openGraph: {
        title: 'Danang Wahyu Prasektiyo — AI & ML Portfolio',
        description: 'Personal portfolio of Danang Wahyu Prasektiyo, a Computer Engineering student specializing in AI, Machine Learning, and Data Science.',
        type: 'website',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="id" className="scroll-smooth">
            <body className="font-dm bg-light text-dark antialiased">
                {children}
                <Script src="https://js.puter.com/v2/" strategy="afterInteractive" />
            </body>
        </html>
    );
}

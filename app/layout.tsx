// types
import { type Metadata, type Viewport } from 'next';

// styles
import './styles/ui.css';
import './styles/site.css';

// variables
export const runtime = 'edge';

const RootLayout: React.FC<Readonly<{ children: React.ReactNode }>> = ({
  children,
}) => (
  <html lang="pt-br">
    <body>{children}</body>
  </html>
);

const title = 'Rotas e Festas';
const canonical = 'https://rotasefestas.com.br';
const description = 'Rotas e Festas is a Rotas e Festas solution';

export const viewport: Viewport = {
  width: 'device-width',
  themeColor: '#ffffff',
  initialScale: 1,
};

export const metadata: Metadata = {
  title,
  description,
  robots: 'noindex, nofollow', // TODO: change in production
  keywords: 'Rotas e festas',
  alternates: { canonical },
  icons: {
    icon: '/favicon.ico',
    apple: '/logo192.png',
    shortcut: '/logo192.png',
  },
  metadataBase: new URL(canonical),
  openGraph: {
    title,
    description,
    url: canonical,
    type: 'website',
    images: '/logo192.png',
    siteName: 'Rotas e festas',
  },
};

export default RootLayout;

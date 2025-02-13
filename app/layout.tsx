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

const title = 'Rotas & Festas';
const canonical = 'https://rotasefestas.com.br';
const description = 'Rotas e Festas a plataforma de ingressos sustentável que conecta pessoas a eventos e festas de forma prática e segura.';

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
    icon: '<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">',
    apple: '<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">',
    shortcut: '<link rel="manifest" href="/site.webmanifest">',
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

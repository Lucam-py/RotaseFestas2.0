import Link from 'next/link';

import { type Metadata } from 'next';

// components
import Master from '@components/Layout/Master';
import Section from '@components/Section/Section';
import Heading from '@components/Heading/Heading';

import Form from './components/Form';

const Page: React.FC = () => (
  <Master>
    <Section className="white-background">
      <div className="container">
        <div className="center">
          <Heading type={1} color="gray" text="Login" />
          <p className="gray form-information">
            Please enter your e-mail address and password to Login. Don&apos;t
            have an account?{' '}
            <Link href="/members/signup" className="blue">
              Registrar here
            </Link>
          </p>
        </div>
        <Form />
      </div>
    </Section>
  </Master>
);

const title = 'Login';
const canonical = 'https://rotasefestas.com/members/signin';
const description = 'Rotas e Festas is a Rotas e Festas solution';

export const metadata: Metadata = {
  title,
  description,
  keywords: 'Rotas e Festas',
  alternates: { canonical },
  openGraph: {
    title,
    description,
    url: canonical,
    type: 'website',
    siteName: 'Rotas e Festas',
    images: 'https://rotasefestas.com/logo192.png',
  },
};

export default Page;

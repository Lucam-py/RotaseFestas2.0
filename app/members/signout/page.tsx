import { type Metadata } from 'next';

// components
import Master from '@components/Layout/Master';
import Section from '@components/Section/Section';
import Heading from '@components/Heading/Heading';
import ButtonLink from '@components/Button/ButtonLink';

const Page: React.FC = () => (
  <Master>
    <Section className="white-background">
      <div className="container">
        <div className="center">
          <Heading type={1} color="gray" text="Signed out" />
          <p className="gray form-information">
            You are successfully signed out an you can safely return to home
            page.
          </p>

          <div className="button-container">
            <ButtonLink color="gray-overlay" text="Return to home" url="" />
            &nbsp; &nbsp;
            <ButtonLink
              color="blue-filled"
              text="Login again"
              url="members/signin"
            />
          </div>
        </div>
      </div>
    </Section>
  </Master>
);

const title = 'Sign out';
const canonical = 'https://rotasefestas.com/members/signout';
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

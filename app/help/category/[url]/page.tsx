import Link from 'next/link';

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
          <Heading type={1} color="gray" text="Help category" />
          <p>Showing all answers from this category.</p>
        </div>
      </div>
    </Section>

    <Section className="white-background">
      <div className="container">
        <div className="help-answers center">
          <ul>
            <li>
              <Link href="/help/answer/1" className="blue">
                How can i Login?
              </Link>
            </li>
            <li>
              <Link href="/help/answer/1" className="blue">
                How can i Registrar?
              </Link>
            </li>
            <li>
              <Link href="/help/answer/1" className="blue">
                Reset your password
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Section>

    <Section className="gray-background">
      <div className="container">
        <div className="center">
          <Heading type={3} color="gray" text="Any questions?" />
          <p className="gray">
            If you can&apos;t find what you are looking for or need further
            support please contact us and we will be happy to help.
          </p>

          <div className="button-container">
            <ButtonLink
              color="blue-filled"
              rightIcon="arrow_forward"
              text="Contact us"
              url="contact"
            />
          </div>
        </div>
      </div>
    </Section>
  </Master>
);

const title = 'Help';
const canonical = 'https://rotasefestas.com/help/category/1';
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

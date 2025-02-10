import { type Metadata } from 'next';

// components
import Master from '@components/Layout/Master';
import Section from '@components/Section/Section';
import Heading from '@components/Heading/Heading';
import EventCard from '@components/Card/EventCard';

const Page: React.FC = () => (
  <Master>
    <Section className="white-background">
      <div className="container">
        <div className="padding-bottom center">
          <Heading type={1} color="gray" text="Events" />
          <p className="gray">Descubra os melhores eventos perto de voce.</p>
        </div>
      </div>
    </Section>

    <Section className="list-cards">
      <div className="container center">
        <EventCard
          url="1"
          from="20"
          color="blue"
          when="Tue, Sep 21, 2024 19:00"
          name="Event name goes here"
          venue="Royal Albert Hall"
          image="https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <EventCard
          url="1"
          from="25"
          color="blue"
          when="Wed, Aug 9, 2024 22:00"
          name="Event name goes here"
          venue="o2 Arena"
          image="https://images.unsplash.com/photo-1472691681358-fdf00a4bfcfe?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <EventCard
          url="1"
          from="10"
          color="blue"
          when="Sun, Mar 14, 2024 15:00"
          name="Event name goes here"
          venue="Wembley Stadium"
          image="https://images.unsplash.com/photo-1561489396-888724a1543d?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
    </Section>
  </Master>
);

const title = 'List';
const canonical = 'https://rotasefestas.com/list';
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

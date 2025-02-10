import Link from 'next/link';

import { type Metadata } from 'next';

// components
import Master from '@components/Layout/Master';
import Section from '@components/Section/Section';
import Heading from '@components/Heading/Heading';
import EventCard from '@components/Card/EventCard';
import CardGroup from '@components/Card/CardGroup';

import TicketForm from './components/TicketForm';

const Page: React.FC = () => (
  <Master>
    <div className="blur-cover">
      <div
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
        }}
        className="event-cover cover-image flex flex-v-center flex-h-center"
      />
      <div className="cover-info">
        <div
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
          }}
          className="cover-image image"
        />
        <Heading type={1} color="white" text="Event name goes here" />
        <Heading type={5} color="white" text="Tue, Sep 21, 2024 19:00" />
        <Heading type={6} color="white" text="Royal Albert Hall" />
      </div>
    </div>
    <Section className="white-background">
      <div className="container">
        <div className="Detalhes do Evento">
          <div>
            <Heading type={4} color="gray" text="Event details" />
            <div className="paragraph-container gray">
              <p>
                Venha viver uma experiência imersiva no Circuito Eco - Festa dos Biomas, o
                maior evento ambiental já realizado no Brasil! Conheça os detalhes do espaço
                em 3D: o palco principal, a feira ecológica, a área de palestras, a tirolesa e muito
                mais. Mergulhe no coração dessa festa, 10 dias para celebra a natureza, a
                sustentabilidade e a conexão entre os biomas brasileiros.
              </p>
              <p>
                O Brasil está preparado para a realização
                do maior evento ecológico de todos os tempos,
                em prol da preservação dos nossos
                BIOMAS
                CIRCUITO ECO BRASÍLIA-DF.
                Programa Conceitual voltado para as práticas e ações de
                sustentabilidade humana e ambiental..
              </p>
            </div>
          </div>
          <div>
            <div className="ticket-box">
              <div className="ticket-box-header">
                <Heading type={4} color="gray" text="Tickets" />
              </div>
              <TicketForm
                data={[
                  {
                    id: 1,
                    name: 'Familia',
                    price: 'R$10',
                    ordering: 1,
                    soldout: true,
                  },
                  {
                    id: 2,
                    name: 'Vip',
                    price: 'R$20',
                    ordering: 2,
                  },
                  {
                    id: 3,
                    name: 'Basico',
                    price: 'R$30',
                    ordering: 3,
                    information: 'Basico',
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </Section>

    <Section className="white-background">
      <div className="container">
        <Heading type={4} color="gray" text="Royal Albert Hall" />

        <Heading type={6} color="gray" text="Address" />
        <div className="paragraph-container">
          <p className="gray">
            Lorem ipsum dolor sit amet consecteteur adispicing elit.
          </p>
        </div>
        <Heading type={6} color="gray" text="How to get there?" />
        <div className="paragraph-container">
          <p className="gray">
            Lorem ipsum dolor sit amet consecteteur adispicing elit.
          </p>
          <p className="gray">
            <Link href="/venue/1" className="blue">
              Venue details
            </Link>
            &nbsp; &bull; &nbsp;
            <a target="_blank" href="/" className="blue">
              Get directions
            </a>
            &nbsp; &bull; &nbsp;
            <a target="_blank" href="/" className="blue">
              Show in map
            </a>
          </p>
        </div>
      </div>
    </Section>

    <CardGroup url="list" title="Other events" color="orange" background="gray">
      <EventCard
        url="1"
        from="20"
        color="orange"
        when="Dom, 01 Junho, 2025 17:00"
        name="Circuito Eco Gospel"
        venue="Esplanada dos Ministérios - Brasília, DF"
        image="https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <EventCard
        url="1"
        from="25"
        color="orange"
        when="Dom, 05 a 08 Junho, 2025 17:00"
        name="Circuiito Eco - Festa dos Biomas"
        venue="Esplanada dos Ministérios - Brasília, DF"
        image="https://images.unsplash.com/photo-1472691681358-fdf00a4bfcfe?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <EventCard
        url="1"
        from="10"
        color="orange"
        when="Sun, Mar 14, 2024 15:00"
        name="Nome do Evento"
        venue="Wembley Stadium"
        image="https://images.unsplash.com/photo-1561489396-888724a1543d?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </CardGroup>
  </Master>
);

const title = 'Event name goes here';
const canonical = 'https://rotasefestas.com/event/1';
const description = 'Rotas e Festas é diversão com sustentabilidade e responsabilidade ambiental.';

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

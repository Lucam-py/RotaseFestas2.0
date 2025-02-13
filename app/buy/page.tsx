/** @jsxImportSource react */
import React from 'react';
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
          <Heading type={1} color="gray" text="Comprar Tickets" />
          <p className="gray">
            Please enter your personal &amp; payment details. We will issue and
            send your tickets your e-mail address immediately.
          </p>
        </div>
        <div className="padding-top center">
          <div className="padding-top">
            <Heading type={5} color="gray" text="Details" />
            <p>
              <strong>Evento</strong> Nome do Evento
            </p>
            <p>
              <strong>Endereço</strong> Brasília, DF
            </p>
            <p>
              <strong>Data</strong> Tue, Sep 21, 2025 19:00
            </p>
          </div>
        </div>
        <div className="form shrink">
          <table className="table">
            <thead>
              <tr>
                <th className="left">Name</th>
                <th className="center">Qty.</th>
                <th className="right">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="left">Basico</td>
                <td className="center">2</td>
                <td className="right">R$23</td>
              </tr>
              <tr>
                <td className="right" colSpan={3}>
                  <strong>Total : </strong> R$23
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Form />
        <div className="paragraph-container center">
          <p>
            Ao clicar no botão de pagamento, eu concordo com os termos &nbsp;
            <Link href="/legal/terms-of-service" className="blue">
              Termos do serviço
            </Link>
          </p>
        </div>
      </div>
    </Section>
  </Master>
);

const title = 'Comprar Ingressos';
const canonical = 'https://rotasefestas.com/buy';
const description = 'Rotas e Festas - diversão com sustentabilidade e responsabilidade ambiental!';

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
    images: 'https://www.dropbox.com/scl/fi/pnl71grvtvqz7pf09njb5/rotas-e-festassss.png?rlkey=8mrozgi9wpr0xqy9hjqoh1x9m&st=p9y3956o&raw=1',
  },
};

export default Page;

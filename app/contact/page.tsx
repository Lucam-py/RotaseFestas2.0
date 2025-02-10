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
        <div className="padding-bottom center">
          <Heading type={1} color="gray" text="Contact us" />
          <p className="gray form-information">
            Por favor, sinta-se livre para entrar em contato através dos nossos
            canais de comunicação a respeito de qualquer dúvida, elogio ou
            sugestões que você possa ter.
          </p>
        </div>
      </div>
    </Section>
    <Section className="gray-background">
      <div className="container">
        <div className="center">
          <Heading type={5} color="gray" text="Customer service" />
          <p className="gray form-information">
            Nosso serviço de atendimento ao cliente está disponível de segunda a
            sexta das <strong>08:00</strong> às <strong>18:00</strong>, e nos
            finais de semana <strong>09:00</strong> às <strong>13:00</strong>.
            Por favor, clique no botão abaixo para atendimento online.
          </p>
          <div className="button-container">
            <ButtonLink
              color="gray-overlay"
              text="Live assistance"
              rightIcon="arrow_forward"
              url=""
            />
            &nbsp; &nbsp;
            <ButtonLink
              color="gray-filled"
              text="Drop us an e-mail"
              rightIcon="arrow_forward"
              url=""
            />
          </div>
        </div>
      </div>
    </Section>
    <Section className="white-background">
      <div className="container">
        <div className="center">
          <Heading type={5} color="gray" text="How can we help you?" />
          <p className="gray form-information">
            Gostaria de navegar através da seção de ajuda para encontrar as
            respostas a sua dúvida que nos solicitou?
          </p>
          <div className="button-container">
            <ButtonLink
              color="gray-filled"
              text="Help page"
              rightIcon="arrow_forward"
              url="help"
            />
          </div>
        </div>
      </div>
    </Section>
    <Section className="gray-background">
      <div className="container">
        <div className="center">
          <Heading type={5} color="gray" text="Communication details" />
          <div className="paragraph-container">
            <p className="gray">
              você pode enviar sua dúvida para o seguinte e-mail
              <br />
              <strong>hello@rotasefestas.com</strong>
              <br />
              <strong>+55 7140028922</strong>
              <br />
            </p>
          </div>
          <div className="button-container">
            <ButtonLink
              color="blue-filled"
              text="Open maps"
              rightIcon="arrow_forward"
              url=""
            />
          </div>
        </div>
      </div>
    </Section>
  </Master>
);

const title = 'Contact us';
const mainUrl = 'https://www.rotasefestas.com';
const canonical = `${mainUrl}/contact`;
const description = 'Rotas e Festas';

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
    images: `${mainUrl}/logo192.png`,
  },
};

export default Page;

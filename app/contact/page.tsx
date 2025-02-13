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
          <Heading type={1} color="orange" text="Contato" />
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
          <Heading type={5} color="orange" text="ATENDIMENTO AO CLIENTE" />
          <p className="gray form-information">
            Nosso serviço de atendimento ao cliente está disponível de segunda à
            sexta das <strong>08:00</strong> às <strong>18:00</strong>, e nos
            finais de semana <strong>09:00</strong> às <strong>13:00</strong>.
            Por favor, clique no botão para ser atendido.
          </p>
          <div className="button-container">
            <ButtonLink
              color="green-overlay"
              text="Whatsapp"
              rightIcon="arrow_forward"
              url=""
            />
            &nbsp; &nbsp;
            <ButtonLink
              color="orange-filled"
              text="E-mail"
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
          <Heading type={5} color="gray" text="Como podemos ajudá-lo(a)?" />
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
          <Heading type={5} color="gray" text="Mais Informações" />
          <div className="paragraph-container">
            <p className="gray">
              você pode enviar sua dúvida para o seguinte e-mail
              <br />
              <strong>hello@rotasefestas.com.br</strong>
              <br />
              <strong>+55 71 98302-3372</strong>
              <br />
            </p>
          </div>
          <div className="button-container">
            <ButtonLink
              color="blue-filled"
              text="Abrir Mapa"
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

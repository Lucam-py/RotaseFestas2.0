// components
import Master from '@components/Layout/Master';
import Section from '@components/Section/Section';
import Heading from '@components/Heading/Heading';
import EventCard from '@components/Card/EventCard';
import CardGroup from '@components/Card/CardGroup';

import FormSearch from './home/components/FormSearch';
import CircleButtons from './home/components/CircleButtons';

const Page: React.FC = () => (
  <Master>
    <Section className="white-background">
      <div className="container">
        <div className="center">
          <Heading type={1} color="gray" text="Rotas e Festas" />
          <p className="gray">Procure a sua rota.</p>
        </div>
      </div>

      <div className="center">
        <div className="container">
          <div className="top-search">
            <FormSearch />
          </div>
        </div>
        <div className="circle-buttons">
          <CircleButtons />
        </div>
      </div>
    </Section>

    <CardGroup url="list" title="Latest events" color="blue" background="gray">
      <EventCard
        url="1"
        from="20"
        color="blue"
        when="Tue, Sep 21, 2024 19:00"
        name="Event name goes here"
        venue="Royal Albert Hall"
        image="https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </CardGroup>
  </Master>
);

export default Page;

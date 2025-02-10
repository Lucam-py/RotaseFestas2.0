// components
import Slider from '@components/Slider/Slider';
import ButtonCircle from '@components/Button/ButtonCircle';

const CircleButtons: React.FC = () => (
  <Slider>
    <ButtonCircle icon="theater_comedy" text="Teatro" url="list" />
    <ButtonCircle icon="stadium" text="Show" url="list" />
    <ButtonCircle icon="child_care" text="Infantil" url="list" />
    <ButtonCircle icon="sports_football" text="Esportes" url="list" />
    <ButtonCircle icon="attractions" text="Atrações" url="list" />
    <ButtonCircle icon="piano" text="Musical" url="list" />
    <ButtonCircle icon="comedy_mask" text="Comédia" url="list" />
    <ButtonCircle icon="festival" text="Festival" url="list" />
  </Slider>
);

export default CircleButtons;

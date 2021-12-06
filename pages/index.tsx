import { useState } from "react";
import { Button, Heading, Paragraph, Chip, Rating } from "../components";
import { withLayout } from "../layout/layout";

function Home() {
  const [ratingValue, setRatingValue] = useState<number>(2);
  return (
    <>
      <Heading type="h1">Test</Heading>
      <Heading type="h2">Test</Heading>
      <Heading type="h3">Test</Heading>
      <Button prop="primary" iconArrow="down">Узнать подробнее</Button>
      <Button prop="secondary" iconArrow="right">Читать отзывы</Button>
      <Paragraph size="large">
        Студенты освоят не только hard skills, необходимые для работы веб-дизайнером, но и soft skills — навыки, которые позволят эффективно взаимодействовать в команде с менеджерами, разработчиками и маркетологами.
        Выпускники факультета могут успешно конкурировать с веб-дизайнерами уровня middle.
      </Paragraph>
      <Chip type="primary">Работа в Photoshop</Chip>
      <Chip type="red" size='big'>hh.ru</Chip>
      <Chip type="green">-10 000 ₽</Chip>
      <Chip type="grey" size="big">10</Chip>
      <Rating value={ratingValue} setNewRating={setRatingValue} />
    </>
  );
}

export default withLayout(Home);

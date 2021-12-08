import { GetStaticProps } from "next";
import { useState } from "react";
import { Button, Heading, Paragraph, Chip, Rating } from "../components";
import axios from 'axios';
import { IMenu } from "../interfaces/Menu.interface";
import { withLayout } from "../context/app.context";

function Home({ menu, firstCategory }: IHome) {
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
      <Chip type="red" size='big' link="https://hh.ru/">hh.ru</Chip>
      <Chip type="green">-10 000 ₽</Chip>
      <Chip type="grey" size="big">10</Chip>
      <Rating value={ratingValue} setNewRating={setRatingValue} />
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<IMenu[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  });
  return {
    props: {
      menu,
      firstCategory
    }
  };
};

export interface IHome extends Record<string, unknown> {
  menu: IMenu[],
  firstCategory: number,
}

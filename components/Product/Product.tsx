import classes from './Product.module.css';
import cn from 'classnames';
import { Button, Chip, Heading, Paragraph, Rating } from '..';
import { IProduct } from '../../interfaces/Product.interface';

export const Product = ({ data }: { data: IProduct}) => {
  return (
    <div className={cn(classes.wrapper)}>
      <div className={cn(classes.productTitle)}>
        <Heading type='h3'>{data.title}</Heading>
        {/* {data.tags.map(item => (
          <Chip type='secondary' key={item}>{item}</Chip>
        ))} */}
        <div>
          <span>{data.price} ₽</span>
          <Chip type='green' className={cn(classes.styledChip)}>{data.price - data.oldPrice}</Chip>
        </div>
        <Rating value={data.initialRating} setNewRating={() => {console.log(data.initialRating);}} />
      </div>
      <div className={cn(classes.productBody)}>
        <Paragraph>
          {data.description}
        </Paragraph>
      </div>
      <Button prop='primary'>Узнать подробнее</Button>
      <Button prop='secondary' iconArrow='right'>Читать отзывы</Button>
    </div>
  );
};
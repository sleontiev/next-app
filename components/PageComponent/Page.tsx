import { Advantages, Chip, Heading, Product, Vacancy } from "..";
import classes from './Page.module.css';
import cn from 'classnames';
import { IPageComponent } from "./Page.props";

export const Page = ({ data, products }: IPageComponent): JSX.Element => {
  return (
    <div className={cn(classes.pageWrapper)}>
      <Heading type='h1'>
        {data.title}
        <Chip type="grey" className={cn(classes.pageChip)}>
          {products.length}
        </Chip>
      </Heading>
      {products.map(product => (
        <Product data={product} key={product._id} />
      ))}
      <Vacancy category={data.category} vacancy={data.hh} />
      <Advantages advantages={data.advantages} />
      {data.tags.map(tag => (
        <Chip key={tag} type='primary'>{tag}</Chip>
      ))}
    </div>
  );
};
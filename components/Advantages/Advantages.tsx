import { Heading, Paragraph } from "..";
import { IAdvanages } from "./Advantages.props";
import cn from 'classnames';
import classes from './Advantages.module.css';
import Check from '../../public/images/greenCheck.svg';

export const Advantages = ({ advantages }: IAdvanages): JSX.Element => {
  return (
    <div>
      <Heading type='h2' className={cn(classes.title)}>Преимущества</Heading>
        {advantages?.map(item => (
          <>
            <div key={item._id} className={cn(classes.check)}>
              <Check />
              <Heading type='h3'>
                {item.title}
              </Heading>
            </div>
            <Paragraph className={cn(classes.description)}>{item.description}</Paragraph>
          </>
        ))}
    </div>
  );
};
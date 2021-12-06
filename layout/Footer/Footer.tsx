import { IFooter } from "./Footer.props";
import cn from 'classnames';
import classes from './Footer.module.css';
import { format } from 'date-fns';

export const Footer = ({className, ...props}: IFooter) => {
  return (
    <div className={cn(className, classes.footer)} {...props}>
      <a>OwlTop © 2020 - {format(new Date, 'yyyy')} Все права защищены</a>
      <a>Пользовательское соглашение</a>
      <a>Политика конфиденциальности</a>
    </div>
  );
};
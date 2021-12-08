import { ReactNode } from "react";
import { Aside } from './Aside/Aside';
import { Footer } from './Footer/Footer';
import cn from 'classnames';
import classes from './layout.module.css';

export const Layout = ({ children }: {children: ReactNode}) => {
  return (
    <div className={cn(classes.wrapper)}>
      <Aside className={cn(classes.aside)}/>
      <div className={cn(classes.main)}>
        {children}
      </div>
      <Footer className={cn(classes.footer)}/>
    </div>
  );
};
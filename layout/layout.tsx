import { FunctionComponent, ReactNode } from "react";
import { Aside } from './Aside/Aside';
import { Footer } from './Footer/Footer';
import cn from 'classnames';
import classes from './layout.module.css';

const Layout = ({ children }: {children: ReactNode}) => {
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

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
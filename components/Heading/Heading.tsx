import { IHeading } from "./Heading.props";
import classes from './Heading.module.css';

export const Heading = ({ type, children, ...props }: IHeading): JSX.Element => {
  return (
    <>
      {type === 'h1' && <h1 className={classes.h1} {...props}>{children}</h1>}
      {type === 'h2' && <h2 className={classes.h2} {...props}>{children}</h2>}
      {type === 'h3' && <h3 className={classes.h3} {...props}>{children}</h3>}
    </>
  );
};
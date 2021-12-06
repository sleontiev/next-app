import classes from './Button.module.css';
import cn from 'classnames';
import { IButton } from './Button.props';
import ArrowIcon from './arrow.svg';

export const Button = ({prop, children, iconArrow = 'none', className, ...props}: IButton): JSX.Element => {
  return (
    <button className={cn(classes.button, className, {
      [classes.primary]: prop === 'primary',
      [classes.secondary]: prop === 'secondary',
    })} {...props}>
      {children}
      {iconArrow !== 'none' && <span className={cn(classes.arrow, {
        [classes.down]: iconArrow === 'down',
      })}>
        <ArrowIcon />
      </span>}
    </button>
  );
};
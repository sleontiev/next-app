import cn from 'classnames';
import classes from './Chip.module.css';
import { IChip } from './Chip.props';

export const Chip = ({ type, size, children, className, ...props }: IChip): JSX.Element => {
  return (
    <div className={cn(classes.chip, className, {
      [classes.primary]: type === 'primary',
      [classes.secondary]: type === 'secondary',
      [classes.red]: type === 'red',
      [classes.green]: type === 'green',
      [classes.grey]: type === 'grey',
      [classes.big]: size === 'big',
    })} {...props}>
      {children}
    </div>
  );
};
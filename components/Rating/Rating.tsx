import { useEffect, useState } from "react";
import StarIcon from './star.svg';
import cn from 'classnames';
import classes from './Rating.module.css';


export const Rating = ({ value, setNewRating, ...props }): JSX.Element => {
  const [initialRating, setInitialRating] = useState<JSX.Element[]>(new Array(5).fill(<></>));
  useEffect(() => {
    setInitialRating(constructRating(value));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
  const constructRating = (ratingValue: number) => {
    return initialRating.map((item, index) => {
      return (
        <StarIcon
          key={index}
          className={cn(classes.star, {
            [classes.filled]: index + 1 <= ratingValue,
          })}
          onMouseEnter = {() => changeRating(index + 1)}
          onMouseLeave = {() => changeRating(value)}
          onClick={() => setNewRating(index + 1)}
        />
      );
    });
  };
  const changeRating = (index: number): void => {
    setInitialRating(constructRating(index));
  };
  return (
    <div {...props}>
      {initialRating.map(item => item)}
    </div>
  );
};
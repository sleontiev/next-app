import { Chip, Heading } from "..";
import cn from 'classnames';
import classes from './Vacancy.module.css';
import { IVacancy } from "./Vacancy.props";

export const Vacancy = ({ category, vacancy }: IVacancy): JSX.Element => {
  return (
    <>
      <Heading type='h2'>
        Вакансии - {category}
        <Chip type='red' size='big' className={cn(classes.hh)}>hh.ru</Chip>
      </Heading>
      <div className={cn(classes.vacancyWrapper)}>
        <div className={cn(classes.total)}>
          <span>Всего вакансий</span>
          <span className={cn(classes.totalCount)}>{vacancy.count}</span>
        </div>
        <div className={cn(classes.vacancies)}>
          <div className={cn(classes.vacancy)}>
            <span>Начальный</span>
            <span className={cn(classes.count)}>{vacancy.juniorSalary}</span>
          </div>
          <div className={cn(classes.vacancy)}>
            <span>Средний</span>
            <span className={cn(classes.count)}>{vacancy.middleSalary}</span>
          </div>
          <div className={cn(classes.vacancy)}>
            <span>Профессионал</span>
            <span className={cn(classes.count)}>{vacancy.seniorSalary}</span>
          </div>
        </div>
      </div>
    </>
  );
};
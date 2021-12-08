import { useContext } from "react";
import { AppContext } from "../../context/app.context";
import Courses from '../../public/images/courses.svg';
import Books from '../../public/images/books.svg';
import Services from '../../public/images/services.svg';
import Products from '../../public/images/products.svg';
import cn from 'classnames';
import classes from './Menu.module.css';
import { FirstCategoryEnum } from "../../interfaces/Page.interface";
import { IPage } from "../../interfaces/Menu.interface";
import Link from "next/link";

interface IMockMenu {
  label: string,
  icon: JSX.Element,
  link: string,
  id: FirstCategoryEnum,
}

const mockMenu: IMockMenu[] = [
  { label: 'Курсы', icon: <Courses />, link: '/courses', id: FirstCategoryEnum.Courses },
  { label: 'Сервисы', icon: <Services />, link: '/services', id: FirstCategoryEnum.Services },
  { label: 'Книги', icon: <Books />, link: '/books', id: FirstCategoryEnum.Books },
  { label: 'Товары', icon: <Products />, link: '/products', id: FirstCategoryEnum.Products },
];

export const Menu = () => {
  const { menu, firstCategory } = useContext(AppContext);

  console.log(menu);

  const renderFirstLevel = (): JSX.Element => {
    return (
      <>
        { mockMenu.map(item => (
          <div
            key={item.id}
          >
            <a href={item.link}>
              <div className={cn(classes.firstLevel, {
                [classes.active]: item.id === firstCategory
              })}>
                {item.icon}
                <span>{item.label}</span>
              </div>
            </a>
            {item.id === firstCategory && renderSecondMenu()}
          </div>
        )) }
      </>
    );
  };

  const renderSecondMenu = (): JSX.Element => {
    return (
      <div className={classes.secondLevel}>
        {menu.map(item => (
          <div key={item._id.secondCategory}>
            <div className={cn(classes.secondLevelItem)}>
              {item._id.secondCategory}
            </div>
            {renderThirdMenu(item.pages)}
          </div>
        ))}
      </div>
    );
  };

  const renderThirdMenu = (menu: IPage[]): JSX.Element => {
    return (
      <>
        <div>
          {menu.map(item => (
            <div key={item._id} className={cn(classes.courseLink)}>
            <Link
              href={`/courses/${item.alias}`}
            >
              <a>{item.title}</a>
            </Link>
            </div>
          ))}
        </div>
      </>
    );
  };

  return (
    <ul>
      {renderFirstLevel()}
    </ul>
  );
};
import React, { createContext, FunctionComponent, PropsWithChildren, useState } from "react";
import { IMenu } from "../interfaces/Menu.interface";
import { FirstCategoryEnum } from "../interfaces/Page.interface";
import { Layout } from "../layout/layout";

export interface IContext {
  menu: IMenu[],
  firstCategory: FirstCategoryEnum,
  setMenu?: (updatedMenu: IMenu[]) => void,
}

export const AppContext = createContext<IContext>({ menu: [], firstCategory: FirstCategoryEnum.Courses });

export const AppContextProvider = ({ menu, firstCategory, children }: PropsWithChildren<IContext>): JSX.Element => {
  const [appMenu, setAppMenu] = useState<IMenu[]>(menu);
  const setMenu = (updatedMenu: IMenu[]) => {
    setAppMenu(updatedMenu);
  };
  return (
    <AppContext.Provider value={{ menu: appMenu, firstCategory, setMenu }}>
      { children }
    </AppContext.Provider>
  );
};

export const withLayout = <T extends Record<string, unknown> & IContext>(Component: FunctionComponent<T>) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
        <Layout>
          <Component {...props} />
        </Layout>
      </AppContextProvider>
    );
  };
};
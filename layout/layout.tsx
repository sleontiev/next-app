import { FunctionComponent, ReactNode } from "react";

const Layout = ({ children }: {children: ReactNode}) => {
  return (
    <div>
      <Aside />
      <div>
        {children}
      </div>
      <Footer />
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
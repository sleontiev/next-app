import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { withLayout } from "../../layout/layout";
import axios from 'axios';
import { IMenu } from "../../interfaces/Menu.interface";
import { IPage } from "../../interfaces/Page.interface";
import { ParsedUrlQuery } from "querystring";
import { IProduct } from "../../interfaces/Product.interface";

function Course({ page, product }: ICourse) {
  console.log(page.category);
  return (
    <>
      {product.map(item => <p key={item._id}>{item.categories}</p>)}
    </>
  );
}

export default withLayout(Course);

export const getStaticPaths: GetStaticPaths = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<IMenu[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  });
  return {
    paths: menu.flatMap(item => item.pages.map(page => `/courses/${page.alias}`)),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<ICourse> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true,
    };
  }
  const firstCategory = 0;
  const { data: menu } = await axios.post<IMenu[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  });
  const { data: page } = await axios.get<IPage>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/byAlias/' + params.course);
  const { data: product } = await axios.post<IProduct[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/product/find', {
    category: page.category,
    limit: 10,
  });
  return {
    props: {
      menu,
      firstCategory,
      page,
      product,
    }
  };
};

export interface ICourse extends Record<string, unknown> {
  page: IPage,
  menu: IMenu[],
  firstCategory: number,
  product: IProduct[],
}

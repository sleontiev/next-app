export interface IMenu {
  pages: IPage[],
  _id: {
    secondCategory: string,
  }
}

export interface IPage {
  alias: string,
  category: string,
  title: string,
  _id: string,
}
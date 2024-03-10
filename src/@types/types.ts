export type IData = {
  id?: string | number;
  title: string;
  price: string;
  thumbnail: string;
};

export interface IProductCard {
  data: IData;
}

export interface IContext {
    products: IData[],
    setProducts: ([]) => void,
}

export interface IProviderProps {
  children: React.ReactNode
}
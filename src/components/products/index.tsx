import { useContext, useEffect, useState } from "react";
import { ProductCard } from "../productCard";
import fetchProducts from "../../api/fetchProducts";
import { Loading } from "../loading";
import AppContext from "../../context/appContext";

export const Products = () => {
  const { products, setProducts, loading, setLoading } = useContext(AppContext);

  const fetchData = async () => {
    const data = await fetchProducts("terno rei");
    setProducts(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {loading ? (
        <Loading />
      ) : (
        products.map((product) => {
          return <ProductCard data={product} />;
        })
      )}
    </div>
  );
};

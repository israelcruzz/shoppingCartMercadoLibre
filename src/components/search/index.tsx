import { FormEvent, useContext, useState } from "react";
import { BsSearch } from "react-icons/bs";
import AppContext from "../../context/appContext";
import fetchProducts from "../../api/fetchProducts";

export const Search = () => {
  const [product, setProduct] = useState("");
  const { setProducts, setLoading } = useContext(AppContext);

  const onSubmitProduct = async (event: FormEvent) => {
    event.preventDefault();

    setLoading(true);
    const data = await fetchProducts(product);

    setProducts(data);
    setProduct("");
    setLoading(false);
  };

  return (
    <form
      className="flex bg-white w-full max-w-[500px] justify-between shadow gap-[13px] pr-[13px]"
      onSubmit={onSubmitProduct}
    >
      <input
        type="search"
        placeholder="Buscar produtos"
        required
        className="p-[13px] grow-[1] border-none outline-none font-medium text-sm border-r border-[#ddd]"
        onChange={(e) => setProduct(e.target.value)}
        value={product}
      />
      <button
        type="submit"
        className="border-none text-base flex items-center justify-center text-[#333]"
      >
        <BsSearch />
      </button>
    </form>
  );
};

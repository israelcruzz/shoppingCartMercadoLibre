import { BsFillCartPlusFill } from "react-icons/bs";
import { IProductCard } from "../../@types/types";
import { useCurrency } from "../../hooks/useCurrency";
import { useContext } from "react";
import AppContext from "../../context/appContext";

export const ProductCard = ({ data }: IProductCard) => {
  const { title, price, thumbnail } = data;
  const convert = useCurrency()
  const { cartItems, setCartItems, setCartVisible } = useContext(AppContext)

  const handleCartItem = () =>  {
    setCartItems([...cartItems, data])
    setCartVisible(true)
  }
  
  return (
    <section className="w-full max-w-[300px] bg-white flex flex-col cursor-pointer relative hover:shadow">
      <img
        src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")}
        alt="product"
        className="w-full"
      />

      <div className="p-5 border-t border-[#ddd]">
        <h2 className="text-3xl font-normal block mb-2">
          {convert.formatPTBR(Number(price))}
        </h2>
        <h2 className="text-base text-black/55 font-medium">{title}</h2>
      </div>

      <button className="absolute top-0 right-0 w-11 h-11 m-[12px 15px] text-[#0c5dd6] flex items-center justify-center border-none rounded-full bg-[rgba(255, 255, 255, 0.8)] text-2xl" onClick={handleCartItem}>
        <BsFillCartPlusFill />
      </button>
    </section>
  );
};

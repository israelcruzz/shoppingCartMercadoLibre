import { BsCartDashFill } from "react-icons/bs";
import { IProductCard } from "../../@types/types";
import { useCurrency } from "../../hooks/useCurrency";
import { useContext } from "react";
import AppContext from "../../context/appContext";

export const CartItem = ({ data }: IProductCard) => {
  const { id, title, price, thumbnail } = data;
  const format = useCurrency();

  const { cartItems, setCartItems } = useContext(AppContext)

  console.log(cartItems);
  

  const handleRemoveItemCart = () => {
    const NewCartsItems = cartItems.filter((item) => item.id !== id)
    setCartItems(NewCartsItems)
  }

  return (
    <section className="flex items-center relative border-b border-[#ddd] pb-5 mb-5 last:border-none">
      <div>
        <img
          src={thumbnail}
          alt="product"
          className="min-w-[100px] w-[100px]"
        />
      </div>
      <div>
        <span className="font-medium text-sm text-black/30">{title}</span>
        <h2 className="text-2xl font-medium">
          {format.formatPTBR(Number(price))}
        </h2>
      </div>

      <button className="absolute top-0 right-0" onClick={handleRemoveItemCart}>
        <BsCartDashFill />
      </button>
    </section>
  );
};

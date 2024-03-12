import { BsCartDashFill } from "react-icons/bs";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { IProductCard } from "../../@types/types";
import { useCurrency } from "../../hooks/useCurrency";
import { useContext, useEffect, useState } from "react";
import AppContext from "../../context/appContext";

export const CartItem = ({ data }: IProductCard) => {
  const [quantity, setQuantity] = useState<number>(1);
  const { id, title, price, thumbnail } = data;
  const format = useCurrency();

  const { cartItems, setCartItems, prices, setPrices } = useContext(AppContext);

  const handleRemoveItemCart = () => {
    const newCartsItems = cartItems.filter((item) => item.id !== id);
    const newCartsItemsPrices = prices.filter((price) => price.id !== id);

    setCartItems(newCartsItems);
    setPrices(newCartsItemsPrices)
  };

  useEffect(() => {
    const currentPrice = prices.findIndex((price) => price.id === id)
    
    const newPrices = [...prices]
    if(currentPrice !== -1){
      newPrices[currentPrice].price = price * quantity
    } else {
      newPrices.push({ id, price: price * quantity })
    }
    setPrices(newPrices)
  }, [quantity]);

  const handleAddQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleRemoveQuantity = () => {
    setQuantity((prev) => {
      if (prev === 1) {
        return prev;
      }

      return prev - 1;
    });
  };

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
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-medium">
            {format.formatPTBR(Number(price) * quantity)}
          </h2>

          <div className="flex gap-2 items-center justify-center">
            <button
              onClick={handleAddQuantity}
              className="shadow w-6 h-6 rounded-full flex justify-center items-center text-base"
            >
              <IoIosArrowUp />
            </button>
            <span>{quantity}</span>
            <button
              onClick={handleRemoveQuantity}
              className="shadow w-6 h-6 rounded-full flex justify-center items-center text-base"
            >
              <IoIosArrowDown />
            </button>
          </div>
        </div>
      </div>

      <button className="absolute top-0 right-0" onClick={handleRemoveItemCart}>
        <BsCartDashFill />
      </button>
    </section>
  );
};

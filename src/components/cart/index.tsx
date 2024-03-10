import { useContext } from "react";
import { CartItem } from "../cartItem";
import { IoArrowBackOutline } from "react-icons/io5";
import AppContext from "../../context/appContext";
import { useCurrency } from "../../hooks/useCurrency";

export const Cart = () => {
  const { cartVisible, setCartVisible, cartItems } = useContext(AppContext);
  const format = useCurrency();

  const handleCartNotVisible = () => {
    setCartVisible(false);
  };

  return (
    <section
      className={`w-full max-w-[350px] bg-white h-[100vh] fixed top-0 right-0 ${
        cartVisible ? "flex" : "hidden"
      } flex flex-col justify-between p-5`}
    >
      {cartItems.length > 0 ? (
        <div className="overflow-auto flex flex-col items-start">
          <button
            className="flex items-center gap-6 mb-6"
            onClick={handleCartNotVisible}
          >
            <IoArrowBackOutline size={24} />
            <span className="text-xl font-semibold">Carrinho</span>
          </button>
          {cartItems.map((item) => {
            return <CartItem data={item} />;
          })}
        </div>
      ) : (
        <div>
          <button
            className="flex items-center gap-6 mb-6"
            onClick={handleCartNotVisible}
          >
            <IoArrowBackOutline size={24} />
            <span className="text-xl font-semibold">Carrinho</span>
          </button>
          <h1 className="font-semibold">
            Você não possui produtos no carrinho.
          </h1>
        </div>
      )}

      <div className="text-3xl font-medium py-4 border-t border-[#ddd]">
        {format.formatPTBR(
          cartItems.reduce((acc, item) => {
            return acc + item.price;
          }, 0)
        )}
      </div>
    </section>
  );
};

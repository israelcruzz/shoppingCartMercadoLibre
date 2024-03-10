import { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import AppContext from "../../context/appContext";

export const CartButton = () => {
  const { setCartVisible, cartItems } = useContext(AppContext);

  const handleCartVisible = () => {
    setCartVisible(true);
  };

  return (
    <button
      className="relative flex items-center justify-center"
      onClick={handleCartVisible}
    >
      <AiOutlineShoppingCart size={32} />
      {cartItems.length > 0 && (
        <span
          className="absolute bg-red-500 w-[15px] h-[15px] rounded-full flex items-center justify-center
      text-white text-sm top-0 left-0"
        >
          {cartItems.length}
        </span>
      )}
    </button>
  );
};

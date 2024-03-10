import { CartButton } from "../cartButton";
import { Search } from "../search";

export const Navbar = () => {
  return (
    <header className="w-full h-[80px] bg-[#FFF15B] flex items-center justify-between p-12">
        <Search />
        <CartButton />
    </header>
  ) 
};

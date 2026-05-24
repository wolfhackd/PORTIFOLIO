import { Link } from "react-router";
import { Button } from './ui/button';
import { MenuModal } from './menuModal';

const MenubarHome = () => {
  return (
    <div className="backdrop-blur-sm from-gray-900 via-gray-800 to-transparent flex p-4 fixed z-5000 justify-between w-full">
      <nav className="bg-[#000000]  self-center p-0">
        <Link to="/">
          <Button
            variant="link"
            className="text-white font-bold hover:bg-[#EEF4ED] hover:text-black rounded-full  cursor-pointer"
          >
            Home
          </Button>
        </Link>
        {/* <Link to="/sobre"> */}
        <Link to="/progress">
          <Button
            variant="link"
            className="text-white  font-bold hover:bg-[#EEF4ED] hover:text-black  rounded-full  cursor-pointer"
          >
            Sobre
          </Button>
        </Link>
        <Link to="/projetos">
          <Button
            variant="link"
            className="text-white  font-bold hover:bg-[#EEF4ED] hover:text-black  rounded-full  cursor-pointer"
          >
            Trabalho
          </Button>
        </Link>
        {/* <Link to="/contato"> */}
        <Link to="/progress">
          <Button
            variant="link"
            className="text-black  font-bold bg-[#8DA9C4] hover:bg-[#EEF4ED]  rounded-full cursor-pointer"
          >
            Fale Comigo
          </Button>
        </Link>
      </nav>
      <MenuModal />
    </div>
  );
};

export default MenubarHome;
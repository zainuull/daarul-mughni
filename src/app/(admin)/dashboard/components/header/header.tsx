import { BiChevronLeft } from 'react-icons/bi';
import useStatus from '../../store/store.status';

const Header = ({ title }: { title: string }) => {
  const [menu, setMenu] = useStatus();
  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div onClick={handleMenu} className="flex items-center gap-x-2 cursor-pointer">
      <BiChevronLeft size={30} />
      <h1 className="text-2xl uppercase font-medium">{title}</h1>
    </div>
  );
};

export default Header;

import Menu from './components/menu/menu';
import NavbarDashboard from './components/navbar/navbar';


const LayoutPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full min-h-screen">
      <div className="w-full h-full flex relative">
        <Menu />
        <div className="w-full flex flex-col">
          <NavbarDashboard />
          <div className="w-full h-full">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default LayoutPage;

const Footer = () => {
  return (
    <div className="w-full p-2 border-t-2 border-black lg:absolute bottom-0 lg:border-none">
      <div className="flex flex-col items-center gap-y-2 lg:gap-y-4">
        <div className="flex items-center gap-x-12 font-semibold text-sm lg:text-base">
          <h1>Privacy Policy</h1>
          <h1>Term of Use</h1>
        </div>
        <p className="text-xs font-light">Copyright @2023 Daarul Mughni All Rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;

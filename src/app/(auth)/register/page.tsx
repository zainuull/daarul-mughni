import Image from 'next/image';
import logo from '../../../../public/assets/logoDM.jpeg';
import Link from 'next/link';

const RegisterPage = () => {
  return (
    <div className="w-full h-screen relative">
      <div className="w-full h-full flex flex-col justify-center items-center px-4 bg-gray-100">
        <div className="shadow-xl w-full min-h-4/5 rounded-lg flex flex-col gap-y-2 items-center p-10 lg:w-2/5 bg-white">
          <h1 className="text-xl font-medium">Buat Akun</h1>
          <p className="text-xs text-center lg:text-sm">
            Ruang Admin Pondok Pesantreen <br/>Daarul Mughni Al - Maaliki
          </p>
          <Image src={logo} alt="logo" className="w-[80px] my-2 rounded-md" />
          <form className="w-full flex flex-col gap-y-6">
            <div className="flex flex-col gap-y-2">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="mail"
                placeholder="Your email"
                className="w-full h-10 rounded-lg px-2 border-b outline-none hover:outline-amber-500 transition-all"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label htmlFor="telp">No Telp</label>
              <input
                id="telp"
                type="tel"
                placeholder="Your No telp"
                className="w-full h-10 rounded-lg px-2 border-b outline-none hover:outline-amber-500 transition-all"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Your password"
                className="w-full h-10 rounded-lg px-2 border-b outline-none hover:outline-amber-500 transition-all"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label htmlFor="password">Konfirmasi Password</label>
              <input
                id="password"
                type="password"
                placeholder="Your confirm password"
                className="w-full h-10 rounded-lg px-2 border-b outline-none hover:outline-amber-500 transition-all"
              />
            </div>
            <button className="w-full h-10 rounded-lg bg-amber-500 text-white mt-4 hover:bg-amber-600 transition-all font-semibold">
              Register
            </button>
            <p className="text-xs mt-2">
              Have any account ?{' '}
              <Link href={'/login'} className="font-semibold">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

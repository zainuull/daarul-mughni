import { Metadata } from 'next';
import LoginPage from './components/login';

export const metadata: Metadata = {
  title: 'Login - Dashboard Daarul Mughni',
  description: 'Web Official Daarul Mughni Al - Maaliki',
  authors: [{ name: 'kelompok 1' }, { url: 'https://daarul-mughni.vercel.app' }],
  icons: {
    icon: '/logoDM.jpeg',
  },
};


const login = () => {
  return <LoginPage />;
};

export default login;

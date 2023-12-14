import { Metadata } from 'next';
import HomePage from './(user)/home/page';

export const metadata: Metadata = {
  title: 'Daarul Mughni Official',
  description: 'Web Official Daarul Mughni Al - Maaliki',
  authors: [{ name: 'kelompok 1' }, { url: 'https://daarul-mughni.vercel.app' }],
  icons: {
    icon: '/logoDM.jpeg',
  },
};

export default async function Home() {
  return (
    <main>
      <HomePage />
    </main>
  );
}





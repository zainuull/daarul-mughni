import Image from 'next/image';
import HomePage from './(user)/home/page';
import { Testing } from './test';

export default async function Home() {
  Testing();

  return (
    <main>
      <HomePage />
    </main>
  );
}

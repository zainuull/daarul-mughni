import Image from 'next/image';
import banner from '../../../../public/assets/banner.png';
import Carousel from './components/carousel';
import Modal from './components/modal';

export default function EventPage() {
  return (
    <div className="w-full min-h-screen overflow-hidden">
      <div className="relative w-full h-full flex flex-col">
        <Image
          src={banner.src}
          alt="Logo"
          width={700}
          height={400}
          className="h-screen object-cover lg:w-full"
        />

        <div className="absolute w-full h-screen translate-y-32">
          <Carousel />
        </div>
      </div>
    </div>
  );
}

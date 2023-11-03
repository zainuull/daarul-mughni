import Image from 'next/image';
import contactBG from '../../../../public/assets/contact.png';
import { AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai';
import { CiFacebook } from 'react-icons/ci';
import Link from 'next/link';

const ContactPage = () => {
  return (
    <div className="w-full h-screen overflow-hidden">
      <div className="w-full h-screen relative">
        <Image src={contactBG} alt="Contact" className="object-cover h-[768px]" />
        <div className="absolute top-10 left-0 w-full h-3/4 bg-white rounded-xl py-10 flex flex-col items-center mt-14 ">
          <h1 className="text-xl font-semibold uppercase">Kontak Kami</h1>
          <div className="h-full flex flex-col justify-evenly border-b">
            <h1>Alamat : Cikahuripan, Kec. Klapanunggal</h1>
            <h1>Whatsapps : 08555555550</h1>
            <h1>Email : daarul.mughni@.sch.id </h1>
          </div>
          <div className="flex items-center gap-x-4 py-10">
            <Link href={'https://www.instagram.com/zainuull_'} target="_blank">
              <AiOutlineInstagram size={30} />
            </Link>
            <CiFacebook size={30} />
            <Link href={'https://www.youtube.com'} target="_blank">
              <AiOutlineYoutube size={30} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

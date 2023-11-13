import Image from 'next/image';
import banner from '../../../../public/assets/banner.png';
import { AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai';
import { CiFacebook } from 'react-icons/ci';
import Link from 'next/link';

const ContactPage = () => {
  return (
    <div className="w-full h-screen overflow-hidden">
      <div className="w-full h-screen relative">
        <Image src={banner} alt="Logo" width={700} height={400} className="lg:h-screen lg:w-full" />
        <div className="absolute top-10 left-0 w-full h-full flex justify-center">
          <div className="w-full h-3/4 bg-white rounded-xl py-10 flex flex-col items-center mt-14 lg:w-1/2">
            <h1 className="text-xl font-semibold uppercase">Kontak Kami</h1>
            <div className="h-full flex flex-col justify-evenly border-b">
              <h1>Alamat : Cikahuripan, Kec. Klapanunggal</h1>
              <h1>Whatsapps : 08555555550</h1>
              <h1>Email : daarul.mughni@.sch.id </h1>
            </div>
            <div className="flex items-center gap-x-4 py-10">
              <Link href={'https://www.instagram.com/daarulmughni.official/'} target="_blank">
                <AiOutlineInstagram size={30} />
              </Link>
              <CiFacebook size={30} />
              <Link href={'https://www.youtube.com/@DaarulMughniOfficial'} target="_blank">
                <AiOutlineYoutube size={30} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

import Image from "next/image";
import banner from "../../../../public/assets/banner.png"
import kyai from '../../../../public/assets/kyai.png';

const HomePage = () => {
  return (
    <div className="w-full min-h-screen relative">
      <div className="flex flex-col w-full relative">
        <div className="relative">
          <Image
            src={banner}
            alt="Logo"
            width={700}
            height={400}
            className="lg:w-full lg:h-screen object-cover"
          />
        </div>
        <div className="flex flex-col items-center justify-center text-center gap-y-4 mt-10 px-4 lg:absolute top-[100px] lg:w-full">
          <div className="flex flex-col items-center gap-y-2 w-full uppercase lg:mb-10">
            <h1 className="text-xl font-bold lg:text-2xl">Selamat Datang</h1>
            <p className="text-center w-3/4 lg:w-1/4 text-sm lg:font-medium">
              DI PENERIMAAN PESERTA DIDIK BARU DAARUL MUGNI AL - MAALIKI
            </p>
          </div>
          <h1 className="text-xs lg:w-1/3 lg:text-xs lg:font-light leading-relaxed">
            Kami memiliki program pengembangan keterampilan dan kepemimpinan untuk siswa yang ingin
            menjadi pemimpin masa depan. Gabunglah dan jadilah pemimpin yang berpengaruh di masa
            depan
          </h1>
          <Image src={kyai} alt="kyai" width={200} className="lg:w-[300px]" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

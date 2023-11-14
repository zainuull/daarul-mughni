'use client';
import Image from 'next/image';
import banner from '../../../../public/assets/banner.png';

const AboutPage = () => {
  return (
    <div className="w-full min-h-screen mb-10 lg:mb-0">
      <div className="flex flex-col w-full relative">
        <div className="relative">
          <Image
            src={banner}
            alt="Logo"
            width={700}
            height={400}
            className="lg:h-screen lg:w-full"
          />
        </div>
        <div className="lg:w-full lg:flex flex-col items-center">
          <div className="px-2 mt-4 text-sm leading-relaxed lg:absolute lg:top-[100px] lg:bg-white lg:p-10 lg:rounded-xl lg:w-1/2 lg:min-h-2/3">
            <div className="w-full text-center font-bold my-3 lg:text-xl">
              <h1>Pondok Pesantren Modern Perpaduan</h1>
              <h1 className="text-xl lg:text-2xl">Daarul Mughni Al - Malliki</h1>
            </div>
            <h1 className="lg:mt-10 lg:leading-relaxed lg:mb-2">
              Adalah pesantren modern Pesantren modern, juga dikenal dengan istilah khalafiyah,
              ashriyah atau al-haditsiyyah, adalah kebalikan dari pesantren salaf (salafiyah). Tidak
              ada definisi dan kriteria pasti tentang pondok pesantren sebagai syarat untuk bisa
              disebut pesantren modern.
            </h1>
            <span className="font-medium lg:font-semibold lg:border-b lg:border-black">
              Berikut adalah beberapa ciri khas pesantren modern:
            </span>
            <div className="list-disc pl-4 flex flex-col gap-y-1 whitespace-break-spaces lg:gap-y-2 lg:mt-2">
              <li>Penekanan pada bahasa asing Arab dan Inggris dalam percakapan.</li>
              <li>
                Memiliki sekolah formal dibawah kurikulum Diknas dan/atau Kemenag dari SD/MI MTS/SMP
                MA/SMA maupun sekolah tinggi..
              </li>
              <li>Penguasaan atau porsi terhadap kitab kuning kurang.</li>
              <li>
                Tidak lagi memakai sistem pengajian tradisional seperti sorogan, wetonan, dan
                bandongan.
              </li>
              <li>
                Memakai buku-buku literatur bahasa Arab kontemporer (bukan klasik / kitab kuning).
              </li>
              <li>
                Secara administratif mirip seperti administrasi sekolah formal, misalnya pendaftaran
                dengan sistem seleksi sehingga tidak semua calon santri diterima, biaya masuk
                umumnya lebih tinggi dari pesantren salaf, dan lain sebagainya.
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

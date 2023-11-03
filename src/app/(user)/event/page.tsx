'use client';
import Image from 'next/image';
import banner from '../../../../public/assets/banner.png';
import { getDataEvents } from '@/services/api';
import { useState } from 'react';
import event1 from '../../../../public/assets/event/event1.png';
import event2 from '../../../../public/assets/event/event2.png';
import event3 from '../../../../public/assets/event/event3.png';
import DetailEventPage from './[slug]/page';

export default function EventPage() {
  const [menu, setMenu] = useState(false);
  const [id, setId] = useState('');

  const handleMenu = (e: any) => {
    setMenu(!menu);
    setId(e.target.id);
  };

  return (
    <div className="w-full min-h-screen overflow-hidden">
      <div className="relative w-full h-full flex flex-col">
        <Image
          src={banner}
          alt="Logo"
          width={700}
          height={400}
          className="h-screen object-cover lg:w-full"
        />
        <div className="absolute w-full h-3/4 grid grid-cols-4 gap-4">
          <div className="col-span-1 flex items-center">
            <div onClick={(e) => handleMenu(e)} className="group relative cursor-pointer">
              <Image
                src={event1}
                id="event 1"
                alt="event 1"
                width={250}
                className={`object-cover group-hover:scale-105 transition-all duration-300`}
              />
            </div>
          </div>
          <div className="col-span-2 flex items-center">
            <div onClick={(e) => handleMenu(e)} className="group relative cursor-pointer">
              <Image
                src={event2}
                id="event 2"
                alt="event 2"
                width={350}
                className={`object-cover group-hover:scale-105 transition-all duration-300`}
              />
            </div>
          </div>
          <div className="col-span-1 flex items-center">
            <div onClick={(e) => handleMenu(e)} className="group relative cursor-pointer">
              <Image
                src={event3}
                id="event 3"
                alt="event 3"
                width={250}
                className={`object-cover group-hover:scale-105 transition-all duration-300`}
              />
            </div>
          </div>
        </div>
        {id === 'event 1' ? (
          <DetailEventPage
            menu={menu}
            setMenu={setMenu}
            event="01 - Kegiatan"
            name="Pembukaan Pramuka & Paskibra (Tahun ajaran 2023 - 2024)"
            description1={`Dengan Motto "Satya-Ku Darmakan - Darmaku Ku Baktikan "`}
            description2="Yang dibuka secara resmi oleh : Masugi Adi Jaluli, S.Pd "
          />
        ) : null}
        {id === 'event 2' ? (
          <DetailEventPage
            menu={menu}
            setMenu={setMenu}
            event="02 - Kegiatan"
            name="Tawaquf atau (Penutupan Seluruh Kegiatan Ekstrakurikuler)"
            description1="Dengan tujuan agar seluruh santri tidak terlalu banyak beraktifitas pada waktu ujian dalam
          menjalankannya, dan sekaligus pemberian penghargaan kepada santri yang berprestasi di
          berbagai bidang masing-masing."
            description2="Kegiatan yang dihadiri seluruh santri dan Jajaran dewan Asatidz & Ustadzah ini berlangsung
          sangat meriah, mulai dari pembukaan Tawaquf nya sampai dengan Penampilan - penampilannya."
          />
        ) : null}
        {id === 'event 3' ? (
          <DetailEventPage
            menu={menu}
            setMenu={setMenu}
            event="03 - Kegiatan"
            name="Acara Musabaqoh Rampak Bedug"
            description1="Yang diadakan di Pondok Pesantren Modern Perpaduan Daarul Mughni Al Maaliki untuk memperingati malam Iedul Adha 1444 H."
            description2={`Kegiatan ini berlangsung setelah Sholat Isya dan dimeriahkan oleh seluruh santri dengan peserta dari kelas 1 Tsanawiyah s/d kelas 4 Aliyah putra dan putri, Dengan Tema "Menggapai rahmat, Merebut Maghfirah, dengan Gema Takbir untuk Karakter Muda Generasi Islami", bertempatan di Aula Serbaguna Pondok Pesantren Modern Perpaduan Daarul Mughni Al Maaliki.`}
          />
        ) : null}
      </div>
    </div>
  );
}

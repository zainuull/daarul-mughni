'use client';
import { NextResponse, NextRequest } from 'next/server';
import event1 from '../../../../public/assets/event/event1.png';
import event2 from '../../../../public/assets/event/event2.png';
import event3 from '../../../../public/assets/event/event3.png';
import event4 from '../../../../public/assets/event/event4.png';
import event5 from '../../../../public/assets/event/event5.png';

const event = [
  {
    id: 1,
    name: `Pembukaan Pramuka & Paskibra (Tahun ajaran 2023 - 2024)`,
    description: `Dengan Motto " Satya-Ku Darmakan - Darmaku Ku Baktikan. Yang dibuka secara resmi oleh : Masugi Adi Jaluli, S.Pd Yang di laksanakan di Aula Pesantrendan di hadiri oleh Seluruh Santriwan & Santriawati "`,
    img: event1.src,
  },
  {
    id: 3,
    name: 'Acara Musabaqoh Rampak Bedug yang diadakan di Pondok Pesantren Modern Perpaduan Daarul Mughni Al Maaliki untuk memperingati malam Iedul Adha 1444 H.',
    description: `Kegiatan ini berlangsung setelah Sholat Isya dan dimeriahkan oleh seluruh santri dengan peserta dari kelas 1 Tsanawiyah s/d kelas 4 Aliyah putra dan putri, Dengan Tema "Menggapai rahmat, Merebut Maghfirah, dengan Gema Takbir untuk Karakter Muda Generasi Islami", bertempatan di Aula Serbaguna Pondok Pesantren Modern Perpaduan Daarul Mughni Al Maaliki.`,
    img: event3.src,
  },
  // {
  //   id: 2,
  //   name: 'Tawaquf atau (Penutupan Seluruh Kegiatan Ekstrakurikuler)',
  //   description: `Dengan tujuan agar seluruh santri tidak terlalu banyak beraktifitas pada waktu ujian dalam menjalankannya, dan sekaligus pemberian penghargaan kepada santri yang berprestasi di berbagai bidang masing-masing. Kegiatan yang dihadiri seluruh santri dan Jajaran dewan Asatidz & Ustadzah ini berlangsung sangat meriah, mulai dari pembukaan Tawaquf nya sampai dengan Penampilan - penampilannya.`,
  //   img: event2.src,
  // },
  {
    id: 4,
    name: 'Acara Musabaqoh Rampak Bedug yang diadakan di Pondok Pesantren Modern Perpaduan Daarul Mughni Al Maaliki untuk memperingati malam Iedul Adha 1444 H.',
    description: `Kegiatan ini berlangsung setelah Sholat Isya dan dimeriahkan oleh seluruh santri dengan peserta dari kelas 1 Tsanawiyah s/d kelas 4 Aliyah putra dan putri, Dengan Tema "Menggapai rahmat, Merebut Maghfirah, dengan Gema Takbir untuk Karakter Muda Generasi Islami", bertempatan di Aula Serbaguna Pondok Pesantren Modern Perpaduan Daarul Mughni Al Maaliki.`,
    img: event4.src,
  },
  {
    id: 5,
    name: 'Acara Musabaqoh Rampak Bedug yang diadakan di Pondok Pesantren Modern Perpaduan Daarul Mughni Al Maaliki untuk memperingati malam Iedul Adha 1444 H.',
    description: `Kegiatan ini berlangsung setelah Sholat Isya dan dimeriahkan oleh seluruh santri dengan peserta dari kelas 1 Tsanawiyah s/d kelas 4 Aliyah putra dan putri, Dengan Tema "Menggapai rahmat, Merebut Maghfirah, dengan Gema Takbir untuk Karakter Muda Generasi Islami", bertempatan di Aula Serbaguna Pondok Pesantren Modern Perpaduan Daarul Mughni Al Maaliki.`,
    img: event5.src,
  },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  if (id) {
    const detailEvent = event.find((event) => event.id === Number(id));
    if (detailEvent) {
      return NextResponse.json({ status: 200, message: 'Success', data: detailEvent });
    } else {
      return NextResponse.json({ status: 404, message: 'Not Found', data: {} });
    }
  } else {
    return NextResponse.json({ status: 200, message: 'Success', data: event });
  }
}

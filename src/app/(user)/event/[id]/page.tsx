import Image from 'next/image';
import banner from '../../../../../public/assets/banner.png';
import { getEventsById } from '@/services/api';

interface DetailEventPageProps {
  params: {
    id: string;
  };
}

const DetailEventPage = async (props: DetailEventPageProps) => {
  const { params } = props;
  const events = await getEventsById(params?.id);
  const event = events?.events || [];
  console.log(event);

  return (
    <div className="w-full min-h-screen mb-10 lg:mb-0">
      <div className="flex flex-col w-full relative">
        <div className="relative">
          <Image
            src={banner.src}
            alt="Logo"
            width={700}
            height={400}
            className="lg:h-screen lg:w-full"
          />
        </div>
        <div className="lg:w-full lg:flex flex-col items-center">
          <div className="px-2 mt-4 text-sm leading-relaxed lg:absolute lg:top-[70px] lg:bg-white lg:p-10 lg:rounded-xl lg:w-11/12 lg:h-4/5">
            <div className="w-full h-full flex justify-between items-center gap-x-4">
              <div className="h-full flex flex-col gap-y-12 w-1/3">
                <p className="text-2xl font-bold">{event?.title}</p>
                <p>{event?.description}</p>
                <p>
                  Pondok Pesantren Modern Perpaduan Daarul Mughni Al Maaliki, Klapanunggal - Bogor..
                </p>
              </div>

              <div className="w-2/3 h-full relative">
                <Image
                  src={event?.imageUrl}
                  alt={event?.title}
                  width={300}
                  height={330}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-6 left-10 flex flex-col gap-y-4">
                  <Image
                    src={event?.imageUrl}
                    alt={event?.title}
                    width={300}
                    height={330}
                    className="w-[300px] object-cover"
                  />
                  <p className="text-xl font-bold">{event?.person_responsible}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailEventPage;
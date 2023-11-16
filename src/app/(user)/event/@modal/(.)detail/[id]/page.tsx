'use client';
import Modal from '@/components/modal/modal';
import { getDataById } from '@/services/api';
import Image from 'next/image';

interface DetailModalProps {
  params: {
    slug: string;
  };
}

const DetailModal = async (props: DetailModalProps) => {
  const { params } = props;
  const events = await getDataById(params?.slug);
  const event = events?.data || [];

  return (
    <Modal>
      <div className="w-2/3 h-full relative">
        <Image
          src={event?.background_detail}
          alt={event?.name}
          width={300}
          height={330}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-6 left-10 flex flex-col gap-y-4">
          <Image
            src={event?.img || ''}
            alt={event?.name}
            width={300}
            height={330}
            className="w-[300px] object-cover"
          />
          <p className="text-xl font-bold">{event?.tokoh}</p>
        </div>
      </div>
    </Modal>
  );
};

export default DetailModal;

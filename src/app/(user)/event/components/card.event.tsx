'use client';
import Image from 'next/image';

interface CardEventProps {
  id: string;
  image: string;
  hidden?: string;
  handleMenu: (e: any) => void;
}

const CardEvent = (props: CardEventProps) => {
  const { id, image, handleMenu, hidden } = props;

  return (
    <div>
      <div onClick={(e) => handleMenu(e)} className="group relative cursor-pointer">
        <Image
          src={image}
          id={id}
          alt={id}
          width={350}
          height={250}
          className={`object-cover group-hover:scale-105 transition-all duration-300`}
        />
      </div>
    </div>
  );
};

export default CardEvent;

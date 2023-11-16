import { useRouter } from 'next/navigation';
import { MouseEventHandler, useRef, ReactNode } from 'react';

const Modal = ({ children }: { children: ReactNode }) => {
  const overlay = useRef(null);
  const router = useRouter();

  const handleClose: MouseEventHandler = (e) => {
    if (e.target == overlay.current) {
      router.back();
    }
  };
  return (
    <div ref={overlay} onClick={handleClose} className='fized top-0 left-0 bottom-0 right-0 mx-auto bg-black/60'>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 bg-white rounded-lg'>
        {children}
      </div>
    </div>
  );
};

export default Modal;

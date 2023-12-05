import useStatus from '@/app/(admin)/dashboard/store/store.status';
import { FaXmark } from 'react-icons/fa6';
import useViewModel from '@/app/(admin)/dashboard/(data)/activity/(presentation)/vm/view.model';
import { useEffect } from 'react';
import { HandleError } from '@/core/services/handleError/handleError';
import { NotifyService } from '@/core/services/notify/notifyService';

const Modal = ({ id, count }: { id: string; count: number }) => {
  const { getEventsById, detailEvent } = useViewModel();
  const [openModal, setOpenModal] = useStatus();
  const notifyService = new NotifyService();
  console.log(id);

  useEffect(() => {
    notifyService.showLoading();
    fetchData(id);
  }, [id]);

  const fetchData = (id: string) => {
    getEventsById(id)
      .then(() => {
        notifyService.closeSwal();
      })
      .catch((err) => {
        HandleError(err);
      });
  };

  const handleClose = () => {
    setOpenModal(!openModal);
  };
  if (!openModal) return null;

  return (
    <div className="w-full min-h-screen fixed">
      <div className="bg-black/60 w-full min-h-[1000px] relative flex justify-center items-center">
        <div className="bg-white w-3/4 min-h-full lg:w-1/2 lg:h-96 flex flex-col gap-y-6  justify-between p-4 rounded-lg relative select-none">
          <div className="flex flex-col gap-y-6 px-4">
            <h1 className="text-xl font-bold text-center">0{count} - Kegiatan</h1>
            <h2 className="text-2xl font-bold text-center">{detailEvent?.title}</h2>
            <p>{detailEvent?.description}</p>
            <p className="font-bold">Penanggung Jawab : {detailEvent?.person_responsible}</p>
          </div>
          <p>Pondok Pesantren Modern Perpaduan Daarul Mughni Al - Maaliki</p>
          <button>
            <FaXmark
              onClick={handleClose}
              className="text-red-600 absolute right-2 top-2 hover:scale-110 hover:translate-y-1 hover:-translate-x-1 transition-all cursor-pointer"
              size={25}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

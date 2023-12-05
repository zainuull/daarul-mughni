import { useState } from 'react';
import useStoreDatas from '../../store/store.datas';
import { BsChevronDoubleLeft, BsChevronDoubleRight } from 'react-icons/bs';
import useViewModel from '../../vm/view.model';

const Pagination = () => {
  const { getEvents } = useViewModel();
  const [dataStore] = useStoreDatas(); // temp datas
  const [currentPage, setCurrentPage] = useState(1);

  const lastPage = dataStore?.totalPage || 0;
  const totalPage = dataStore?.totalPage || 0;
  const pageNumbers = [];

  const pageRange = currentPage > totalPage - 1 ? 4 : currentPage > totalPage - 2 ? 3 : 2;
  const maxPagesToShow = currentPage < 3 ? 4 : 2;

  for (let i = currentPage - pageRange; i <= currentPage + maxPagesToShow; i++) {
    if (i > 0 && i <= totalPage) {
      pageNumbers.push(i);
    }
  }

  //to before page
  function prevPage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
      const obj = {
        page: currentPage - 1,
        perPage: 25,
      };
      getEvents(obj);
    }
  }

  //to change current page
  function changeCurrentPage(id: any) {
    setCurrentPage(id);
    const obj = {
      page: id,
      perPage: 25,
    };
    getEvents(obj);
  }

  //to next page
  function nextPage() {
    if (currentPage !== totalPage) {
      setCurrentPage(currentPage + 1);
      const obj = {
        page: currentPage + 1,
        perPage: 25,
      };
      getEvents(obj);
    }
  }

  return (
    <div className="flex gap-x-2 items-center">
      <div
        className={`bg-gray-200 rounded-lg flex items-center px-6 py-2
            ${currentPage === 1 ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
        <div onClick={prevPage}>
          <BsChevronDoubleLeft />
        </div>
      </div>

      <div className="bg-gray-200 rounded-lg flex items-center gap-x-2 cursor-pointer">
        {pageNumbers.map((n) => (
          <div
            onClick={() => changeCurrentPage(n)}
            key={n}
            className={`px-3 py-1 rounded-full text-sm ${
              n === currentPage ? 'bg-black text-white' : 'text-gray-600 hover:text-black'
            }`}>
            {n}
          </div>
        ))}
      </div>

      <div
        className={`bg-gray-200 rounded-lg flex items-center px-6 py-2 
              ${currentPage >= totalPage ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
        <div onClick={nextPage}>
          <BsChevronDoubleRight />
        </div>
      </div>
    </div>
  );
};

export default Pagination;

'use client';
import useDataProduct from '../../../../store/store.product';
import DropdownPrice from '../../dropdown/dropdown.price';
import DropdownProduct from '../../dropdown/dropdown.product';

const DataPersonal = () => {
  const [data, setData] = useDataProduct();
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.id]: e.target.value,
    });
  };
  return (
    <div className="w-full min-h-20 pb-10 grid grid-cols-2 gap-10">
      <div className="flex flex-col gap-y-2 col-span-1">
        <h1 className="uppercase">Nama Barang</h1>
        <DropdownProduct />
      </div>
      <div className="flex flex-col gap-y-2 col-span-1">
        <h1 className="uppercase">Harga Barang</h1>
        <DropdownPrice />
      </div>
      <div className="flex flex-col gap-y-2 col-span-1">
        <h1 className="uppercase">Jumlah Beli</h1>
        <input
          onChange={handleChange}
          id="total_buy"
          type="number"
          className=" outline-none border border-black rounded-md h-10 px-4"
          placeholder="Masukkan jumlah beli"
          required
        />
      </div>
      <div className="flex flex-col gap-y-2 col-span-1">
        <h1 className="uppercase">Total Harga / Barang</h1>
        <input
          onChange={handleChange}
          id="total_price_product"
          type="number"
          className=" outline-none border border-black rounded-md h-10 px-4"
          placeholder="0"
          required
        />
      </div>
    </div>
  );
};

export default DataPersonal;

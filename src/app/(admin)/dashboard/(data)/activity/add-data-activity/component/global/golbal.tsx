'use client';
import useForm from '@/app/(admin)/dashboard/store/store.status';
import { ICategory } from '@/model/event.model';
import { useEffect, useState } from 'react';

const DataGlobal = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [form, setForm] = useForm();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await fetch('/api/categories');
      const catName = await res.json();
      setCategories(catName);
    };

    fetchCategories();
  }, []);

  return (
    <div className="w-full min-h-20 pb-10 grid grid-cols-2 gap-10">
      <div className="flex flex-col gap-y-2 col-span-1">
        <h1 className="uppercase">Image</h1>
        <input
          onChange={handleChange}
          id="imageUrl"
          type="text"
          className=" outline-none border border-black rounded-md h-10 px-4"
          placeholder="Link gambar"
        />
      </div>
      <div className="flex flex-col gap-y-2 col-span-1">
        <h1 className="uppercase">Bagian</h1>
        <input
          onChange={handleChange}
          id="section"
          type="text"
          className=" outline-none border border-black rounded-md h-10 px-4"
          placeholder="Bag. Keamanan"
        />
      </div>
      <div className="flex flex-col gap-y-2 col-span-1">
        <h1 className="uppercase">No Telp Penanggung Jawab</h1>
        <input
          onChange={handleChange}
          id="telp_person_responsible"
          type="tel"
          className=" outline-none border border-black rounded-md h-10 px-4"
          placeholder="0881122222"
          required
        />
      </div>
      <div className="flex flex-col gap-y-2 col-span-1">
        <h1 className="uppercase">Jenis Kategori</h1>
        <select onChange={handleChange} id="selected_category">
          <option>Pilih Kategori</option>
          {categories &&
            categories.map((category: ICategory) => (
              <option key={category?.id} value={category?.catName}>
                {category?.catName}
              </option>
            ))}
        </select>
      </div>
      <div className="flex flex-col gap-y-2 col-span-1">
        <h1 className="uppercase">Modal Pembiayaan</h1>
        <input
          onChange={handleChange}
          id="total_cost"
          type="number"
          className=" outline-none border border-black rounded-md h-10 px-4"
          placeholder="Rp, 800.000"
          required
        />
      </div>
      <div className="flex flex-col gap-y-2 col-span-1">
        <h1 className="uppercase">Status Kegiatan</h1>
        <select onChange={handleChange} id="status">
          <option>Status Kegiatan</option>
          <option value={'Selesai'}>Selesai</option>
          <option value={'Pending'}>Pending</option>
        </select>
      </div>
    </div>
  );
};

export default DataGlobal;

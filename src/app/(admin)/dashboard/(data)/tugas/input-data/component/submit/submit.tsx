'use client';
import { postTeacher } from '@/services/api';
import useDataProduct from '../../../store/store.product';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { postPoduct } from '@/services/integrate/product';

const Submit = () => {
  const [error, setError] = useState('');
  const [product, setProduct] = useDataProduct();
  const router = useRouter();
  console.log(product);

  const handleSubmit = async () => {
    if (!product.name_product) {
      setError('Name and email must be fill');
      return;
    }
    const total_buy = Number(product?.total_buy)
    const total_price_product = Number(product?.total_price_product)
    const pbj = {
      name_product: product?.name_product,
      total_buy: total_buy,
      price_produt: product?.price_produt,
      total_price_product: total_buy * total_price_product,
    };
    await postPoduct(pbj);
    router.push('/dashboard/tugas');
    setProduct({
      ...product,
      name_product: '',
      total_buy: '',
      price_produt: '',
      total_price_product: '',
    });
  };

  return (
    <div className="w-full flex justify-end items-center gap-x-6">
      {error && <p className="text-red-600">{error}</p>}
      <button className="w-1/3 font-medium py-2 bg-gray-200 rounded-md hover:shadow-md transition-all">
        Reset
      </button>
      <button
        onClick={handleSubmit}
        className="w-1/3 font-medium py-2 bg-primary rounded-md hover:shadow-md transition-all">
        Simpan
      </button>
    </div>
  );
};

export default Submit;

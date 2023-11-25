'use client';
import Select from 'react-select';
import useDataProduct from '../../../store/store.product';
import { useEffect } from 'react';
import { getProduct } from '@/services/integrate/product';
import useStoreDatas from '../../../store/store.datas';

const DropdownProduct = () => {
  const [data, setData] = useDataProduct();
  const [product, setProduct] = useStoreDatas();

  useEffect(() => {
    const fetchData = async () => {
      const res = await getProduct();
      setProduct(res?.data);
    };
    fetchData();
  }, []);

  const Option = Array.isArray(product)
    ? product?.map((obj: { id: string; name_product: string }) => ({
        value: obj?.id,
        label: obj?.name_product,
      }))
    : [];

  const handle = (option: any) => {
    setData({
      ...data,
      name_product: option?.label,
    });
  };

  return (
    <Select
      closeMenuOnSelect={true}
      options={Option}
      value={Option.find((option) => option.label === data?.name_product) || ''}
      isClearable={true}
      onChange={handle}
      placeholder="Pilih barang"
    />
  );
};

export default DropdownProduct;

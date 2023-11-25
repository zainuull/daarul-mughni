'use client';
import Select from 'react-select';
import useDataProduct from '../../../store/store.product';
import useStoreDatas from '../../../store/store.datas';

const DropdownPrice = () => {
  const [data, setData] = useDataProduct();
  const [product] = useStoreDatas();

  const Option = Array.isArray(product)
    ? product?.map((obj: { id: string; price_product: string }) => ({
        value: obj?.id,
        label: obj?.price_product,
      }))
    : [];

  const handle = (option: any) => {
    setData({
      ...data,
      price_produt: option?.label,
    });
  };

  return (
    <Select
      closeMenuOnSelect={true}
      options={Option}
      value={Option.find((option) => option.label === data?.price_produt) || ''}
      isClearable={true}
      onChange={handle}
      isDisabled={product ? false : true}
      placeholder="Pilih barang"
    />
  );
};

export default DropdownPrice;

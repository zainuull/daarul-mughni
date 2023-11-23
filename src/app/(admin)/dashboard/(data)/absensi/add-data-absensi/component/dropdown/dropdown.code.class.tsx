'use client';
import Select from 'react-select';
import useDataAbsensi from '../../../store/store.absensi';
import { useEffect, useState } from 'react';
import { getCodeClass } from '@/services/api';

const DropdownCodeClass = () => {
  const [data, setData] = useDataAbsensi();
  const [codeClass, setCodeClass] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getCodeClass();
      setCodeClass(res?.data);
    };
    fetchData();
  }, []);

  const nOption = codeClass?.map((obj: any) => ({
    value: obj?.id,
    label: obj?.name,
  }));

  const handle = (option: any) => {
    setData({
      ...data,
      code_class: option?.label,
    });
  };

  return (
    <Select
      closeMenuOnSelect={true}
      options={nOption}
      value={nOption?.find((option) => option.label === data?.code_class) || ''}
      isClearable={true}
      onChange={handle}
      placeholder="Pilih kode kelas"
    />
  );
};

export default DropdownCodeClass;

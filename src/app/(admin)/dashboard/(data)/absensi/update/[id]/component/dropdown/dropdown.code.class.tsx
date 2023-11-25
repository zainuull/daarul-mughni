'use client';
import Select from 'react-select';
import useDataAbsensi from '../../../../store/store.absensi';
import { useEffect, useState } from 'react';
import { getCodeClassByClassName } from '@/services/api';

const DropdownCodeClass = () => {
  const [data, setData] = useDataAbsensi();
  const [codeClass, setCodeClass] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getCodeClassByClassName(data?.className);
      setCodeClass(res?.data?.code_classes);
    };
    fetchData();
  }, [data?.className]);


  const Option = Array.isArray(codeClass)
    ? codeClass.map((obj: { id: string; name: string }) => ({
        value: obj?.id,
        label: obj?.name,
      }))
    : [];

  const handle = (option: any) => {
    setData({
      ...data,
      code_class: option?.label,
    });
  };

  return (
    <Select
      closeMenuOnSelect={true}
      options={Option}
      value={Option?.find((option) => option.label === data?.code_class) || ''}
      isClearable={true}
      onChange={handle}
      placeholder="Pilih kode kelas"
    />
  );
};

export default DropdownCodeClass;

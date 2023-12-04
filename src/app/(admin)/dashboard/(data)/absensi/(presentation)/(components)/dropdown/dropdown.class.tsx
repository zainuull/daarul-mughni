'use client';
import Select from 'react-select';
import useDataAbsensi from '../../store/store.absensi';
import { useEffect, useState } from 'react';
import { getClassByLevel } from '@/services/api';

export const DropdownClass = () => {
  const [data, setData] = useDataAbsensi();
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getClassByLevel(data?.levelName);
      setClasses(res?.data?.class);
    };

    fetchData();
  }, [data?.levelName]);

  const Option = Array.isArray(classes)
    ? classes.map((obj: { id: string; className: string }) => ({
        value: obj?.id,
        label: obj?.className,
      }))
    : [];

  const handle = (option: any) => {
    setData({
      ...data,
      className: option?.label,
    });
  };

  return (
    <Select
      closeMenuOnSelect={true}
      options={Option}
      value={Option?.find((option) => option.label === data?.className) || ''}
      isClearable={true}
      onChange={handle}
      placeholder="Pilih kelas"
    />
  );
};

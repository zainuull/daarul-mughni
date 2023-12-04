'use client';
import Select from 'react-select';
import useDataAbsensi from '../../store/store.absensi';
import { useEffect, useState } from 'react';
import { getLevel } from '@/services/api';

export const DropdownLevel = () => {
  const [data, setData] = useDataAbsensi();
  const [level, setLevel] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getLevel();
      setLevel(res?.data);
    };
    fetchData();
  }, []);

  const nOption = level?.map((obj: { id: string; levelName: string }) => ({
    value: obj?.id,
    label: obj?.levelName,
  }));

  const handle = (option: any) => {
    setData({
      ...data,
      levelName: option?.label,
    });
  };

  return (
    <Select
      closeMenuOnSelect={true}
      options={nOption}
      value={nOption?.find((option) => option.label === data?.levelName) || ''}
      isClearable={true}
      onChange={handle}
      placeholder="Pilih tingkatan"
    />
  );
};

'use client';
import Select from 'react-select';
import useDataAbsensi from '../../../store/store.absensi';
import { useEffect, useState } from 'react';
import { getClass, getLessons } from '@/services/api';

const DropdownLesson = () => {
  const [data, setData] = useDataAbsensi();
  const [lesson, setLesson] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getLessons();
      setLesson(res?.data);
    };
    fetchData();
  }, []);

  const nOption = lesson?.map((obj: any) => ({
    value: obj?.id,
    label: obj?.name,
  }));

  const handle = (option: any) => {
    setData({
      ...data,
      lesson: option?.label,
    });
  };

  return (
    <Select
      closeMenuOnSelect={true}
      options={nOption}
      value={nOption?.find((option) => option.label === data?.lesson) || ''}
      isClearable={true}
      onChange={handle}
      placeholder="Pilih pelajaran"
    />
  );
};

export default DropdownLesson;

'use client';
import Select from 'react-select';
import useDataAbsensi from '../../store/store.absensi';
import { useEffect, useState } from 'react';
import { getLessonsByLevelName } from '@/services/api';

export const DropdownLesson = () => {
  const [data, setData] = useDataAbsensi();
  const [lesson, setLesson] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getLessonsByLevelName(data?.levelName);
      setLesson(res?.data?.lesson);
    };
    fetchData();
  }, [data?.levelName]);

  const nOption = lesson?.map((obj: { id: string; name: string }) => ({
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

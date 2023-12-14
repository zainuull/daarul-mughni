'use client';
import Select from 'react-select';
import useDataAbsensi from '../../store/store.absensi';
import { useEffect } from 'react';
import useviewModel from '../../vm/view.model';

export const DropdownLesson = () => {
  const { getLevelById, detailLevel } = useviewModel();
  const [data, setData] = useDataAbsensi();
  const lesson = detailLevel?.data?.lesson;


  useEffect(() => {
    fetchData(data?.level_id);
  }, [data?.level_id]);

  const fetchData = async (id: string) => {
    getLevelById(id);
  };

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

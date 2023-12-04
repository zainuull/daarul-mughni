'use client';
import Select from 'react-select';
import useDataAbsensi from '../../store/store.absensi';
import { useEffect, useState } from 'react';
import useViewModel from '../../../../teacher/(presentation)/vm/view-model';
import useStoreDatasTeacher from '../../../../teacher/(presentation)/store/store.datas';

export const DropdownTeacher = () => {
  const [data, setData] = useDataAbsensi();
  const { getTeachers } = useViewModel();
  const [dataStore] = useStoreDatasTeacher();
  const teacher = dataStore?.data;

  useEffect(() => {
    const fetchData = async () => {
      await getTeachers();
    };
    fetchData();
  }, []);

  const nOption = teacher?.map((obj: { id: string; name: string }) => ({
    value: obj?.id,
    label: `${obj?.name}`,
  }));

  const handle = (option: any) => {
    setData({
      ...data,
      teacher: option?.label,
    });
  };

  return (
    <Select
      closeMenuOnSelect={true}
      options={nOption}
      value={nOption?.find((option) => option.label === data?.teacher) || ''}
      isClearable={true}
      onChange={handle}
      placeholder="Pengajar"
    />
  );
};


'use client';
import Select from 'react-select';
import useDataAbsensi from '../../../store/store.absensi';
import { useEffect, useState } from 'react';
import { getTeachers } from '@/services/api';

const DropdownTeacher = () => {
  const [data, setData] = useDataAbsensi();
  const [teacher, setTeacher] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getTeachers();
      setTeacher(res?.data);
    };
    fetchData();
  }, []);

  const nOption = teacher?.map((obj: { id: string; name: string }) => ({
    value: obj?.id,
    label: `Ustdz ${obj?.name}`,
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

export default DropdownTeacher;

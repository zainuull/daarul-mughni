'use client';
import Select from 'react-select';
import { useEffect } from 'react';
import useViewModel from '../../../../teacher/(presentation)/vm/view-model';
import useDataEvents from '../../store/store.events';
import useStoreDatasTeacher from '../../../../teacher/(presentation)/store/store.datas';

export const DropdownTeacher = () => {
  const { getTeachers } = useViewModel();
  const [data, setData] = useDataEvents();
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
      person_responsible: option?.label,
    });
  };

  return (
    <Select
      closeMenuOnSelect={true}
      options={nOption}
      value={nOption?.find((option) => option.label === data?.person_responsible) || ''}
      isClearable={true}
      onChange={handle}
      placeholder="Penanggung Jawab"
    />
  );
};

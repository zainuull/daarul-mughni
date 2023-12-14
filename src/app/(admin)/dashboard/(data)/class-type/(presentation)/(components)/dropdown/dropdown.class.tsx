'use client';
import Select from 'react-select';
import { useEffect } from 'react';
import useViewModel from '../../vm/view-model';
import useStoreClass from '../../store/store.class';
import useData from '../../store/store.class-type';

export const DropdownClass = () => {
  const { getClass } = useViewModel();
  const [data, setData] = useData();
  const [dataStore] = useStoreClass();
  const level = dataStore?.data;

  useEffect(() => {
    const fetchData = async () => {
      await getClass();
    };
    fetchData();
  }, []);

  const levelOption = level?.map((obj: any) => ({
    value: obj?.id,
    label: obj?.name,
  }));

  const handle = (option: any) => {
    setData({
      ...data,
      className: option?.label,
    });
  };

  return (
    <Select
      closeMenuOnSelect={true}
      options={levelOption}
      value={levelOption?.find((option) => option.label === data?.className) || ''}
      isClearable={true}
      onChange={handle}
      placeholder="MTs"
    />
  );
};

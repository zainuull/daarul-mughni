'use client';
import Select from 'react-select';
import useData from '../../store/store.absensi';
import { useEffect } from 'react';
import useViewModel from '../../vm/view.model';
import useStoreLevel from '../../store/store.level';

export const DropdownLevel = () => {
  const { getLevel } = useViewModel();
  const [data, setData] = useData();
  const [dataStore] = useStoreLevel();
  const level = dataStore?.data;

  useEffect(() => {
    const fetchData = async () => {
      await getLevel();
    };
    fetchData();
  }, []);

  const levelOption = level?.map((obj: any) => ({
    value: obj?.id,
    label: obj?.name,
  }));

  const handleLevel = (option: any) => {
    setData({
      ...data,
      level_id: option?.value,
      levelName: option?.label,
    });
  };

  return (
    <Select
      closeMenuOnSelect={true}
      options={levelOption}
      value={levelOption?.find((option) => option.label === data?.levelName) || ''}
      isClearable={true}
      onChange={handleLevel}
      placeholder="MTs"
    />
  );
};

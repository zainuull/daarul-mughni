'use client';
import Select from 'react-select';
import useDataTeacher from '../../store/store.teacher';
import { useEffect } from 'react';
import useViewModel from '../../vm/view-model';
import useStoreRole from '../../store/store.role';

export const DropdownPosition = () => {
  const { getRole } = useViewModel();
  const [data, setData] = useDataTeacher();
  const [role] = useStoreRole();

  useEffect(() => {
    const fetchData = async () => {
      await getRole();
    };
    fetchData();
  }, []);

  const roleOption = role?.data?.map((obj: any) => ({
    value: obj?.id,
    label: obj?.name,
  }));

  const handlePosition = (option: any) => {
    setData({
      ...data,
      role: option?.label,
    });
  };

  return (
    <Select
      closeMenuOnSelect={true}
      options={roleOption}
      value={roleOption?.find((option) => option.label === data?.role) || ''}
      isClearable={true}
      onChange={handlePosition}
      placeholder="Pimpinan"
    />
  );
};

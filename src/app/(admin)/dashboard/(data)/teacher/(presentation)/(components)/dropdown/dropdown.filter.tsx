'use client';
import Select, { StylesConfig } from 'react-select';
import useDataTeacher from '../../store/store.teacher';
import { useEffect } from 'react';
import useViewModel from '../../vm/view-model';
import useStoreRole from '../../store/store.role';

export const DropdownFilter = () => {
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
      filter_by: option?.label,
    });
  };

  // Define custom styles for the dropdown
  const customStyles: StylesConfig = {
    control: (provided) => ({
      ...provided,
      backgroundColor: '#f1f5f9',
      borderColor: 'black',
    }),
  };

  return (
    <Select
      closeMenuOnSelect={true}
      options={roleOption}
      value={roleOption?.find((option) => option.label === data?.filter_by) || ''}
      isClearable={true}
      onChange={handlePosition}
      styles={customStyles}
      placeholder="Jabatan"
    />
  );
};


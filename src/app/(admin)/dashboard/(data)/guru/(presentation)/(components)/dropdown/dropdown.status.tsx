'use client';
import Select from 'react-select';
import useDataTeacher from '../../store/store.teacher';

export const DropdownStatus = () => {
  const [data, setData] = useDataTeacher();

  const statusOption = [
    { value: 'Aktif', label: 'Aktif' },
    { value: 'Tidak Aktif', label: 'Tidak Aktif' },
  ];

  const handleStatus = (option: any) => {
    setData({
      ...data,
      status: option?.label,
    });
  };

  return (
    <Select
      closeMenuOnSelect={true}
      options={statusOption}
      value={statusOption.find((option) => option.label === data?.status) || ''}
      isClearable={true}
      onChange={handleStatus}
      placeholder="Pilih Status"
    />
  );
};
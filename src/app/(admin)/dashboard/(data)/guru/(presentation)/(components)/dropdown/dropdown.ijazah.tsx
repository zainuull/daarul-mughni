'use client';
import Select from 'react-select';
import useDataTeacher from '../../store/store.teacher';

export const DropdownJazah = () => {
  const [data, setData] = useDataTeacher();

  const ijazahOption = [
    { value: 'S1', label: 'S1' },
    { value: 'S2', label: 'S2' },
    { value: 'S3', label: 'S3' },
    { value: 'Lainnya', label: 'Lainnya' },
  ];

  const handleIjazah = (option: any) => {
    setData({
      ...data,
      ijazah: option?.label,
    });
  };

  return (
    <Select
      closeMenuOnSelect={true}
      options={ijazahOption}
      value={ijazahOption.find((option) => option.label === data?.ijazah) || ''}
      isClearable={true}
      onChange={handleIjazah}
      placeholder="S1"
    />
  );
};


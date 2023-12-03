'use client';
import Select from 'react-select';
import useDataStudent from '../../store/store.student';

export const DropdownJazah = () => {
  const [data, setData] = useDataStudent();

  const ijazahOption = [
    { value: 'SD', label: 'SD' },
    { value: 'SDIT', label: 'SDIT' },
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
      placeholder="SD"
    />
  );
};

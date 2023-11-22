'use client';
import Select from 'react-select';
import useDataStudent from '../../../store/store.student';

const DropdownGender = () => {
  const [data, setData] = useDataStudent();

  const genderOption = [
    { value: 'Laki-Laki', label: 'Laki-Laki' },
    { value: 'Perempuan', label: 'Perempuan' },
  ];

  const handleGender = (option: any) => {
    setData({
      ...data,
      gender: option?.label,
    });
  };

  return (
    <Select
      closeMenuOnSelect={true}
      options={genderOption}
      value={genderOption.find((option) => option.label === data?.gender) || ''}
      isClearable={true}
      onChange={handleGender}
      placeholder="L/P"
    />
  );
};

export default DropdownGender;

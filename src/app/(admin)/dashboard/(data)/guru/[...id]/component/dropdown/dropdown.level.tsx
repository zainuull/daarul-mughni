'use client';
import Select from 'react-select';
import useDataTeacher from '../../../store/store.teacher';

const DropdownLevel = () => {
  const [data, setData] = useDataTeacher();

  const levelOption = [
    { value: 'A1 - Pembina', label: 'A1 - Pembina' },
    { value: 'A2 - Qirwali', label: 'A2 - Qirwali' },
    { value: 'A3 - Qirsati', label: 'A3 - Qirsati' },
    { value: 'B1 - Walas', label: 'B1 - Walas' },
  ];

  const handleLevel = (option: any) => {
    setData({
      ...data,
      level: option.label,
    });
  };

  return (
    <Select
      closeMenuOnSelect={true}
      options={levelOption}
      value={levelOption.find((option) => option.label === data?.level) || ''}
      isClearable={true}
      onChange={handleLevel}
      placeholder="A1 - Pembina"
    />
  );
};

export default DropdownLevel;

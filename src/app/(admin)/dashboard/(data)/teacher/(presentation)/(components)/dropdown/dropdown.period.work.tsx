'use client';
import Select from 'react-select';
import useDataTeacher from '../../store/store.teacher';

export const DropdownPeriodWork = () => {
  const [data, setData] = useDataTeacher();

  const periodOption = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
  ];

  const handlePeriod = (option: any) => {
    setData({
      ...data,
      period_work: option?.label,
    });
  };

  return (
    <Select
      closeMenuOnSelect={true}
      options={periodOption}
      value={periodOption.find((option) => option.label === data?.period_work) || ''}
      isClearable={true}
      onChange={handlePeriod}
      placeholder="1"
    />
  );
};


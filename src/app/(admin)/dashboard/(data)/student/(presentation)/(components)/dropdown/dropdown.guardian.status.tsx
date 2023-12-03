'use client';
import Select from 'react-select';
import useDataStudent from '../../store/store.student';

export const DropdownGuardianStatus = () => {
  const [data, setData] = useDataStudent();

  const guardianStatusOption = [
    { value: 'Orang Tua', label: 'Orang Tua' },
    { value: 'Saudara', label: 'Saudara' },
    { value: 'Lainnya', label: 'Lainnya' },
  ];

  const handleGuardianStatus = (option: any) => {
    setData({
      ...data,
      guardian_status: option?.label,
    });
  };

  return (
    <Select
      closeMenuOnSelect={true}
      options={guardianStatusOption}
      value={guardianStatusOption.find((option) => option.label === data?.guardian_status) || ''}
      isClearable={true}
      onChange={handleGuardianStatus}
      placeholder="Hubungan Wali"
    />
  );
};

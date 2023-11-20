'use client';
import Select from 'react-select';
import useDataStudent from '../../../store/store.student';

const DropdownClass = () => {
  const [data, setData] = useDataStudent();

  const classOption = [
    { value: 'MTs VII', label: 'MTs VII' },
    { value: 'MTs VIII', label: 'MTs VIII' },
    { value: 'MTs IX', label: 'MTs IX' },
    { value: 'MA X', label: 'MA X' },
    { value: 'MA XI', label: 'MA XI' },
    { value: 'MA XII', label: 'MA XII' },
  ];

  const handleClass = (option: any) => {
    setData({
      ...data,
      kelas: option.label,
    });
  };

  return (
    <Select
      closeMenuOnSelect={true}
      options={classOption}
      value={classOption.find((option) => option.label === data?.kelas) || ''}
      isClearable={true}
      onChange={handleClass}
      placeholder="MTs VII"
    />
  );
};

export default DropdownClass;

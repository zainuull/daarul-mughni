import Select from 'react-select';
import useDataEvents from '../../store/store.events';

export const DropdownStatus = () => {
  const [form, setForm] = useDataEvents();

  const statusOption = [
    { value: 'Pending', label: 'Pending' },
    { value: 'Selesai', label: 'Selesai' },
  ];

  const handleStatus = (option: any) => {
    setForm({
      ...form,
      status: option?.label,
    });
  };

  return (
    <Select
      closeMenuOnSelect={true}
      options={statusOption}
      value={statusOption.find((option) => option.label === form?.status) || ''}
      isClearable={true}
      onChange={handleStatus}
      placeholder="Pilih Status"
    />
  );
};

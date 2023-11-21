import useForm from '@/app/(admin)/dashboard/store/store.status';
import Select from 'react-select';

const DropdownStatus = () => {
  const [form, setForm] = useForm();

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

export default DropdownStatus;

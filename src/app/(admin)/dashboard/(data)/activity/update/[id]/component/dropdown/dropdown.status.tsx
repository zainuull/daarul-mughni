import Select from 'react-select';
import useDataEvents from '../../../../store/store.events';

const DropdownStatus = () => {
  const [data, setData] = useDataEvents();

  const statusOption = [
    { value: 'Pending', label: 'Pending' },
    { value: 'Selesai', label: 'Selesai' },
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

export default DropdownStatus;

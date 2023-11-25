'use client';
import Select, { StylesConfig } from 'react-select';
import useDataStudent from '../../../../store/store.student';
import useStoreDatas from '../../../../store/store.datas';

const DropdownFilter = () => {
  const [data, setData] = useDataStudent();
  const [datas] = useStoreDatas();

  // Check if datas is an array before using map
  const Option = Array.isArray(datas)
    ? datas.map((obj: { className: string; id: string }) => ({
        value: obj?.id,
        label: obj?.className,
      }))
    : [];

  const handlePosition = (option: any) => {
    setData({
      ...data,
      className: option?.label,
    });
  };

  // Define custom styles for the dropdown
  const customStyles: StylesConfig = {
    control: (provided) => ({
      ...provided,
      backgroundColor: '#f1f5f9',
      width: 150,
      borderColor: 'black',
    }),
  };

  return (
    <Select
      closeMenuOnSelect={true}
      options={Option}
      value={Option.find((option) => option.label === data?.className) || ''}
      isClearable={true}
      onChange={handlePosition}
      styles={customStyles}
      placeholder="Filter kelas"
      isDisabled={data?.levelName ? false : true}
    />
  );
};

export default DropdownFilter;

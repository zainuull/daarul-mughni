'use client';
import Select, { StylesConfig } from 'react-select';
import useStoreDatas from '../../../store/store.datas';
import useDataAbsensi from '../../../store/store.absensi';
import { useEffect, useState } from 'react';
import { getClassByLevel } from '@/services/api';

const DropdownFilterClass = () => {
  const [formAbsensi, setFormAbsensi] = useDataAbsensi();
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getClassByLevel(formAbsensi?.filter_by_level);
      setClasses(res?.data?.class);
    };
    fetchData();
  }, [formAbsensi?.filter_by_level]);

  // Check if datas is an array before using map
  const Option = Array.isArray(classes)
    ? classes.map((obj: { className: string; id: string }) => ({
        value: obj?.id,
        label: obj?.className,
      }))
    : [];

  const handlePosition = (option: any) => {
    setFormAbsensi({
      ...formAbsensi,
      filter_by_class: option?.label,
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
      value={Option.find((option) => option.label === formAbsensi?.filter_by_class) || ''}
      isClearable={true}
      onChange={handlePosition}
      styles={customStyles}
      placeholder="Filter kelas"
      isDisabled={formAbsensi?.filter_by_level ? false : true}
    />
  );
};

export default DropdownFilterClass;
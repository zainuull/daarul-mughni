'use client';
import Select, { StylesConfig } from 'react-select';
import useDataAbsensi from '../../store/store.absensi';
import { useEffect, useState } from 'react';
import { getClassByLevel } from '@/services/api';
import Swal from 'sweetalert2';

export const DropdownFilterClass = () => {
  const [formAbsensi, setFormAbsensi] = useDataAbsensi();
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetchData();
  }, [formAbsensi?.filter_by_level]);

  const fetchData = () => {
    getClassByLevel(formAbsensi?.filter_by_level).then((res) => {
      setClasses(res?.data?.class);
    });
  };

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
      filter_by_class: option?.label || '',
    });
  };

  // Define custom styles for the dropdown
  const customStyles: StylesConfig = {
    control: (provided) => ({
      ...provided,
      backgroundColor: '#f1f5f9',
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
      placeholder="Kelas"
      isDisabled={formAbsensi?.filter_by_level ? false : true}
    />
  );
};

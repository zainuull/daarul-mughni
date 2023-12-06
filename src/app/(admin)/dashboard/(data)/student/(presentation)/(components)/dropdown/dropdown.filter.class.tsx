'use client';
import Select, { StylesConfig } from 'react-select';
import useDataStudent from '../../store/store.student';
import { useEffect, useState } from 'react';
import { getClassByLevel } from '@/services/api';

export const DropdownFilterClass = () => {
  const [studentForm, setStudentForm] = useDataStudent();
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getClassByLevel(studentForm?.filter_by_level);
      setClasses(res?.data?.class);
    };
    fetchData();
  }, [studentForm?.filter_by_level]);

  // Check if datas is an array before using map
  const Option = Array.isArray(classes)
    ? classes.map((obj: { className: string; id: string }) => ({
        value: obj?.id,
        label: obj?.className,
      }))
    : [];

  const handleClass = (option: any) => {
    setStudentForm({
      ...studentForm,
      filter_by_class: option?.label,
    });
  };

  // Define custom styles for the dropdownFilterClass
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
      value={Option?.find((option) => option.label === studentForm?.filter_by_class) || ''}
      isClearable={true}
      onChange={handleClass}
      isDisabled={studentForm?.filter_by_level ? false : true}
      styles={customStyles}
      placeholder="Kelas"
    />
  );
};

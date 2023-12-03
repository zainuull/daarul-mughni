'use client';
import Select from 'react-select';
import useDataStudent from '../../store/store.student';
import { useEffect, useState } from 'react';
import { getClassByLevel } from '@/services/api';

export const DropdownClass = () => {
  const [studentForm, setStudentForm] = useDataStudent();
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getClassByLevel(studentForm?.levelName);
      setClasses(res?.data?.class);
    };
    fetchData();
  }, [studentForm?.levelName]);

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
      className: option?.label,
    });
  };

  return (
    <Select
      closeMenuOnSelect={true}
      options={Option}
      value={Option?.find((option) => option.label === studentForm?.className) || ''}
      isClearable={true}
      onChange={handleClass}
      isDisabled={studentForm?.levelName ? false : true}
      placeholder="MTs VII"
    />
  );
};

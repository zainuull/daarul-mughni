'use client';
import Select from 'react-select';
import useDataStudent from '../../store/store.absensi';
import { useEffect } from 'react';
import useViewModel from '../../vm/view.model';

export const DropdownClassType = () => {
  const { getClassById, detailClass } = useViewModel();
  const [studentForm, setStudentForm] = useDataStudent();
  const classType = detailClass?.data?.classType;

  useEffect(() => {
    fetchData(studentForm?.className_id);
  }, [studentForm?.className_id]);

  const fetchData = (id: string) => {
    getClassById(id);
  };

  // Check if datas is an array before using map
  const Option = Array.isArray(classType)
    ? classType.map((obj: { name: string; id: string }) => ({
        value: obj?.id,
        label: obj?.name,
      }))
    : [];

  const handleClass = (option: any) => {
    setStudentForm({
      ...studentForm,
      classTypeName: option?.label,
    });
  };

  return (
    <Select
      closeMenuOnSelect={true}
      options={Option}
      value={Option?.find((option) => option.label === studentForm?.classTypeName) || ''}
      isClearable={true}
      onChange={handleClass}
      isDisabled={studentForm?.className ? false : true}
      placeholder="MTs-01-1A"
    />
  );
};

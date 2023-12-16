'use client';
import Select from 'react-select';
import useData from '../../store/store.absensi';
import { useEffect } from 'react';
import useViewModel from '../../vm/view.model';

export const DropdownFilterClass = () => {
  const { getLevelById, detailLevel } = useViewModel();
  const [form, setForm] = useData();
  const classes = detailLevel?.data?.class;

  useEffect(() => {
    fetchData(form?.level_id);
  }, [form?.level_id]);

  const fetchData = async (id: string) => {
    await getLevelById(id);
  };

  // Check if datas is an array before using map
  const Option = Array.isArray(classes)
    ? classes.map((obj: { name: string; id: string }) => ({
        value: obj?.id,
        label: obj?.name,
      }))
    : [];

  const handleClass = (option: any) => {
    console.log(option);

    setForm({
      ...form,
      className_id: option?.value,
      className: option?.label,
    });
  };

  return (
    <Select
      closeMenuOnSelect={true}
      options={Option}
      value={Option?.find((option) => option.label === form?.className) || ''}
      isClearable={true}
      onChange={handleClass}
      isDisabled={form?.levelName ? false : true}
      placeholder="MTs-1"
    />
  );
};

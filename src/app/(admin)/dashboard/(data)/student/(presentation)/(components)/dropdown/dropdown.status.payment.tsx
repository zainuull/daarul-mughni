'use client';
import Select from 'react-select';
import useDataStudent from '../../store/store.student';

export const DropdownStatusPayment = () => {
  const [data, setData] = useDataStudent();

  const statusPaymentOption = [
    { value: 'Lunas', label: 'Lunas' },
    { value: 'Pending', label: 'Pending' },
  ];

  const handleStatusPayment = (option: any) => {
    setData({
      ...data,
      status_payment: option?.label,
    });
  };

  return (
    <Select
      closeMenuOnSelect={true}
      options={statusPaymentOption}
      value={statusPaymentOption.find((option) => option.label === data?.status_payment) || ''}
      isClearable={true}
      onChange={handleStatusPayment}
      placeholder="Status Pembayaran"
    />
  );
};

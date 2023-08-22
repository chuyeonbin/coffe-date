import { toast } from 'react-toastify';
import { SubmitHandler } from 'react-hook-form';
import DefaultLayout from '../../components/layouts/DefaultLayout';
import LogForm, { LogFormInputs } from '../../components/LogForm';
import LogDatePicker from '../../components/LogDatePicker';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { currentDateState } from '../../store/date';
import { useMutation } from '@tanstack/react-query';
import { addLogAPI } from '../../api/log';
import { useNavigate } from 'react-router-dom';

export default function LogPage() {
  const navigate = useNavigate();
  const currentDate = useRecoilValue(currentDateState);
  const [logDate, setLogDate] = useState<Date | number>(currentDate);
  const { mutateAsync } = useMutation(
    (payload: { price: number; cafe: string; coffee: string; date: string }) => addLogAPI(payload),
  );

  const handleChangeLogDate = (date: Date | number) => {
    setLogDate(date);
  };

  const handleSubmit: SubmitHandler<LogFormInputs> = (data) => {
    const { cafe, coffee } = data;
    const price = parseInt(data.price.replace(/,/g, ''));
    const date = JSON.stringify(logDate);
    mutateAsync({ price, cafe, coffee, date })
      .then(() => {
        toast.success('커피를 기록을 성공 했습니다!');
        navigate('/');
      })
      .catch(() => {
        toast.error('커피 기록을 실패 했습니다!');
      });
  };

  return (
    <DefaultLayout>
      <LogDatePicker onChangeLogDate={handleChangeLogDate} />
      <LogForm onSubmit={handleSubmit} />
    </DefaultLayout>
  );
}

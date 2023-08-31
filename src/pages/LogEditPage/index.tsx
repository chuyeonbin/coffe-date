import { useEffect, useState } from 'react';
import styled from 'styled-components';
import DefaultLayout from '../../components/layouts/DefaultLayout';
import LogDatePicker from '../../components/LogDatePicker';
import LogForm, { LogFormInputs } from '../../components/LogForm';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { logsState } from '../../store/logs';
import { parseISO } from 'date-fns';
import { SubmitHandler } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { editLogAPI } from '../../api/log';
import { toast } from 'react-toastify';

export default function LogEditPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const logs = useRecoilValue(logsState);
  const [logDate, setLogDate] = useState<Date | number>(new Date());
  const { mutateAsync } = useMutation(
    (payload: { id: number; price: number; cafe: string; coffee: string; date: string }) =>
      editLogAPI(payload),
  );

  if (!id) {
    return <div>없는 페이지</div>;
  }

  const log = logs.find((log) => log.id === parseInt(id));

  if (!log) {
    return <div>없는 페이지</div>;
  }

  const handleChangeLogDate = (date: Date | number) => {
    setLogDate(date);
  };

  const handleSubmit: SubmitHandler<LogFormInputs> = async (data) => {
    const { cafe, coffee } = data;
    const price = parseInt(data.price.replace(/,/g, ''));
    const date = JSON.stringify(logDate);
    try {
      await mutateAsync({ id: parseInt(id), price, cafe, coffee, date });
      toast.success('수정에 성공 했습니다!');
      navigate('/');
    } catch (error) {
      toast.error('수정에 실패 했습니다!');
    }
  };

  useEffect(() => {
    setLogDate(parseISO(log.date));
  }, [log]);

  return (
    <DefaultLayout>
      <LogDatePicker defaultDate={logDate} onChangeLogDate={handleChangeLogDate} />
      <LogForm
        defaultPrice={log.price.toString()}
        defaultCafe={log.cafe}
        defaultCoffee={log.coffee}
        isEdit
        onSubmit={handleSubmit}
      />
    </DefaultLayout>
  );
}

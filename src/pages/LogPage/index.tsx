import { SubmitHandler } from 'react-hook-form';
import DefaultLayout from '../../components/layouts/DefaultLayout';
import LogForm, { LogFormInputs } from '../../components/LogForm';
import LogDatePicker from '../../components/LogDatePicker';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { currentDateState } from '../../store/date';

export default function LogPage() {
  const currentDate = useRecoilValue(currentDateState);
  const [logDate, setLogDate] = useState<Date | number>(currentDate);

  const handleChangeLogDate = (date: Date | number) => {
    setLogDate(date);
  };

  const handleSubmit: SubmitHandler<LogFormInputs> = (data) => {
    console.log(data, logDate);
  };

  useEffect(() => {
    console.log(logDate);
  }, [logDate]);

  return (
    <DefaultLayout>
      <LogDatePicker onChangeLogDate={handleChangeLogDate} />
      <LogForm onSubmit={handleSubmit} />
    </DefaultLayout>
  );
}

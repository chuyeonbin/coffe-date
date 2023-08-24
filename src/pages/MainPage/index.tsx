import { useEffect } from 'react';
import DefaultLayout from '../../components/layouts/DefaultLayout';
import Calendar from '../../components/Calendar';
import { useQuery } from '@tanstack/react-query';
import { getLogsAPI } from '../../api/log';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { currentDateState } from '../../store/date';
import { format } from 'date-fns';
import { logsState } from '../../store/logs';

export default function MainPage() {
  const currnentDate = useRecoilValue(currentDateState);
  const setLogs = useSetRecoilState(logsState);
  const currnentDateFormmat = format(currnentDate, 'yyyy-MM-dd');
  const { data, refetch } = useQuery(['logs'], () => getLogsAPI(currnentDateFormmat));

  useEffect(() => {
    refetch();
  }, [currnentDate]);

  useEffect(() => {
    if (data) {
      setLogs(data.logs);
    }
  }, [data]);

  return (
    <DefaultLayout>
      <Calendar />
    </DefaultLayout>
  );
}

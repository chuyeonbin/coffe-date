import styled from 'styled-components';
import ko from 'date-fns/locale/ko';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { renderTimeViewClock } from '@mui/x-date-pickers/timeViewRenderers';
import { useRecoilValue } from 'recoil';
import { currentDateState } from '../../store/date';
import { sub } from 'date-fns';

interface LogDatePickerProps {
  onChangeLogDate: (date: Date | number) => void;
}

export default function LogDatePicker({ onChangeLogDate }: LogDatePickerProps) {
  const currentDate = useRecoilValue(currentDateState);
  return (
    <St.Container>
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ko}>
        <DateTimePicker
          label='소비 일시'
          value={currentDate}
          onChange={(logDate) => logDate && onChangeLogDate(logDate)}
          maxDate={currentDate}
          minDate={sub(currentDate, { years: 5 })}
          viewRenderers={{
            hours: renderTimeViewClock,
            minutes: renderTimeViewClock,
            seconds: renderTimeViewClock,
          }}
        />
      </LocalizationProvider>
    </St.Container>
  );
}

const St = {
  Container: styled.div`
    margin-bottom: 24px;
  `,
};

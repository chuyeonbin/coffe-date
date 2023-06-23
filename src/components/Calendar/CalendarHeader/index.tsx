import { useState } from 'react';
import styled from 'styled-components';
import SelectCalendar from './SelectCalendar';

export default function CalendarHeader() {
  const [options, setOptions] = useState(['2023년 6월', '2023년 5월', '2023년 4월', '2023년 3월']);

  return (
    <St.Container>
      <SelectCalendar options={options} defaultOption='2023년 6월' />
    </St.Container>
  );
}

const St = {
  Container: styled.div``,
};

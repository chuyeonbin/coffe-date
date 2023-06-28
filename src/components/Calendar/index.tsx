import styled from 'styled-components';
import CalendarHeader from './CalendarHeader';
import CalendarBody from './CalendarBody';

export default function Calendar() {
  return (
    <St.Container>
      <CalendarHeader />
      <CalendarBody />
    </St.Container>
  );
}

const St = {
  Container: styled.div``,
};

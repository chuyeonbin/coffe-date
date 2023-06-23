import styled from 'styled-components';
import CalendarHeader from './CalendarHeader';

export default function Calendar() {
  return (
    <St.Container>
      <CalendarHeader />
    </St.Container>
  );
}

const St = {
  Container: styled.div``,
};

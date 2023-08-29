import { styled } from 'styled-components';
import CoffeeDetail from '../CoffeeDetail';
import { useRecoilValue } from 'recoil';
import { groupedByDateLogsState, sortedDatesState } from '../../../../store/logs';
import { parseISO } from 'date-fns';
import { DAYS } from '../../../../utils/constant';

export default function CoffeeDetails() {
  const groupedByDateLogs = useRecoilValue(groupedByDateLogsState);
  const sortedDates = useRecoilValue(sortedDatesState);

  return (
    <St.Container>
      {sortedDates.map((sortedDate) => (
        <St.DateContainer key={sortedDate}>
          <St.DateFormat>
            {sortedDate.slice(-2)}일 {DAYS[parseISO(sortedDate).getDay()]}요일
          </St.DateFormat>
          {groupedByDateLogs[sortedDate].map((log) => (
            <CoffeeDetail key={log.id} log={log} />
          ))}
        </St.DateContainer>
      ))}
    </St.Container>
  );
}

const St = {
  Container: styled.div`
    min-height: 200px;
  `,
  DateContainer: styled.div`
    margin-bottom: 2rem;
  `,
  DateFormat: styled.p`
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.text1};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
  `,
};

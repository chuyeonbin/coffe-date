import styled from 'styled-components';
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  format,
  isSameMonth,
} from 'date-fns';
import { useRecoilValue } from 'recoil';
import { dateState } from '../../../../../store/date';

export default function DaysRender() {
  const { currentDate } = useRecoilValue(dateState);
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const rows = [];
  let days = [];
  let day = startDate;

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      const formatDate = isSameMonth(day, monthStart) ? format(day, 'd') : null;
      const formatPrice = isSameMonth(day, monthStart) ? '200,000' : null;
      const formatCoffee = isSameMonth(day, monthStart) ? '☕️' : null;

      days.push(
        <St.Td key={day.getTime()}>
          <St.Day>{formatDate}</St.Day>
          <St.Price>{formatPrice}</St.Price>
          <St.Coffee>{formatCoffee}</St.Coffee>
        </St.Td>,
      );

      day = addDays(day, 1);
    }
    rows.push(<St.Tr key={day.getTime()}>{days}</St.Tr>);
    days = [];
  }

  return <>{rows}</>;
}

const St = {
  Tr: styled.tr`
    height: 100px;
    line-height: 33px;
  `,

  Td: styled.td`
    padding-top: 1rem;
    width: 14%;
    text-align: center;
  `,

  Item: styled.div``,

  Day: styled.span`
    font-size: ${({ theme }) => theme.fontSizes.lg};
    cursor: pointer;
  `,

  Price: styled.div`
    font-size: ${({ theme }) => theme.fontSizes.xs};
  `,

  Coffee: styled.div`
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-family: TossFace;
    white-space: wrap;
  `,
};

import styled from 'styled-components';
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  format,
  isSameMonth,
  isSameYear,
  isSameDay,
} from 'date-fns';
import { useRecoilState, useRecoilValue } from 'recoil';
import { currentDateState, selectedDateState } from '../../../../../store/date';
import { useEffect, useState } from 'react';
import { LogsState } from '../../../../../store/logs';
import { dayByCoffeeSum, dayByPriceSum } from '../../../../../utils/logs';

export default function DaysRender() {
  const logs = useRecoilValue(LogsState);
  const currentDate = useRecoilValue(currentDateState);
  const [selectedDate, setSelectedDate] = useRecoilState(selectedDateState);
  const [isSelectedDay, setIsSelectedDay] = useState(false);
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const rows = [];
  let days = [];
  let day = startDate;

  const handleDayClick = (date: Date) => () => {
    if (
      isSameYear(selectedDate, date) &&
      isSameMonth(selectedDate, date) &&
      isSameDay(selectedDate, date)
    ) {
      setIsSelectedDay(!isSelectedDay);
    } else {
      setSelectedDate(date);
      setIsSelectedDay(true);
    }
  };

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      const formatDate = isSameMonth(day, monthStart) ? format(day, 'd') : null;
      const formatPrice = isSameMonth(day, monthStart) ? dayByPriceSum(logs, day) : null;
      const formatCoffee = isSameMonth(day, monthStart) ? dayByCoffeeSum(logs, day) : null;

      const isSelected =
        isSameYear(selectedDate, day) &&
        isSameMonth(selectedDate, day) &&
        isSameDay(selectedDate, day);

      days.push(
        <St.Td key={day.getTime()}>
          <St.DayContainer>
            <St.Day onClick={handleDayClick(day)} selected={isSelectedDay && isSelected ? 1 : 0}>
              {formatDate}
            </St.Day>
          </St.DayContainer>
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

  DayContainer: styled.div`
    display: flex;
    justify-content: center;
    font-size: ${({ theme }) => theme.fontSizes.lg};
  `,

  Day: styled.div<{ selected: number }>`
    width: 33px;
    border-radius: 50%;
    background-color: ${({ theme, selected }) =>
      selected ? theme.colors.bgElement4 : theme.colors.bgElement3};
    color: ${({ theme, selected }) => (selected ? theme.colors.text3 : 'inherit')};
    cursor: pointer;
  `,

  Price: styled.div`
    font-size: ${({ theme }) => theme.fontSizes.xs};
    color: ${({ theme }) => theme.colors.primary2};
  `,

  Coffee: styled.div`
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-family: TossFace;
    white-space: wrap;
  `,
};

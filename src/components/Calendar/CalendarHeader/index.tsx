import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SelectOption from '../../SelectOption';
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io';
import { monthOf5YearDates } from '../../../utils/calendar';
import CalendarLayout from '../../layouts/CalendarLayout';
import { useRecoilState, useRecoilValue } from 'recoil';
import { currentDateState } from '../../../store/date';
import { format, subMonths, getYear, getMonth } from 'date-fns';
import { logsState } from '../../../store/logs';

export default function CalendarHeader() {
  const logs = useRecoilValue(logsState);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalCoffee, setTotalCoffee] = useState(0);

  const options = monthOf5YearDates().map((date) => ({
    key: date.getTime(),
    value: format(date, 'yyyy년 MM월'),
  }));
  const [currentDate, setCurrentDate] = useRecoilState(currentDateState);
  const [selectedOption, setSelectedOption] = useState(options[0].value);

  const prevMonth = () => {
    const prevDate = subMonths(currentDate, 1);
    if (
      getYear(prevDate) === getYear(new Date()) - 5 &&
      getMonth(prevDate) < getMonth(new Date())
    ) {
      return;
    }
    setCurrentDate(prevDate);
    setSelectedOption(format(prevDate, 'yyyy년 MM월'));
  };

  const nextMonth = () => {
    const nextDate = subMonths(currentDate, -1);
    if (getYear(nextDate) === getYear(new Date()) && getMonth(nextDate) > getMonth(new Date()))
      return;
    setCurrentDate(nextDate);
    setSelectedOption(format(nextDate, 'yyyy년 MM월'));
  };

  const handleChangeSelectOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const index = options.findIndex((option) => option.value === e.target.value);
    const date = new Date(options[index].key);
    setCurrentDate(date);
    setSelectedOption(e.target.value);
  };

  useEffect(() => {
    setTotalPrice(logs.reduce((prev, curr) => prev + curr.price, 0));
    setTotalCoffee(logs.length);
  }, [logs]);

  return (
    <CalendarLayout>
      <St.CalendarContainer>
        <PrevButton onClick={prevMonth}>
          <IoMdArrowDropleft size={24} />
        </PrevButton>
        <SelectOption
          options={options}
          defaultValue={selectedOption}
          onChange={handleChangeSelectOption}
        />
        <NextButton onClick={nextMonth}>
          <IoMdArrowDropright size={24} />
        </NextButton>
      </St.CalendarContainer>
      <St.TotalContainer>
        <St.TotalPrice>{totalPrice.toLocaleString()}원</St.TotalPrice>
        <St.TotalCupContainer>
          <St.TotalCupDescription>
            이번달은 총 <span>{totalCoffee}잔</span> 마셨어요.
          </St.TotalCupDescription>
          <St.TotalCup>{'☕️'.repeat(totalCoffee)}</St.TotalCup>
        </St.TotalCupContainer>
      </St.TotalContainer>
    </CalendarLayout>
  );
}

const St = {
  CalendarContainer: styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 2rem;
  `,

  TotalContainer: styled.div`
    color: ${({ theme }) => theme.colors.text2};
  `,

  TotalCupContainer: styled.div``,

  Button: styled.button`
    color: ${({ theme }) => theme.colors.text1};
  `,

  TotalPrice: styled.h2`
    margin-bottom: 2rem;
    font-size: ${({ theme }) => theme.fontSizes.xxx1};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
  `,

  TotalCupDescription: styled.p`
    margin-bottom: 1.5rem;
    font-size: ${({ theme }) => theme.fontSizes.lg};
    & > span {
      font-weight: ${({ theme }) => theme.fontWeights.regular};
      text-decoration: underline;
      color: ${({ theme }) => theme.colors.primary2};
    }
  `,
  TotalCup: styled.p`
    font-size: ${({ theme }) => theme.fontSizes.xxl};
    max-width: 450px;
    font-family: Tossface;
    letter-spacing: 18px;
    line-height: 25px;
  `,
};

const PrevButton = styled(St.Button)``;

const NextButton = styled(St.Button)``;

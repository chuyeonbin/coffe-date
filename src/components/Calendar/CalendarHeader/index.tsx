import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SelectOption from '../../SelectOption';
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io';
import { monthOf5YearDates } from '../../../utils/calendar';
import CalendarLayout from '../../layouts/CalendarLayout/CalendarLayout';
import { useRecoilState } from 'recoil';
import { dateState } from '../../../store/date';
import { format, subMonths, getYear, getMonth } from 'date-fns';

export default function CalendarHeader() {
  const options = monthOf5YearDates().map((date) => ({
    key: date.getTime(),
    value: format(date, 'yyyy년 MM월'),
  }));
  const [currentDate, setCurrentDate] = useRecoilState(dateState);
  const [selectedDate, setSelectedDate] = useState(options[0].value);

  const prevMonth = () => {
    const prevDate = subMonths(currentDate, 1);
    if (
      getYear(prevDate) === getYear(new Date()) - 5 &&
      getMonth(prevDate) < getMonth(new Date())
    ) {
      return;
    }
    setCurrentDate(prevDate);
    setSelectedDate(format(prevDate, 'yyyy년 MM월'));
  };

  const nextMonth = () => {
    const nextDate = subMonths(currentDate, -1);
    if (getYear(nextDate) === getYear(new Date()) && getMonth(nextDate) > getMonth(new Date())) {
      console.log('test');
      return;
    }
    setCurrentDate(nextDate);
    setSelectedDate(format(nextDate, 'yyyy년 MM월'));
  };

  const handleChangeSelectOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const index = options.findIndex((option) => option.value === e.target.value);
    const date = new Date(options[index].key);
    setCurrentDate(date);
    setSelectedDate(e.target.value);
  };

  return (
    <CalendarLayout>
      <St.CalendarContainer>
        <PrevButton onClick={prevMonth}>
          <IoMdArrowDropleft size={24} />
        </PrevButton>
        <SelectOption
          options={options}
          defaultValue={selectedDate}
          onChange={handleChangeSelectOption}
        />
        <NextButton onClick={nextMonth}>
          <IoMdArrowDropright size={24} />
        </NextButton>
      </St.CalendarContainer>
      <St.TotalContainer>
        <St.TotalPrice>122,400원</St.TotalPrice>
        <St.TotalCupContainer>
          <St.TotalCupDescription>
            이번달은 총 <span>22잔</span> 마셨어요.
          </St.TotalCupDescription>
          <St.TotalCup>
            ☕️☕️☕️☕️☕️☕️☕️☕️☕️☕️☕️☕️☕️☕️☕️☕️☕️☕️☕️☕️☕️☕️
          </St.TotalCup>
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

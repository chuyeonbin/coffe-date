import { useState } from 'react';
import styled from 'styled-components';
import SelectCalendar from './SelectCalendar';
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io';
import { monthOf5YearFormat } from '../../../utils/calendar';
import CalendarLayout from '../../layouts/CalendarLayout/CalendarLayout';
import { useRecoilState } from 'recoil';
import { dateState } from '../../../store/date';
import { subMonths } from 'date-fns';

export default function CalendarHeader() {
  const dates = monthOf5YearFormat();
  const [options, setOptions] = useState(dates);
  const [currentDate, setCurrentDate] = useRecoilState(dateState);

  const prevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  const nextMonth = () => {
    setCurrentDate(subMonths(currentDate, -1));
  };

  return (
    <CalendarLayout>
      <St.CalendarContainer>
        <PrevButton onClick={prevMonth}>
          <IoMdArrowDropleft size={24} />
        </PrevButton>
        {options && <SelectCalendar options={options} defaultOption={options[0]} />}
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

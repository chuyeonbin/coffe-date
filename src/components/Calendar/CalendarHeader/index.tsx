import { useState } from 'react';
import styled from 'styled-components';
import SelectCalendar from './SelectCalendar';
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io';
import { monthOf5YearFormat } from '../../../utils/calendar';

export default function CalendarHeader() {
  const dates = monthOf5YearFormat();
  const [options, setOptions] = useState(dates);

  return (
    <St.Container>
      <St.CalendarContainer>
        <PrevButton>
          <IoMdArrowDropleft size={24} />
        </PrevButton>
        {options && <SelectCalendar options={options} defaultOption={options[0]} />}
        <NextButton>
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
    </St.Container>
  );
}

const St = {
  Container: styled.div`
    padding: 16px;
    background-color: ${({ theme }) => theme.colors.bgElement1};
    border-radius: 12px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border1};
  `,

  CalendarContainer: styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 12px;
  `,

  TotalContainer: styled.div`
    color: ${({ theme }) => theme.colors.text2};
  `,

  TotalCupContainer: styled.div``,

  Button: styled.button`
    color: ${({ theme }) => theme.colors.text1};
  `,

  TotalPrice: styled.h2`
    margin-bottom: 12px;
    font-size: ${({ theme }) => theme.fontSizes.xxx1};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
  `,

  TotalCupDescription: styled.p`
    margin-bottom: 12px;
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

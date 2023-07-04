import styled from 'styled-components';
import { DAYS } from '../../../../utils/constant';
import { format } from 'date-fns';

interface CoffeDetailProps {
  date: Date;
  historys: { amount: number; cafe: string; coffee: string }[];
}

export default function CoffeeDetail() {
  const historys = [
    { amount: -3000, cafe: '빽다방산본사거리점', coffee: '빽사이즈아메리카노' },
    { amount: -2500, cafe: '빽다방산본역점', coffee: '아메리카노샷추가' },
    { amount: -3000, cafe: '빽다방당정역은하점', coffee: '빽사이즈아메리카노' },
  ];
  const dayOfWeek = DAYS[new Date().getDay()];

  return (
    <St.Container>
      <St.DateFormat>
        {format(new Date(), 'd')}일 {dayOfWeek}요일
      </St.DateFormat>
      {historys.map((history, index) => (
        <St.History key={index}>
          <St.CoffeeImageContainer>
            <St.CoffeeImage
              src={process.env.PUBLIC_URL + '/coffee_detail.svg'}
              alt='coffee_image'
            />
          </St.CoffeeImageContainer>
          <St.CoffeeContainer>
            <St.Amount>{history.amount}원</St.Amount>
            <St.CafeInfo>
              {history.cafe} | {history.coffee}
            </St.CafeInfo>
          </St.CoffeeContainer>
        </St.History>
      ))}
    </St.Container>
  );
}

const St = {
  Container: styled.div``,
  DateFormat: styled.p`
    margin-bottom: 2rem;
    color: ${({ theme }) => theme.colors.text1};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
  `,

  History: styled.div`
    margin-bottom: 1rem;
    padding: 1rem;
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.bgElement5};
    border-radius: 8px;
  `,

  CoffeeImageContainer: styled.div`
    margin-right: 1rem;
    width: 45px;
    height: 45px;
    border-radius: 50%;
  `,

  CoffeeImage: styled.img`
    width: 100%;
    height: 100%;
  `,

  CoffeeContainer: styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: ${({ theme }) => theme.colors.text1};
  `,

  Amount: styled.p`
    margin-bottom: 8px;
    font-size: ${({ theme }) => theme.fontSizes.lg};
    color: ${({ theme }) => theme.colors.primary2};
  `,

  CafeInfo: styled.p`
    font-size: ${({ theme }) => theme.fontSizes.sm};
  `,
};

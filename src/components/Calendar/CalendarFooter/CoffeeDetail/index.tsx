import styled from 'styled-components';
import { LogType } from '../../../../store/logs';

interface CoffeeDetailProps {
  log: LogType;
}

export default function CoffeeDetail({ log }: CoffeeDetailProps) {
  return (
    <St.Container>
      <St.Log>
        <St.CoffeeImageContainer>
          <St.CoffeeImage src={process.env.PUBLIC_URL + '/coffee_detail.svg'} alt='coffee_image' />
        </St.CoffeeImageContainer>
        <St.CoffeeContainer>
          <St.Price>{log.price.toLocaleString()}원</St.Price>
          <St.CafeInfo>
            {log.cafe} | {log.coffee}
          </St.CafeInfo>
        </St.CoffeeContainer>
      </St.Log>
    </St.Container>
  );
}

const St = {
  Container: styled.div``,

  Log: styled.div`
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

  Price: styled.p`
    margin-bottom: 8px;
    font-size: ${({ theme }) => theme.fontSizes.lg};
    color: ${({ theme }) => theme.colors.primary2};
  `,

  CafeInfo: styled.p`
    font-size: ${({ theme }) => theme.fontSizes.sm};
  `,
};

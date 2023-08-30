import styled from 'styled-components';
import { LogType } from '../../../../store/logs';
import { useNavigate } from 'react-router-dom';

interface CoffeeDetailProps {
  log: LogType;
}

export default function CoffeeDetail({ log }: CoffeeDetailProps) {
  const navigate = useNavigate();

  const goToEditPage = () => {
    navigate(`log-edit/${log.id}`);
  };

  return (
    <St.Container>
      <St.CoffeeImageContainer>
        <St.CoffeeImage src={process.env.PUBLIC_URL + '/coffee_detail.svg'} alt='coffee_image' />
      </St.CoffeeImageContainer>
      <St.CoffeeContainer>
        <St.Price>{log.price.toLocaleString()}원</St.Price>
        <St.CafeInfo>
          {log.cafe} | {log.coffee}
        </St.CafeInfo>
      </St.CoffeeContainer>
      <St.ButtonContainer>
        <EditButton onClick={goToEditPage}>수정</EditButton>
        <pre> | </pre>
        <RemoveButton>삭제</RemoveButton>
      </St.ButtonContainer>
    </St.Container>
  );
}

const St = {
  Container: styled.div`
    margin-bottom: 1rem;
    padding: 1rem;
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.bgElement5};
    border-radius: 8px;

    &:hover {
      transform: scale(1.02);
    }
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

  ButtonContainer: styled.div`
    display: flex;
    color: ${({ theme }) => theme.colors.text1};
  `,

  Button: styled.button`
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: inherit;

    &:hover {
      text-decoration: underline;
    }
  `,
};

const EditButton = styled(St.Button)``;

const RemoveButton = styled(St.Button)`
  &:hover {
    color: red;
  }
`;

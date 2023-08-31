import { useState } from 'react';
import styled from 'styled-components';
import { LogType, logsState } from '../../../../store/logs';
import { useNavigate } from 'react-router-dom';
import RemoveAlertDialog from '../../../RemoveAlertDialog';
import { useMutation } from '@tanstack/react-query';
import { deleteLogAPI } from '../../../../api/log';
import { toast } from 'react-toastify';
import { useSetRecoilState } from 'recoil';

interface CoffeeDetailProps {
  log: LogType;
}

export default function CoffeeDetail({ log }: CoffeeDetailProps) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const setLogsState = useSetRecoilState(logsState);
  const { mutateAsync } = useMutation((id: number) => deleteLogAPI(id));

  const goToEditPage = () => {
    navigate(`log-edit/${log.id}`);
  };
  const handleClickOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(!isOpen);
  };

  const handleRemove = async () => {
    try {
      const data = await mutateAsync(log.id);
      setLogsState((prevLogs) => prevLogs.filter((log) => log.id !== data.id));
      navigate('/');
      toast.success('기록 삭제를 성공했습니다!');
    } catch (error) {
      toast.error('기록 삭제를 실패했습니다!');
    } finally {
      setIsOpen(!isOpen);
    }
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
        <RemoveButton onClick={handleClickOpen}>삭제</RemoveButton>
      </St.ButtonContainer>
      {isOpen && (
        <RemoveAlertDialog isOpen={isOpen} onClose={handleClose} onRemove={handleRemove} />
      )}
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

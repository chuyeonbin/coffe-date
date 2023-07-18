import styled from 'styled-components';
import ModalLeft from '../ModalLeft';
import RegisterForm, { FormInputs } from '../RegisterForm';
import { SubmitHandler } from 'react-hook-form';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { userState } from '../../store/user';
import { useMutation } from '@tanstack/react-query';
import { duplicationCheckAPI, signUpAPI } from '../../api/auth';
import { useNavigate } from 'react-router-dom';

interface RegistermodalProps {
  registerEmail: string;
}

export default function RegisterModal({ registerEmail }: RegistermodalProps) {
  const navigate = useNavigate();
  const [duplicateMessage, setDuplicateMessage] = useState('');
  const [isUsableNickname, setIsUsableNickname] = useState(false);
  const setUser = useSetRecoilState(userState);
  const { mutate: duplicationCheckMutate } = useMutation((nickname: string) =>
    duplicationCheckAPI({ nickname }),
  );

  const { mutate: registerMutate } = useMutation((nickname: string) =>
    signUpAPI({ email: registerEmail, nickname }),
  );

  const handleSubmit: SubmitHandler<FormInputs> = (data) => {
    registerMutate(data.nickname, {
      onSuccess: (data) => {
        if (!data) return;

        const { email, nickname } = data.user;

        setUser({ email, nickname, thumbnail: '' });
        navigate('/');
      },
    });
  };

  const duplicationCheck = (nickname: string) => {
    if (!isUsableNickname) {
      duplicationCheckMutate(nickname, {
        onSuccess: (data) => {
          data.checked
            ? setDuplicateMessage('사용 가능한 닉네임 입니다.')
            : setDuplicateMessage('이미 사용중인 닉네임 입니다.');
          setIsUsableNickname(true);
        },
      });
    }
  };

  const switchDuplication = () => {
    setIsUsableNickname(false);
  };

  return (
    <St.Container>
      <ModalLeft />
      <St.Right>
        <St.RegisterText>회원등록</St.RegisterText>
        <RegisterForm
          duplicateMessage={duplicateMessage}
          onSubmit={handleSubmit}
          usableNickname={isUsableNickname}
          duplicationCheck={duplicationCheck}
          switchDuplication={switchDuplication}
        />
      </St.Right>
    </St.Container>
  );
}

const St = {
  Container: styled.div`
    display: flex;
    width: 600px;
    height: 530px;
    background-color: ${({ theme }) => theme.colors.bgElement1};
    border-radius: 8px;
    box-shadow: ${({ theme }) => theme.colors.elementShadow};
  `,

  Right: styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 24px;
    width: 60%;
  `,

  RegisterText: styled.h2`
    margin-bottom: 24px;
    font-size: ${({ theme }) => theme.fontSizes.xxx1};
    color: ${({ theme }) => theme.colors.text2};
  `,
};

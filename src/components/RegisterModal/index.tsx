import styled from 'styled-components';
import ModalLeft from '../ModalLeft';
import RegisterForm, { FormInputs } from '../RegisterForm';
import { SubmitHandler } from 'react-hook-form';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { userState } from '../../store/user';
import { useMutation } from '@tanstack/react-query';
import { duplicationCheckAPI } from '../../api/auth';

export default function RegisterModal() {
  const [duplicateMessage, setDuplicateMessage] = useState('');
  const [isUsableNickname, setIsUsableNickname] = useState(false);
  const setUser = useSetRecoilState(userState);
  const { mutate } = useMutation((nickname: string) => duplicationCheckAPI({ nickname }));

  const handleSubmit: SubmitHandler<FormInputs> = (data) => {
    setUser({ email: 'cndusqls98', nickname: data.nickname, thumbnail: '' });
  };

  const duplicationCheck = (nickname: string) => {
    if (!isUsableNickname) {
      mutate(nickname, {
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

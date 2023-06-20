import styled from 'styled-components';
import ModalLeft from '../ModalLeft';
import RegisterForm, { FormInputs } from '../RegisterForm';
import { SubmitHandler } from 'react-hook-form';
import { MouseEvent, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { userState } from '../../store/user';

export default function RegisterModal() {
  const [isUsableNickname, setIsUsableNickname] = useState(false);
  const setUser = useSetRecoilState(userState);

  const handleSubmit: SubmitHandler<FormInputs> = (data) => {
    setUser({ email: 'cndusqls98', nickname: data.nickname, thumbnail: '' });
  };

  const duplicationCheck = (e: MouseEvent<HTMLButtonElement>) => {
    setIsUsableNickname(true);
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

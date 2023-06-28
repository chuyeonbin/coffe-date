import { MouseEvent } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import styled from 'styled-components';

export interface FormInputs {
  nickname: string;
}

interface RegisterFormProps {
  usableNickname: boolean;
  duplicationCheck: (e: MouseEvent<HTMLButtonElement>) => void;
  switchDuplication: () => void;
  onSubmit: SubmitHandler<FormInputs>;
}

export default function RegisterForm({
  usableNickname,
  duplicationCheck,
  switchDuplication,
  onSubmit,
}: RegisterFormProps) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormInputs>();

  return (
    <>
      <St.Form onSubmit={handleSubmit(onSubmit)}>
        <St.NicknameInput
          type='text'
          placeholder='닉네임을 입력해주세요.'
          {...register('nickname', {
            onChange: () => {
              switchDuplication();
            },
            validate: (value) => {
              if (value.length < 3 || value.length > 20) {
                switchDuplication();
                return '3~20 이내 닉네임을 정해주세요.';
              }

              if (!usableNickname) {
                return '중복체크를 해주세요.';
              }
            },
          })}
        />
        <DuplicationCheckButton type='button' onClick={duplicationCheck}>
          중복체크
        </DuplicationCheckButton>
        <SubmitButton type='submit'>등록하기</SubmitButton>
      </St.Form>
      {errors.nickname && errors.nickname.type === 'validate' && !usableNickname && (
        <St.FailMessage>{errors.nickname.message}</St.FailMessage>
      )}
      {usableNickname && <St.SuccessMessage>사용 가능한 닉네임 입니다!</St.SuccessMessage>}
    </>
  );
}

const St = {
  Form: styled.form`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  `,

  NicknameInput: styled.input`
    flex-grow: 1;
    margin-right: 8px;
    padding: 16px;
    background-color: ${({ theme }) => theme.colors.bgElement2};
    font-size: ${({ theme }) => theme.fontSizes.md};
    color: ${({ theme }) => theme.colors.text2};
    border: 1px solid ${({ theme }) => theme.colors.border1};
    border-radius: 8px;

    &:focus {
      outline: none;
      border: 1px solid ${({ theme }) => theme.colors.border2};
    }
  `,

  Button: styled.button`
    padding: 16px 12px;
    background-color: ${({ theme }) => theme.colors.button1};
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    color: ${({ theme }) => theme.colors.buttonText};
    border-radius: 8px;

    &:hover {
      background-color: ${({ theme }) => theme.colors.button2};
    }
  `,

  FailMessage: styled.p`
    align-self: flex-start;
    margin-top: 8px;
    color: red;
  `,

  SuccessMessage: styled.p`
    align-self: flex-start;
    margin-top: 8px;
    color: blue;
  `,
};

const DuplicationCheckButton = styled(St.Button)``;

const SubmitButton = styled(St.Button)`
  position: absolute;
  bottom: 24px;
  right: 24px;
`;

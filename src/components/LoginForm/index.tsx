import { SubmitHandler, useForm } from 'react-hook-form';
import { styled } from 'styled-components';
import { regex } from '../../utils/regex';

interface FormInputs {
  email: string;
}

export default function LoginForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data);
  };

  return (
    <>
      <St.Form onSubmit={handleSubmit(onSubmit)}>
        <St.EmailInput
          type='text'
          placeholder='이메일을 입력하세요.'
          {...register('email', {
            required: true,
            pattern: {
              value: regex.email,
              message: '올바른 이메일 형식이 아닙니다.',
            },
          })}
        />
        <St.Button type='submit'>로그인</St.Button>
      </St.Form>
    </>
  );
}

const St = {
  Form: styled.form`
    position: relative;
    display: flex;
    width: 100%;
  `,

  EmailInput: styled.input`
    flex-grow: 1;
    padding: 16px;
    background-color: ${({ theme }) => theme.colors.bgElement2};
    font-size: ${({ theme }) => theme.fontSizes.md};
    color: ${({ theme }) => theme.colors.text2};
    border: 1px solid ${({ theme }) => theme.colors.border1};
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;

    &:focus {
      outline: none;
      border: 1px solid ${({ theme }) => theme.colors.border2};
      border-right-width: 0;
    }
  `,

  Button: styled.button`
    padding: 16px 12px;
    background-color: ${({ theme }) => theme.colors.button1};
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    color: ${({ theme }) => theme.colors.buttonText};
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;

    &:hover {
      background-color: ${({ theme }) => theme.colors.button2};
    }
  `,
};

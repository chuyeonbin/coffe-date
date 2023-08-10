import { ChangeEvent } from 'react';
import styled from 'styled-components';
import { SubmitHandler, useForm } from 'react-hook-form';

export interface LogFormInputs {
  price: string;
  cafe: string;
  coffee: string;
}

interface LogFormProps {
  onSubmit: SubmitHandler<LogFormInputs>;
}

export default function LogForm({ onSubmit }: LogFormProps) {
  const { register, handleSubmit } = useForm<LogFormInputs>();

  return (
    <St.Form>
      <St.InputBox>
        <St.Title>금액을 입력하세요.</St.Title>
        <St.Input
          type='text'
          placeholder='0원'
          {...register('price', {
            required: true,
            onChange: (e: ChangeEvent<HTMLInputElement>) => {
              const value = parseInt(e.target.value.replace(/[^0-9]/g, ''));
              if (Number.isNaN(value)) {
                e.target.value = '';
              } else {
                e.target.value = value.toLocaleString();
              }
            },
          })}
        />
      </St.InputBox>
      <St.InputBox>
        <St.Title>카페를 입력하세요.</St.Title>
        <St.Input
          type='text'
          placeholder='ex)스타벅스산본사거리'
          {...register('cafe', { required: true })}
        />
      </St.InputBox>
      <St.InputBox>
        <St.Title>커피를 입력하세요.</St.Title>
        <St.Input
          type='text'
          placeholder='ex)아메리카노'
          {...register('coffee', { required: true })}
        />
      </St.InputBox>
      <St.Button type='submit' onClick={handleSubmit(onSubmit)}>
        추가하기
      </St.Button>
    </St.Form>
  );
}

const St = {
  Form: styled.form``,

  Title: styled.p`
    color: ${({ theme }) => theme.colors.text2};
    margin-bottom: 12px;
    font-size: ${({ theme }) => theme.fontSizes.xxl};
  `,

  InputBox: styled.div`
    margin-bottom: 24px;
  `,

  Input: styled.input`
    padding: 16px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.bgElement2};
    font-size: ${({ theme }) => theme.fontSizes.md};
    color: ${({ theme }) => theme.colors.text2};
    border: 1px solid ${({ theme }) => theme.colors.border1};
    border-radius: 8px;

    &:focus {
      outline: none;
      border-color: initial;
      box-shadow: none;
    }
  `,

  Button: styled.button`
    padding: 16px 12px;
    display: block;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.button1};
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    color: ${({ theme }) => theme.colors.buttonText};
    border-radius: 8px;

    &:hover {
      background-color: ${({ theme }) => theme.colors.button2};
    }
  `,
};

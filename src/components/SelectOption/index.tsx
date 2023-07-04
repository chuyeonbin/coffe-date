import styled from 'styled-components';

interface SelectOptionProps {
  options: {
    key: number;
    value: string;
  }[];
  defaultValue: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function SelectOption({ options, defaultValue, onChange }: SelectOptionProps) {
  return (
    <St.Select key={defaultValue} onChange={onChange} defaultValue={defaultValue}>
      {options.map((option) => (
        <St.Option key={option.value} value={option.value}>
          {option.value}
        </St.Option>
      ))}
    </St.Select>
  );
}

const St = {
  Select: styled.select`
    -o-appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    font-size: ${({ theme }) => theme.fontSizes.xxl};
    background-color: transparent;
    color: ${({ theme }) => theme.colors.text2};
    border-bottom: 2px solid ${({ theme }) => theme.colors.border3};
    cursor: pointer;
  `,
  Option: styled.option``,
};

import styled from 'styled-components';

interface SelectCalendarProps {
  options: string[];
  defaultOption: string;
}

export default function SelectCalendar({ options, defaultOption }: SelectCalendarProps) {
  return (
    <St.Select defaultValue={defaultOption}>
      {options.map((option) => (
        <St.Option key={option} value={option}>
          {option}
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

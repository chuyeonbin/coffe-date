import styled from 'styled-components';
import { DAYS } from '../../../../utils/constant';
import DaysRender from './DaysRender';

export default function CalendarTable() {
  return (
    <St.Table>
      <St.Thead>
        <St.Tr>
          {DAYS.map((DAY) => (
            <St.Th key={DAY}>{DAY}</St.Th>
          ))}
        </St.Tr>
      </St.Thead>
      <St.TBody>
        <DaysRender />
      </St.TBody>
    </St.Table>
  );
}

const St = {
  Table: styled.table`
    width: 100%;
    box-sizing: border-box;
    color: ${({ theme }) => theme.colors.text1};
  `,

  Thead: styled.thead``,

  TBody: styled.tbody``,

  Th: styled.th``,

  Tr: styled.tr`
    height: 50px;
    line-height: 50px;
  `,
};

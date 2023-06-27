import { ReactNode } from 'react';
import styled from 'styled-components';

interface CalendarLayoutProps {
  children?: ReactNode;
}

export default function CalendarLayout({ children }: CalendarLayoutProps) {
  return <St.Container>{children}</St.Container>;
}

const St = {
  Container: styled.div`
    margin-bottom: 5rem;
    padding: 16px;
    background-color: ${({ theme }) => theme.colors.bgElement1};
    border-radius: 12px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border1};
  `,
};

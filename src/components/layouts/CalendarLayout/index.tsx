import { ReactNode } from 'react';
import styled from 'styled-components';
import { darkModeState } from '../../../store/darkMode';
import { useRecoilValue } from 'recoil';

interface CalendarLayoutProps {
  children?: ReactNode;
}

export default function CalendarLayout({ children }: CalendarLayoutProps) {
  const isDarkmode = useRecoilValue(darkModeState);

  return <St.Container darkmode={isDarkmode ? 1 : 0}>{children}</St.Container>;
}

const St = {
  Container: styled.div<{ darkmode: number }>`
    margin-bottom: 5rem;
    padding: 16px;
    background-color: ${({ theme }) => theme.colors.bgElement1};
    border-radius: ${({ darkmode }) => (darkmode ? '12px' : 'none')};
    border-bottom: 1px solid ${({ theme }) => theme.colors.border1};
  `,
};

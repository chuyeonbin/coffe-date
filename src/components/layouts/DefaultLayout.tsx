import styled from 'styled-components';

interface DefaultLayoutProps {
  children: JSX.Element;
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return <St.Container>{children}</St.Container>;
}

const St = {
  Container: styled.div`
    flex-grow: 1;
    margin: 0 auto;
    padding: 0 16px;
    padding-top: 10rem;
    width: 100%;
    max-width: 1024px;
  `,
};

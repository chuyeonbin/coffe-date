import styled from 'styled-components';

export default function Loading() {
  return (
    <St.Container>
      <St.Loading src={process.env.PUBLIC_URL + '/loading.gif'} alt='loading' />
    </St.Container>
  );
}

const St = {
  Container: styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  Loading: styled.img``,
};

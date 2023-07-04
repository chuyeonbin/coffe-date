import { styled } from 'styled-components';
import CoffeeDetail from '../CoffeeDetail';

// interface CoffeDetailsProps {
//   date: Date;
// }

export default function CoffeeDetails() {
  return (
    <St.Container>
      <CoffeeDetail />
    </St.Container>
  );
}

const St = {
  Container: styled.div`
    min-height: 200px;
  `,
};

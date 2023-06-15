import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

interface HeaderMenuProps {
  onClose: () => void;
  onLogOut: (e: React.MouseEvent) => void;
  isVisible: boolean;
}

export default function HeaderMenu({ onClose, onLogOut, isVisible }: HeaderMenuProps) {
  console.log(isVisible);
  if (!isVisible) return null;

  return (
    <St.Container onClick={onClose}>
      <St.HeaderMenu>
        <St.HeaderItem>
          <Link to={'my-page'}>내 정보 😀</Link>
        </St.HeaderItem>
        <St.HeaderItem>
          <Link to={'log'}>커피 기록하기 ☕️</Link>
        </St.HeaderItem>
        <St.HeaderItem>
          <Link to={'tree'}>내 커피 나무 🪵</Link>
        </St.HeaderItem>
        <St.HeaderItem>
          <Link to={'history'}>커피 소비 내역 🧾</Link>
        </St.HeaderItem>
        <St.HeaderItem>
          <Link to={'logout'} onClick={onLogOut}>
            로그아웃
          </Link>
        </St.HeaderItem>
      </St.HeaderMenu>
    </St.Container>
  );
}

const St = {
  Container: styled.div`
    position: absolute;
    top: 68px;
    right: 16px;
    z-index: 10;
    width: 200px;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0 0 4px 0 rgba(55, 31, 0, 0.1), 0 4px 16px 0 rgba(55, 31, 0, 0.1);
  `,
  HeaderMenu: styled.ul`
    line-height: 1.5;
    background-color: ${({ theme }) => theme.colors.bgElement1};
  `,
  HeaderItem: styled.li`
    color: ${({ theme }) => theme.colors.text1};
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.colors.slightLayer};
    }

    &:hover > a {
      color: ${({ theme }) => theme.colors.primary1};
    }

    & > a {
      display: inline-block;
      padding: 12px 16px;
      width: 100%;
      color: ${({ theme }) => theme.colors.text1};
      font-weight: ${({ theme }) => theme.fontWeights.regular};
    }
  `,
};

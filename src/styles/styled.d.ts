import 'styled-components';
import { FontSizesTypes } from './theme';
import { fontSizes } from './themes';

type FontSizeTypes = typeof fontSizes;

declare module 'styled-components' {
  export interface DefaultTheme {
    fontSizes: FontSizesTypes;
  }
}

import 'styled-components';
import { FontSizesTypes } from './theme';
import { fontSizes } from './themes';

declare module 'styled-components' {
  export interface DefaultTheme {
    fontSizes: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
    fontWeights: {
      extraBold: number;
      bold: number;
      semiBold: number;
      regular: number;
    };
    colors: {
      bgPage: string;
      bgElement1: string;
      bgElement2: string;
      text1: string;
      primary1: string;
      elementShadow: string;
      slightLayer: string;
    };
  }
}

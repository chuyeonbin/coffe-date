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
      border1: string;
      border2: string;
      primary1: string;
      button1: string;
      button2: string;
      buttonText: string;
      elementShadow: string;
      slightLayer: string;
    };
  }
}

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
      xxx1: string;
      xxx2: string;
    };
    fontWeights: {
      extraBold: number;
      bold: number;
      semiBold: number;
      regular: number;
      semiRegular: number;
    };
    colors: {
      bgPage: string;
      bgElement1: string;
      bgElement2: string;
      bgElement3: string;
      bgElement4: string;
      bgElement5: string;
      text1: string;
      text2: string;
      text3: strnig;
      border1: string;
      border2: string;
      border3: string;
      primary1: string;
      primary2: string;
      button1: string;
      button2: string;
      buttonText: string;
      elementShadow: string;
      slightLayer: string;
    };
  }
}

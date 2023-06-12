import { DefaultTheme } from 'styled-components';

const fontSizes: DefaultTheme['fontSizes'] = {
  xs: '12px',
  sm: '14px',
  md: '16px',
  lg: '18px',
  xl: '20px',
  xxl: '22px',
};

const fontWeights: DefaultTheme['fontWeights'] = {
  extraBold: 900,
  bold: 800,
  semiBold: 700,
  regular: 600,
};

export const lightTheme: DefaultTheme = {
  fontSizes,
  fontWeights,
  colors: {
    bgPage: '#ffffff',
  },
};

export const darkTheme: DefaultTheme = {
  fontSizes,
  fontWeights,
  colors: { bgPage: '#ffffff' },
};

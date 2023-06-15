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
    bgElement1: '#ffffff',
    elementShadow: 'rgba(55, 31, 0, 0.1)',
    text1: '#8b95a1',
    primary1: '#c07343',
    slightLayer: 'rgba(0,0,0,0.05)',
  },
};

export const darkTheme: DefaultTheme = {
  fontSizes,
  fontWeights,
  colors: {
    bgPage: '#1b1b1d',
    bgElement1: '#242526',
    elementShadow: 'rgba(55, 31, 0, 0.1)',
    text1: '#ffffff',
    primary1: '#c07343;',
    slightLayer: 'rgba(255,238,217,0.11)',
  },
};

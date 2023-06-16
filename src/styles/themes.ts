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
    bgElement2: '#f2f4f6',
    elementShadow: '0 0 4px 0 rgba(55, 31, 0, 0.1), 0 4px 16px 0 rgba(55, 31, 0, 0.1)',
    text1: '#8b95a1',
    border1: 'rgba(0, 27, 55, 0.1)',
    border2: '#c07343',
    primary1: '#c07343',
    button1: '#c07343',
    button2: '#e1864e',
    buttonText: '#ffffff',
    slightLayer: 'rgba(0,0,0,0.05)',
  },
};

export const darkTheme: DefaultTheme = {
  fontSizes,
  fontWeights,
  colors: {
    bgPage: '#1b1b1d',
    bgElement1: '#242526',
    bgElement2: '#313131',
    elementShadow: '0 0 4px 0 rgba(55, 31, 0, 0.1), 0 4px 16px 0 rgba(55, 31, 0, 0.1)',
    text1: '#ffffff',
    border1: 'rgba(0, 27, 55, 0.1)',
    border2: '#e1864e',
    primary1: '#dddddd',
    button1: '#e1864e',
    button2: '#c07343',
    buttonText: '#ffffff',
    slightLayer: 'rgba(255,238,217,0.11)',
  },
};

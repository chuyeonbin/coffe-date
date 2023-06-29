import { DefaultTheme } from 'styled-components';

const fontSizes: DefaultTheme['fontSizes'] = {
  xs: '12px',
  sm: '14px',
  md: '16px',
  lg: '18px',
  xl: '20px',
  xxl: '22px',
  xxx1: '24px',
  xxx2: '28px',
};

const fontWeights: DefaultTheme['fontWeights'] = {
  extraBold: 900,
  bold: 800,
  semiBold: 700,
  regular: 600,
  semiRegular: 500,
};

export const lightTheme: DefaultTheme = {
  fontSizes,
  fontWeights,
  colors: {
    bgPage: '#ffffff',
    bgElement1: '#ffffff',
    bgElement2: '#f2f4f6',
    bgElement3: '#eeeeee',
    bgElement4: '#c07343',
    elementShadow: '0 0 4px 0 rgba(55, 31, 0, 0.1), 0 4px 16px 0 rgba(55, 31, 0, 0.1)',
    text1: '#8b95a1',
    text2: '#000000',
    border1: 'rgba(0, 27, 55, 0.1)',
    border2: '#c07343',
    border3: 'rgba(0, 27, 55, 0.1)',
    primary1: '#c07343',
    primary2: '#c07343',
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
    bgElement3: '#3b3b3b',
    bgElement4: '#c07343',
    elementShadow: '0 0 4px 0 rgba(55, 31, 0, 0.1), 0 4px 16px 0 rgba(55, 31, 0, 0.1)',
    text1: '#ffffff',
    text2: '#ffffff',
    border1: 'rgba(0, 27, 55, 0.1)',
    border2: '#e1864e',
    border3: '#ffffff',
    primary1: '#dddddd',
    primary2: '#c07343',
    button1: '#e1864e',
    button2: '#c07343',
    buttonText: '#ffffff',
    slightLayer: 'rgba(255,238,217,0.11)',
  },
};

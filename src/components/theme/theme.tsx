import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#111318', //присваивается вновь созданным элементам по умолчанию
      light: '#FFF',
    },
    secondary: { // для вывертки
      main: '#FFF',
      // dark: '#111318'
    },
    info: {
      main: '#AEAFB2',
    },
    success: {
      main: '#47B881', 
    },
    error: {
      main: '#830D0B', 
    },
    sky: {
      main: '#3DA8D6',
    },
    blue: {
      main: '#052B89',
    },
    purple: {
      main: '#5D0B9D',
    },
    red: {
      main: '#830D0B',
    },
    yellow: {
      main: '#F9B50B',
    },
    green: {
      main: '#47B881',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          fontSize: 18,
          height: 61,
        },
        sizeSmall: {
          // fontSize: '12px',
          width: '205px',
        },
        sizeMedium: {
          // fontSize: '14px',
          width: '260px',
        },
        sizeLarge: {
          // fontSize: '16px',
          width: '402px',
        },
        outlinedPrimary: { // белые кнопки без контура
          border: 'none',
          color: '#111318',
          backgroundColor: '#FFF',
          '&:hover': {
            backgroundColor: '#FFF',
          },
          '&:active': {
            backgroundColor: '#FFF',
            border: 'none',
          },
          '&:focus': {
            backgroundColor: '#FFF',
            border: 'none',
          },
        },
        outlinedSecondary: { // белые кнопки с контуром
          color: '#111318',
          backgroundColor: '#FFF',
          border: '1px solid #111318',
          '&:hover': {
            backgroundColor: '#FFF', // сохраняем белый цвет при наведении
          },
          '&:active': {
            backgroundColor: '#FFF', // сохраняем белый цвет при нажатии
            border: '1px solid #111318',
          },
          '&:focus': {
            backgroundColor: '#FFF', // сохраняем белый цвет при фокусе
            border: '1px solid #111318',
          },
        },
      }
    }
  }
});

//автоматическая подстройка шрифтов под размер экрана
const responsiveTheme = responsiveFontSizes(theme);

export default responsiveTheme;



    // 
  
    // },
    // text: {
    //   black: '#111318',
    //   white: '#FFF',
    //   gray: '#717173',
    // },
 
  // },
  // typography: {
    // fontStyle: 'normal',
    // margin: '0',
    // padding: '0',
    // fontOpticalSizing: 'auto',
    // webkitFontSmoothing: 'antialiased',
    // mozOsxFontSmoothing: 'grayscale',
    // webkitTextSizeAdjust: '100%',
    // msTextSizeAdjust: '100%',
    // mozTextSizeAdjust: '100%',
    // textRendering: 'optimizeSpeed',
    // h1: { //TODO?
    //   fontFamily: 'Cormorant, Georgia, sans-serif',
    //   fontWeight: 400,
    //   // color: '#262C40',
    //   fontSize: '80px',
    //   lineHeight: '97px',
    // },
//   },
//   spacing: [0, 4, 8, 16, 32, 64],
// });
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const mainTheme = createTheme({
  palette: {
    // primary: {
    //   main: "#111318", //присваивается вновь созданным элементам по умолчанию
    //   light: "#FFF",
    // },
    // secondary: {
    //   // для вывертки
    //   main: "#FFF",
    //   // dark: '#111318'
    // },
    info: {
      main: "#AEAFB2",
    },
    success: {
      main: "#47B881",
    },
    error: {
      main: "#830D0B",
    },
    sky: {
      main: "#3DA8D6",
    },
    blue: {
      main: "#052B89",
    },
    purple: {
      main: "#5D0B9D",
    },
    red: {
      main: "#830D0B",
    },
    yellow: {
      main: "#F9B50B",
    },
    green: {
      main: "#47B881",
    },
  },
  typography: {
    h1: {
      fontFamily: "Cormorant, Georgia, sans-serif",
      fontWeight: 400,
      fontSize: "80px",
      fontStyle: "normal",
    },
    h2: {
      fontFamily: "Cormorant, Georgia, sans-serif",
      fontWeight: 400,
      fontSize: "60px",
      fontStyle: "normal",
    },
    h3: {
      fontFamily: "Cormorant, Georgia, sans-serif",
      fontWeight: 400,
      fontSize: "36px",
      fontStyle: "normal",
    },
    h4: {
      fontFamily: "Cormorant, Georgia, sans-serif",
      fontWeight: 400,
      fontSize: "28px",
      fontStyle: "normal",
    },
    h5: {
      fontFamily: "Cormorant, Georgia, sans-serif",
      fontWeight: 400,
      fontSize: "18px",
      fontStyle: "normal",
    },
    body1: {
      // в макете B2
      fontFamily: "Monsterat, Roboto, Inter, sans-serif",
      fontSize: "20px",
      fontStyle: "normal",
    },
    body2: {
      // в макете B3
      fontFamily: "Monsterat, Roboto, Inter, sans-serif",
      fontSize: "18px",
      fontStyle: "normal",
    },
    subtitle1: {
      // в макете B1
      fontFamily: "Monsterat, Roboto, Inter, sans-serif",
      fontSize: "36px",
      fontStyle: "normal",
    },
    subtitle2: {
      // в макете B4
      fontFamily: "Monsterat, Roboto, Inter, sans-serif",
      fontSize: "16px",
      fontStyle: "normal",
    },
    button: {
      // в макете B2, не ипользовать - применяется к кнопкам автоматически
      fontFamily: "Monsterat, Roboto, Inter, sans-serif",
      fontSize: "18px",
      fontStyle: "normal",
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
          width: "205px",
        },
        sizeMedium: {
          // fontSize: '14px',
          width: "260px",
        },
        sizeLarge: {
          // fontSize: '16px',
          width: "402px",
        },
        outlinedPrimary: {
          // белые кнопки без контура
          border: "none",
          color: "#111318",
          backgroundColor: "#FFF",
          "&:hover": {
            backgroundColor: "#FFF",
          },
          "&:active": {
            backgroundColor: "#FFF",
            border: "none",
          },
          "&:focus": {
            backgroundColor: "#FFF",
            border: "none",
          },
        },
        outlinedSecondary: {
          // белые кнопки с контуром
          color: "#111318",
          backgroundColor: "#FFF",
          border: "1px solid #111318",
          "&:hover": {
            backgroundColor: "#FFF", // сохраняем белый цвет при наведении
          },
          "&:active": {
            backgroundColor: "#FFF", // сохраняем белый цвет при нажатии
            border: "1px solid #111318",
          },
          "&:focus": {
            backgroundColor: "#FFF", // сохраняем белый цвет при фокусе
            border: "1px solid #111318",
          },
        },
      },
    },
    MuiTypography: {
      // Для переопределения общих стилей всей типографики
      styleOverrides: {
        root: {
          // marginBottom: '20px',
        },
        h1: {
          // color: '#111318',
        },
        body1: {
          // color: '#AEAFB2',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          width: "32px",
          height: "32px",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        },
      },
    },
    MuiBadge: {
      styleOverrides: {
        badge: {},
      },
    },
    MuiSelect: {
      // Select
      styleOverrides: {
        root: {},
        icon: {},
      },
    },
    MuiMenuItem: {
      //
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            backgroundColor: "#47B881",
            "&:hover": {
              backgroundColor: "#3DA8D6",
            },
          },
        },
      },
    },
  },
});

//автоматическая подстройка шрифтов под размер экрана
const responsiveTheme = responsiveFontSizes(mainTheme);

export default responsiveTheme;

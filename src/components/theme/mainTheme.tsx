import { createTheme } from "@mui/material/styles";

const mainTheme = createTheme({
  palette: {
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
      fontFamily: "Montserrat, Roboto, Inter, sans-serif",
      fontSize: "20px",
      fontWeight: 400,
      fontStyle: "normal",
    },
    body2: {
      // в макете B3
      fontFamily: "Montserrat, Roboto, Inter, sans-serif",
      fontSize: "18px",
      fontWeight: 400,
      fontStyle: "normal",
    },
    subtitle1: {
      // в макете B1
      fontFamily: "Montserrat, Roboto, Inter, sans-serif",
      fontSize: "36px",
      fontWeight: 400,
      fontStyle: "normal",
    },
    subtitle2: {
      // в макете B4
      fontFamily: "Montserrat, Roboto, Inter, sans-serif",
      fontSize: "16px",
      fontWeight: 400,
      fontStyle: "normal",
    },
    button: {
      // в макете B2, не ипользовать - применяется к кнопкам автоматически
      fontFamily: "Montserrat, Roboto, Inter, sans-serif",
      fontSize: "18px",
      fontWeight: 400,
      fontStyle: "normal",
    },
  },

  components: {
    MuiDrawer: { // выплывающий сбоку попап
      styleOverrides: {
        paper: {
          backgroundColor: "#fff",
          height: '1080px',
        },
      },
    },
    MuiButton: { // кнопки
      styleOverrides: {
        root: {
          borderRadius: 0,
          fontSize: 18,
          height: 61,
        },
        sizeSmall: {
          width: "205px",
        },
        sizeMedium: {
          width: "260px",
        },
        sizeLarge: {
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
    MuiIconButton: { // иконки
      styleOverrides: {
        root: {
          width: "32px",
          height: "32px",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          padding: 0,
          margin: 0,
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
    MuiOutlinedInput: { // инпут
      styleOverrides: {
        root: {
          outline: 'none',
          border: 'none',
          borderBottom: '1px solid #111318',
          backgroundColor: 'fff',
          color: 'fff',
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#000', // черная рамка при фокусе
          },
        },
      },
    },
  },
});

export default mainTheme;

import { createTheme } from "@mui/material/styles";
import mainTheme from './mainTheme';

const darkTheme = createTheme({
  ...mainTheme,
  palette: {
    primary: {
      main: "#111318",
    },
    secondary: {
      main: "#FFF",
    },
  },
  // components: {
  //   MuiButton: {
  //     styleOverrides: {
  //       root: {
  //         borderRadius: 0,
  //         fontSize: 18,
  //         height: 61,
  //       },
  //       sizeSmall: {
  //         // fontSize: '12px',
  //         width: "205px",
  //       },
  //       sizeMedium: {
  //         // fontSize: '14px',
  //         width: "260px",
  //       },
  //       sizeLarge: {
  //         // fontSize: '16px',
  //         width: "402px",
  //       },
  //       outlinedPrimary: {
  //         // белые кнопки без контура
  //         border: "none",
  //         color: "#111318",
  //         backgroundColor: "#FFF",
  //         "&:hover": {
  //           backgroundColor: "#FFF",
  //         },
  //         "&:active": {
  //           backgroundColor: "#FFF",
  //           border: "none",
  //         },
  //         "&:focus": {
  //           backgroundColor: "#FFF",
  //           border: "none",
  //         },
  //       },
  //       outlinedSecondary: {
  //         // белые кнопки с контуром
  //         color: "#111318",
  //         backgroundColor: "#FFF",
  //         border: "1px solid #111318",
  //         "&:hover": {
  //           backgroundColor: "#FFF", // сохраняем белый цвет при наведении
  //         },
  //         "&:active": {
  //           backgroundColor: "#FFF", // сохраняем белый цвет при нажатии
  //           border: "1px solid #111318",
  //         },
  //         "&:focus": {
  //           backgroundColor: "#FFF", // сохраняем белый цвет при фокусе
  //           border: "1px solid #111318",
  //         },
  //       },
  //     },
  //   },
  //   MuiTypography: {
  //     // Для переопределения общих стилей всей типографики
  //     styleOverrides: {
  //       root: {
  //         // marginBottom: '20px',
  //       },
  //       h1: {
  //         // color: '#111318',
  //       },
  //       body1: {
  //         // color: '#AEAFB2',
  //       },
  //     },
  //   },
  //   MuiIconButton: {
  //     styleOverrides: {
  //       root: {
  //         width: "32px",
  //         height: "32px",
  //         backgroundPosition: "center",
  //         backgroundRepeat: "no-repeat",
  //       },
  //     },
  //   },
  //   MuiBadge: {
  //     styleOverrides: {
  //       badge: {},
  //     },
  //   },
  //   MuiSelect: {
  //     // Select
  //     styleOverrides: {
  //       root: {},
  //       icon: {},
  //     },
  //   },
  //   MuiMenuItem: {
  //     //
  //     styleOverrides: {
  //       root: {
  //         "&.Mui-selected": {
  //           backgroundColor: "#47B881",
  //           "&:hover": {
  //             backgroundColor: "#3DA8D6",
  //           },
  //         },
  //       },
  //     },
  //   },
  // },
});

export default darkTheme;

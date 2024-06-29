import { useState } from "react";

import { Header } from "@components/Header";
import { Login } from "@components/Login";
import { Main } from "@components/Main";

import { ThemeProvider } from "@mui/material/styles";
import styles from "./index.module.css";
// import responsiveTheme from "./components/theme/mainTheme.tsx";
import responsiveDarkTheme from "./components/theme/darkTheme.tsx";
import responsiveLightTheme from "./components/theme/lightTheme.tsx";

import { Test } from "@components/Test";

// import Dialog from "@mui/material/Dialog";
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';

function App() {
  const [theme, setTheme] = useState<object>(responsiveDarkTheme);
  const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false);

  const handleClick = () => {
    setTheme(responsiveDarkTheme ? responsiveLightTheme : responsiveDarkTheme); // Переключение на темную тему при открытии попапа
    setIsOpenPopup(!isOpenPopup);
  };

  // const handleClose = () => {
  //   setTheme(responsiveLightTheme); // Возвращение к светлой теме при закрытии попапа
  //   setIsOpenPopup(false);
  // };

  return (
    <ThemeProvider theme={theme}>
      <main>
        <div className={styles.image_container}>
          <Header />
          <Login/>
          <Main />
          <Test />
        </div>
      </main>
    </ThemeProvider>
  );
}

export default App;

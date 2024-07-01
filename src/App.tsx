import { useState } from "react";

import styles from "./index.module.css";
import { ThemeProvider } from "@mui/material/styles";
// import responsiveTheme from "./components/theme/mainTheme.tsx";
import responsiveLightTheme from "./components/theme/lightTheme.tsx";
import responsiveDarkTheme from "./components/theme/darkTheme.tsx";

import { Main } from "@components/Main";
import { Header } from "@components/Header";
import { Test } from "@components/Test";

// import Dialog from "@mui/material/Dialog";
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';

function App() {
  const [theme, setTheme] = useState<object>(responsiveDarkTheme);
  
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [openPopup, setOpenPopup] = useState<string | null>(null);

  console.log(openPopup, 'openPopup');

  // Функция открытия для выезжающего меню и слева и авторизации/регистрации справа
  const handleOpenPopup = (id: string): void => {
    setOpenPopup(id);
  };

  // Функция открытия для SearchPopup 
  const handleOpenSearchPopup = (): void => {
    setTheme(responsiveDarkTheme ? responsiveLightTheme : responsiveDarkTheme); // Переключение на темную тему при открытии попапа

  };

  const handleClosePopup = (): void => {
    setOpenPopup(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <main>
        <div className={styles.image_container}>
          <Header 
          handleOpenPopup={handleOpenPopup} 
          handleClosePopup={handleClosePopup}
          openPopup={openPopup}
          />
          <Main />
          <Test />
        </div>
      </main>
    </ThemeProvider>
  );
}

export default App;

import { useState } from "react";

import { Header } from "@components/Header";
import { Login } from "@components/Login";
import { Main } from "@components/Main";

import styles from "./index.module.css";
import { ThemeProvider } from "@mui/material/styles";
// import responsiveTheme from "./components/theme/mainTheme.tsx";
import responsiveDarkTheme from "./components/theme/darkTheme.tsx";
import responsiveLightTheme from "./components/theme/lightTheme.tsx";

import { Test } from "@components/Test";

// import Dialog from "@mui/material/Dialog";
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import { Test } from "@components/Test";

function App() {
  const [theme, setTheme] = useState<object>(responsiveDarkTheme);
  const [isShowSearchSection, setIsShowSearchSection] = useState<boolean>(false);//false
  // Единый стейт для боковых попапов
  const [openPopup, setOpenPopup] = useState<string | null>(null);

  // Функция открытия для выезжающего меню слева и авторизации/регистрации справа, принимает id попапа (string)
  const handleOpenPopup = (id: string): void => {
    setOpenPopup(id);
  };

  // Функция переключения отображения секции Search
  const handleOpenSearchPopup = (): void => {
    // Переключение на темную тему при открытии попапа
    setTheme(responsiveDarkTheme ? responsiveLightTheme : responsiveDarkTheme);
    setIsShowSearchSection(true);
  };

  const handleClosePopup = (): void => {
    setOpenPopup(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <main>
        <div className={styles.image_container}>
          <Header />
          <Login/>
          <Main />
          <Test />
          <Header 
          handleOpenPopup={handleOpenPopup} 
          handleClosePopup={handleClosePopup}
          openPopup={openPopup}
          isShowSearchSection={isShowSearchSection}
          handleOpenSearchPopup={handleOpenSearchPopup}
          />
          <Main 
            isShowSearchSection={isShowSearchSection}
            handleOpenSearchPopup={handleOpenSearchPopup}
          />
          {/* <Test /> */}
        </div>
      </main>
    </ThemeProvider>
  );
}

export default App;

import { useState } from "react";
import { Header } from "@components/Header";
import { Main } from "@components/Main";
import { ThemeProvider } from "@mui/material/styles";
import darkTheme from "./components/theme/darkTheme.tsx";
import lightTheme from "./components/theme/lightTheme.tsx";

function App() {
  const [theme, setTheme] = useState<object>(darkTheme);
  const [isShowSearchSection, setIsShowSearchSection] = useState<boolean>(
    false
  );
  // Единый стейт для боковых попапов
  const [openPopup, setOpenPopup] = useState<string | null>(null);

  // Функция открытия для выезжающего меню слева и авторизации/регистрации справа, принимает id попапа (string)
  const handleOpenPopup = (id: string): void => {
    setOpenPopup(id);
  };

  // Функция переключения отображения секции Search
  const handleOpenSearchPopup = (): void => {
    // Переключение на темную тему при открытии попапа
    setTheme(darkTheme ? lightTheme : darkTheme);
    setIsShowSearchSection(true);
  };

  const handleClosePopup = (): void => {
    setOpenPopup(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <main>
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
      </main>
    </ThemeProvider>
  );
}

export default App;

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
  // Unified state for side popups
  const [openPopup, setOpenPopup] = useState<string | null>(null);

  // Function to open the sliding menu on the left and authorization/registration on the right, takes the id of the popup (string)
  const handleOpenPopup = (id: string): void => {
    setOpenPopup(id);
  };

  // Function to toggle the display of the Search section
  const handleOpenSearchPopup = (): void => {
    // Switch to the dark theme when the popup is opened
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

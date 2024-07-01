// import React from "react";
import styles from "./index.module.css";
import bag_icon from "@assets/bag_header.svg";
// import menu_icon from "@assets/header_menu_icon.svg";
import MenuIcon from '../svgIcons/MenuIcon';
import user_icon from "@assets/user_header.svg";
import IconButton from "@mui/material/IconButton";
import {
  MenuList,
  MenuItem,
  Badge,
  Button,
  Drawer,
} from "@mui/material";

// import Button from '@mui/material/Button';
import { SearchInput } from "@components/ui/SearchInput";

interface HeaderProps {
  handleOpenPopup: (dialogId: string) => void;
  handleClosePopup: () => void;
  openPopup: string | null;
}

type Anchor = "top" | "left" | "bottom" | "right";

export const Header: React.FC<HeaderProps> = ({
  handleOpenPopup,
  handleClosePopup,
  openPopup,
}) => {
  return (
    <header className={styles.container}>
      {/* <Button variant="contained">Contained</Button> */}
      <div className={styles.menu_container}>
        <IconButton
          aria-label="Корзина"
          type="button"
          color="primary"
          onClick={() => handleOpenPopup("menuIcon")}
        >
          <MenuIcon></MenuIcon> {/*TODO не менячет цвет обратно */}
        </IconButton>
        <Drawer // TODO: вынести в отдельный компонет с children
          // anchor={anchor}
          open={openPopup === "menuIcon"}
          onClose={handleClosePopup}
        >
          <Button onClick={handleClosePopup} color="primary">
            Close
          </Button>

          <MenuList>
            <MenuItem>Каталог</MenuItem>
            <MenuItem>Художники</MenuItem>
            <MenuItem>Новости</MenuItem>
            <MenuItem>Аналитика</MenuItem>
          </MenuList>

        </Drawer>
        <h2 className={styles.title}>ȘAGAART</h2>
      </div>
      <div className={styles.input_container}>
        <SearchInput
          variant="search"
          placeholder="Искать по названию, художнику"
          icon="search"
        />
      </div>
      <div className={styles.user_container}>
        <Badge badgeContent={4} color="primary">
          <IconButton
            sx={{
              backgroundImage: `url(${bag_icon})`,
            }}
            aria-label="Корзина"
            type="button"
            color="primary"
            onClick={() => console.log("корзина открыта")}
          />
        </Badge>

        <IconButton
          sx={{
            backgroundImage: `url(${user_icon})`,
          }}
          aria-label="Корзина"
          type="button"
          color="primary"
          onClick={() => handleOpenPopup("accountPopup")}
          // содержимое общего компонента AccountPopup отображается в зависимости от того, зарегистрирован пользователь или нет
        />
        
        <Drawer // TODO: вынести в отдельный компонет с children
        // TODO: выезжает не с той стороны
          // anchor={anchor}
          open={openPopup === "accountPopup"}
          onClose={handleClosePopup}
        >
          <Button onClick={handleClosePopup} color="primary">
            Close
          </Button>

        </Drawer>
      </div>
    </header>
  );
};

// import React from 'react';
import styles from "./index.module.css";
// import bag_icon from "@assets/bag_header.svg";
import BagIcon from '../svgIcons/BagIcon';
// import menu_icon from '@assets/header_menu_icon.svg'; TODO удалить из assets
import MenuIcon from "../svgIcons/MenuIcon";
import user_icon from "@assets/user_header.svg";
import IconButton from "@mui/material/IconButton";
import { MenuPopup } from "../MenuPopup/MenuPopup";
import { AuthPopup } from "../AuthPopup/AuthPopup";
import { HeaderProps } from "../types";
import { Badge } from "@mui/material";
import { SearchInput } from "@components/ui/SearchInput";


console.log(BagIcon)

export const Header: React.FC<HeaderProps> = ({
  handleOpenPopup, // функция, открывающая попап
  handleClosePopup,
  openPopup, // стейт, хранящий id попапа, который нужно открыть
  isShowSearchSection,
  handleOpenSearchPopup,
}) => {

  return (
    <header className={styles.container}>
      {/* <Button variant='contained'>Contained</Button> */}
      <div className={styles.menu_container}>
        <IconButton
          aria-label="Корзина"
          type="button"
          color="primary"
          onClick={() => handleOpenPopup("menuIcon")}
        >
          <MenuIcon color="primary"></MenuIcon> {/*TODO не менячет цвет обратно */}
        </IconButton>

        <MenuPopup openPopup={openPopup} handleClosePopup={handleClosePopup} />

        <h2 className={styles.title}>ȘAGAART</h2>
      </div>

      {/* Скрывать строку поиска если показана секция Search */}
      {!isShowSearchSection && <div className={styles.input_container}>
        <SearchInput
          variant="search"
          placeholder="Искать по названию, художнику"
          icon="search"
          // onChange={() => handleOpenSearchPopup()} TODO элемент Влада не хавает стандартные свойства
        />
      </div>}
      <div className={styles.user_container}>
        <Badge badgeContent={4} color="primary">
          <IconButton
            sx={{
              backgroundImage: `url(${BagIcon})`,
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

        <AuthPopup openPopup={openPopup} handleClosePopup={handleClosePopup} />

      </div>
    </header>
  );
};

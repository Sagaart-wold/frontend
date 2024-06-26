// import React from "react";

import styles from "./index.module.css";

import bag_icon from "@assets/bag_header.svg";
import menu_icon from "@assets/header_menu_icon.svg";
import user_icon from "@assets/user_header.svg";

// import Button from '@mui/material/Button';

import { SearchInput } from "@components/ui/SearchInput";

export function Header() {
  return (
    <header className={styles.container}>
      {/* <Button variant="contained">Contained</Button> */}
      <div className={styles.menu_container}>
        <img className={styles.menu_icon} src={menu_icon} alt="Иконка меню" />
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
        <img className={styles.menu_icon} src={bag_icon} alt="" />
        <img className={styles.menu_icon} src={user_icon} alt="" />
      </div>
    </header>
  );
}

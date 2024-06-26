// import React from "react";

import { SearchInput } from "@components/ui/SearchInput";
import {Button} from "@components/ui/Button/Button";

import styles from "./index.module.css";


export function Main() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Откройте{" "}
        <span style={{ fontStyle: "italic", fontFamily: "Cormorant-Italic" }}>
          заново
        </span>{" "}
        мир искусства
      </h1>

      <div className={styles.input_container}>
        <div className={styles.input_first}>
          <SearchInput variant="arrow" placeholder="Живопись" icon="arrow" />
        </div>

        <div className={styles.input_second}>
          <SearchInput
            variant="arrow"
            placeholder="200 000 ₽ -  500 000 ₽ "
            icon="arrow"
          />
        </div>

        <div className={styles.button}>
          <Button variant='main_screen' text="Найти"/>
        </div>
      </div>

      <div className={styles.description_container}>
        <p className={styles.description_text}>Название картины</p>
        <p className={styles.description_text}>Автор картины</p>
        <p className={styles.description_text}>100 000 ₽</p>
      </div>
    </div>
  );
}

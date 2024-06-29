import React from "react";
import styles from "./index.module.css";

export function Login() {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h2>Вход</h2>

        <input placeholder="Почта" type="text" name="email" id="email" />

        <input placeholder="Пароль" type="text" name="password" id="password" />

        <a href="">Забыли пароль?</a>
        
        <label className={styles.label_checkbox} htmlFor="checkbox">
          <input className={styles.checkbox} id="checkbox" type="checkbox" />
          <span className={styles.checkmark}/>
            <p className={styles.checkbox_text}>запомнить меня</p>
        </label>
        <button></button>
        <button></button>
      </form>
    </div>
  );
}

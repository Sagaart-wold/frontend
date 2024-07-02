// import React from "react";

import styles from "./index.module.css";

import search_icon from "@assets/search_icon.svg";
import arrow_icon from "@assets/arrow_down_icon.svg";

import classNames from 'classnames';

interface SearchParams {
  icon: 'search' | 'arrow';
  placeholder: string;
  variant: 'search' | 'arrow',
  onChange?: () => void
}

export function SearchInput({ icon, placeholder,variant,onChange }: SearchParams) {
  return (
    <div className={classNames(styles.container, {
      [styles.search_container]: variant === 'search',
      [styles.arrow_container]: variant === 'arrow',
    })}>
      {icon === "search" && (
        <img className={styles.icon} src={search_icon} alt="" />
      )}

      <input
      onChange={onChange}
        className={styles.input}
        placeholder={
          placeholder
        }
        type="text"
      />
      

      {icon === "arrow" && (
        <img className={styles.arrow_icon} src={arrow_icon} alt="" />
      )}
    </div>
  );
}

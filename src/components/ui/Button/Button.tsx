// import React from 'react'

import styles from './index.module.css'

import classNames from 'classnames'

interface ButtonParams {
    variant: 'main' | 'secondary' | 'icon' | 'main_screen',
    text: string,
}

export default function Button({variant, text}: ButtonParams) {
  return (
        <button className={classNames(styles.button, {
            [styles.button_main]: variant === 'main',
            [styles.button_secondary]: variant === 'secondary',
            [styles.button_icon]: variant === 'icon',
            [styles.button_main_screen]: variant === 'main_screen',
        })} type='button'>
            <p className={styles.text}>{text}</p>
        </button>
  )
}

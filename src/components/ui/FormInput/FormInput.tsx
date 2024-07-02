import { useState } from "react";

import eye_icon_hidden from "@assets/EyeClosed.svg";
import eye_icon_visible from "@assets/Eye_visible.svg";

import styles from "./index.module.css";

import { UseFormRegister } from "react-hook-form";
import { Inputs } from "@components/Login";

interface FormInputParams {
  placeholder: string;
  register: UseFormRegister<Inputs>;
  name: "email" | "password";
  icon?: boolean;
}

export function FormInput({
  placeholder,
  icon,
  register,
  name,
}: FormInputParams) {
  const [isHidden, setIsHidden] = useState(true);

  const validationRules = {
    email: {
      required: "Email обязателен",
      pattern: {
        value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
        message: "Неверный email",
      },
    },
    password: {
      required: "Пароль обязателен",
      minLength: {
        value: 6,
        message: "Пароль должен содержать минимум 6 символов",
      },
    },
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        {...register(name, 
        validationRules[name])}
        name={name}
        placeholder={placeholder}
        type={name === "password" && isHidden ? "password" : "text"}
      />
      {icon && (
        <img
          onClick={() => setIsHidden(!isHidden)}
          className={styles.icon}
          src={isHidden ? eye_icon_hidden : eye_icon_visible}
          alt="Иконка скрытия пароля"
        />
      )}
    </div>
  );
}

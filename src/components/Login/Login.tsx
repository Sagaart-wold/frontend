import Typography from "@mui/material/Typography/Typography";
import { Button } from "@mui/material";
import { FormInput } from "@components/ui/FormInput";

import styles from "./index.module.css";

import { SubmitHandler, useForm } from "react-hook-form";

export interface Inputs {
  email: string;
  password: string;
}

export function Login() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<Inputs>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <Typography style={{marginBottom:'24px'}} variant="h2">Вход</Typography>
        <span className={styles.errors}>
          {errors.email?.message || errors.password?.message}
        </span>

        <div className={styles.fields}>
          <FormInput register={register} name="email" placeholder="email" />

          <FormInput
            register={register}
            name="password"
            icon={true}
            placeholder="пароль"
          />
        </div>

        <Typography
          style={{ textAlign: "left", marginBottom: "48px" }}
          variant="subtitle2"
        >
          <a className={styles.link} href="">
            Забыли пароль?
          </a>
        </Typography>

        <label className={styles.label_checkbox} htmlFor="checkbox">
          <input className={styles.checkbox} id="checkbox" type="checkbox" />
          <span className={styles.checkmark} />
          <Typography variant="subtitle2">Запомнить меня</Typography>
        </label>
        <Button type="submit" variant="contained" disableElevation size="large">
          Войти
        </Button>
        <Button variant="outlined" disableElevation size="large">
          Зарегистрироваться
        </Button>
      </form>
    </div>
  );
}

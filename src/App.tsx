// import { useState } from "react";

import { Header } from "@components/Header";
import { Main } from "@components/Main";
import { Login } from "@components/Login";


import styles from "./index.module.css";


function App() {
  return (
    <main>
      <div className={styles.image_container}>
        <Header />
        <Main />
        <Login/>
      </div>
    </main>
  );
}

export default App;

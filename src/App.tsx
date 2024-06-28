// import { useState } from "react";

import styles from "./index.module.css";

import { Main } from "@components/Main";
import { Header } from "@components/Header";
import { Test } from "@components/Test";

function App() {
  return (
    <main>
      <div className={styles.image_container}>
        <Header />
        <Main />
        <Test />
      </div>
    </main>
  );
}

export default App;

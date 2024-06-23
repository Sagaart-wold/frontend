import { useState } from "react";

import styles from "./index.module.css";

import { Main } from "@components/Main";
import { Header } from "@components/Header";

function App() {
  return (
    <main>
      <div className={styles.image_container}>
        <Header />
        <Main />
      </div>
    </main>
  );
}

export default App;

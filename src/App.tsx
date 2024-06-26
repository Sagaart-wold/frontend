// import { useState } from "react";

import { Header } from "./components/Header";
import { Main } from "./components/Main";

import styles from "./index.module.css";


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

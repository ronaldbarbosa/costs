import React from "react";

import styles from "./Home.module.css";
import savings from "../../img/savings.svg";
import LinkButton from "../layout/LinkButton";

export default function Home() {
  return (
    <section className={ styles.home_container }>
      <h1>Welcome to <span>Costs</span></h1>
      <p>Start managing your projects right now!</p>
      <LinkButton to="/newproject" text="Create Project" />
      <img src={ savings } alt="Costs" />
    </section>
  );
}

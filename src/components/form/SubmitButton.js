/* eslint-disable react/prop-types */
import React from "react";
import styles from "./SubmitButton.module.css";

export default function SubmitButton({ text }) {
  return(
    <div>
      <button className={ styles.btn }>{ text }</button>
    </div>
  );
}

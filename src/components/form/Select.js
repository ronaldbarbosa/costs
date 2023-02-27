/* eslint-disable react/prop-types */
import React from "react";

import styles from "./Select.module.css";

export default function Select({ text, name }) {
  return (
    <div className={ styles.form_control }>
      <label htmlFor={ name }>{ text }</label>
      <select name={ name } id={ name }>
        <option>Select an option</option>
      </select>
    </div>
  );
}

/* eslint-disable react/prop-types */
import React from "react";

import styles from "./ProjectForm.module.css";
import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";

export default function ProjectForm({ btnText }) {
  return (
    <form className={ styles.form }>
      <Input type="text" text="Project name:" name="name" placeholder="Enter project name" />
      <Input type="number" text="Total budget:" name="buget" placeholder="Enter total budget" />
      <Select name="category_id" text="Select category:" />
      <SubmitButton text={ btnText }/>
    </form>
  );
}

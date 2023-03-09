/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";

import styles from "./ProjectForm.module.css";
import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";

export default function ProjectForm({ btnText }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch(error => console.log(error));

  }, []);

  return (
    <form className={styles.form}>
      <Input type="text" text="Project name:" name="name" placeholder="Enter project name" />
      <Input type="number" text="Total budget:" name="buget" placeholder="Enter total budget" />
      <Select name="category_id" text="Select category:" options={categories} />
      <SubmitButton text={btnText} />
    </form>
  );
}

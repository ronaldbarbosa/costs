import React from "react";

import styles from "./NewProject.module.css";
import ProjectForm from "../projects/ProjectForm";

export default function NewProject() {
  return (
    <div className={ styles.newproject_container }>
      <h1>Create Project</h1>
      <p>Create your project and then add the services.</p>
      <ProjectForm />
    </div>
  );
}

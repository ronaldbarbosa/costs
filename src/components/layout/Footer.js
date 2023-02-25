import React from "react";

import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li>
          <FaGithub />
        </li>
        <li>
          <FaLinkedin />
        </li>
        <li>
          <FaInstagram />
        </li>
      </ul>
      <p className={styles.copyright}>
        <span>Costs</span> &copy; 2023
      </p>
    </footer>
  );
}

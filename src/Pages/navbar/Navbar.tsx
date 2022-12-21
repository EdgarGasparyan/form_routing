import React from "react";
import { Link } from "react-router-dom";
import styles from "../navbar/Navbar.module.css";

type Link = {
  label: string;
  href: string;
};

const Navbar: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/forumpage">FORUM</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

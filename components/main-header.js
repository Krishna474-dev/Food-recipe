import Link from "next/link";
import React from "react";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";

import NavLink from "./nav-link";

const Header = () => {
  return (
    <header className={classes.header}>
      <Link href='/' className={classes.logo}>
        <Image src={logoImg} alt='A Plate filled with full of food' priority />
        Nextlevel Food
      </Link>

      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink href='/meals'>Browse Meals</NavLink>
          </li>
          <li>
            <NavLink href='/community'>Foodie Community</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

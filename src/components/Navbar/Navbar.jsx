import React from "react";
import style from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
// import SidebarFriends from "./SidebarFriends/SidebarFriends";

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <span className={style.item}>
        <NavLink className={style.navLink} activeClassName={style.activeLink} to="/profile">
          Profile
        </NavLink>
      </span>
      <span className={style.item}>
        <NavLink className={style.navLink} activeClassName={style.activeLink} to="/dialogues">
          Messages
        </NavLink>
      </span>
      <div className={`${style.item} ${style.itemDisabled}`}>
        <NavLink className={style.navLink} activeClassName={style.activeLink} to="/news">
          News
        </NavLink>
      </div>
      <div className={`${style.item} ${style.itemDisabled}`}>
        <NavLink className={style.navLink} activeClassName={style.activeLink} to="/music">
          Music
        </NavLink>
      </div>
      <div className={`${style.item} ${style.itemDisabled}`}>
        <NavLink className={style.navLink} activeClassName={style.activeLink} to="/setting">
          Setting
        </NavLink>
      </div>
      <div className={`${style.item} ${style.itemDisabled}`}>
        <NavLink className={style.navLink} activeClassName={style.activeLink} to="/friends">
          Friends
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink className={style.navLink} activeClassName={style.activeLink} to="/users">
          Users
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;

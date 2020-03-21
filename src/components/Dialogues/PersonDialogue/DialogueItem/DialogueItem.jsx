import React from "react";
import style from "./DialogueItem.module.css";
import { NavLink } from "react-router-dom";

const DialogueItem = props => {
  return (
    <div className={style.item}>
      <NavLink activeClassName={style.active} to={"/dialogues/" + props.id}>
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogueItem;

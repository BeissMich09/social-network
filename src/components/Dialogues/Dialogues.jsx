import React from "react";
import style from "./Dialogues.module.css";
import PersonDialogue from "./PersonDialogue/PersonDialogue";
import PrivateDialogues from "./PrivateDialogues/PrivateDialogues";

const Dialogues = (props) => {
  return (
    <div className={style.dialogues_content}>
      <PersonDialogue userArr={props.dialoguesPage.userArr} />
      <PrivateDialogues store={props.store} />
    </div>
  );
};

export default Dialogues;

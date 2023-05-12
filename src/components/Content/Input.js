import { useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import classes from "./Input.module.css";

const Input = () => {
  return (
    <div className={classes.container}>
      <div className={classes.icon}>
        <AiOutlineSearch />
      </div>
      <input
        type="text"
        className={classes.input}
        placeholder="Search Articles"
      />
    </div>
  );
};

export default Input;

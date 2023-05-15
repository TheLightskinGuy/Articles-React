import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import classes from "./Input.module.css";

const Input = (props) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    search();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      search();
    }
  };

  const search = () => {
    if (inputValue.trim() !== "") {
      props.onButtonClick(inputValue);
      setInputValue("");
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.icon}>
        <AiOutlineSearch onClick={handleClick} />
      </div>
      <input
        type="text"
        className={classes.input}
        placeholder="Search Articles"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default Input;

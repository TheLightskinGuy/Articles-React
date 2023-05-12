import { SiLydia } from "react-icons/si";
import { BsFillBookmarkFill } from "react-icons/bs";
import classes from "./Navbar.module.css";
import Banner from "./Banner";

const Navbar = () => {
  return (
    <>
      <div className={classes.nav}>
        <SiLydia className={classes.icons} />
        <BsFillBookmarkFill className={classes.icons} />
      </div>
      <Banner />
    </>
  );
};

export default Navbar;

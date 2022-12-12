import style from "./Header.module.scss";
import logo from "../../assets/mylogo.png";

const Header = () => {
  return (
    <nav className={style["container"]}>
      <a href="/">
        <img src={logo} alt="Nelson's logo" style={{ width: "50px" }} />
      </a>
    </nav>
  );
};

export default Header;

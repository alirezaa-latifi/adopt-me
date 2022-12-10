import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <h1 className="header__title">Adopt Me</h1>
      </Link>
    </header>
  );
};

export default Header;

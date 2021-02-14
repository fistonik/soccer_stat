import React from "react";
import {Link} from "react-router-dom";

const Header = (props) => {
  return(
    <header className="header">
      <span className="header__slogan">Soccer Stat</span>
      <nav className="header__menu menu">
        <ul className="menu__list">
          <li className="menu__item">
            <Link
              to="/"
            >
              Главная
            </Link>
          </li>
          <li className="menu__item">
            <Link
              to="/competitions"
            >
              Список лиг
            </Link>
          </li>
          <li className="menu__item">
            <Link
              to="/teams"
            >
              Список команд
            </Link>
          </li>
        </ul>
      </nav>
      <select>
        <option>2016</option>
        <option>2017</option>
      </select>
    </header>
  );
};

export default Header;

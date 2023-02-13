import React from "react";
import "./header.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="header">
      <nav className="nav container">
        <Link to="/" className="nav__logo">
        <i class='bx bx-expand-horizontal nav__iconic'></i>
        </Link>
        <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <Link
                to="/"
                className="nav__link active-link"
              >
                <i className="uil uil-home nav__icon"></i> Главная
              </Link>
            </li>

            <li className="nav__item">
              <Link to="/skills" className="nav__link">
                <i className="uil uil-file-alt nav__icon"></i> Стек
              </Link>
            </li>

            <li className="nav__item">
              <Link to="/projects" className="nav__link">
                <i class="uil uil-bag-alt nav__icon"></i> Проекты
              </Link>
            </li>

            <li className="nav__item">
              <Link to="/contact" className="nav__link">
                <i className="uil uil-message nav__icon"></i> Контакты
              </Link>
            </li>

            {/* <li className="nav__item">
              <Link to="/info" className="nav__link">
                <i class="uil uil-comment-info nav__icon"></i> FAQ
              </Link>
            </li> */}
          </ul>
          <i
            className="uil uil-times nav__close"
            onClick={() => setToggle(!toggle)}
          ></i>
        </div>
        <div className="nav__toggle" onClick={() => setToggle(!toggle)}>
          <i class="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;

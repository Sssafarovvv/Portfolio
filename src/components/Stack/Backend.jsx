import React from "react";
import ex from "./ex.svg"

const Backend = () => {
  return (
    <div className="skills__content fade-in" id="skills">
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
          <i class='bx bxl-nodejs icon'></i>
            <div>
              <h3 className="skills__name">Node.js</h3>
              <span className="skills__level">
                Создание API, серверной части приложения. Создание модулей, cors, роутов и контроллеров различных предназначений
              </span>
            </div>
          </div>

          <div className="skills__data">
            <img src={ex} className="icon"/>
            <div>
              <h3 className="skills__name">Express</h3>
              <span className="skills__level">
                Фреймворк для Node.js, авторизация JWT + bcrypt
              </span>
            </div>
          </div>

          <div className="skills__data">
          <i class='bx bxl-mongodb icon'></i>
            <div>
              <h3 className="skills__name">Mongoose</h3>
              <span className="skills__level">
                Создание Schema
              </span>
            </div>
          </div>

          <div className="skills__data">
          <i class='bx bxl-mongodb icon'></i>
            <div>
              <h3 className="skills__name">MongoDB</h3>
              <span className="skills__level">
                Подключение и связывание базы данных Mongo с API
              </span>
            </div>
          </div> 
        </div>
      </div>
    </div>
  );
};

export default Backend;
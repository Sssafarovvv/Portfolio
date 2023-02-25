import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box jump">
        <i class='bx bx-award about__icon'></i>
        <h3 className="about__title">Опыт</h3>
        <span className="about__subtitle">1 год</span>
      </div>

      <div className="about__box jump">
        <i class='bx bx-game about__icon'></i>
        <h3 className="about__title">Возраст</h3>
        <span className="about__subtitle">20 лет</span>
      </div>

      <div className="about__box jump">
        <i class='bx bx-shopping-bag about__icon'></i>
        <h3 className="about__title">Проекты</h3>
        <span className="about__subtitle">3 законченных</span>
      </div>
    </div>
  );
};

export default Info;

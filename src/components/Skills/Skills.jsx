import React from "react";
import './skills.css'
import Frontend from './Frontend';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Стек</h2>
      <div className="skills__container container grid">
        <Frontend/>
      </div>
    </section>
  );
};

export default Skills;

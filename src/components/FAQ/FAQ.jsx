import React from "react";
import './skills.css'
import MyOwn from './MyOwn';

const FAQ = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">FAQ</h2>
      <div className="skills__container container grid">
        <MyOwn/>
      </div>
    </section>
  );
};

export default FAQ;

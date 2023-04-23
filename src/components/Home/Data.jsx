import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

const Data = () => {
  const [isVisible, SetIsVisible] = useState(false);

  return (
    <motion.div  className="home__data">
      <h1 className="home__title">Safarov Diyor</h1>
      <h3 className="home__subtitle">Frontend React Developer</h3>
      <p className="home__description">
        Я Frontend React разработчик, который готов участвовать в
        создании сложных SPA приложений
      </p>
    </motion.div>
  );
};

export default Data;

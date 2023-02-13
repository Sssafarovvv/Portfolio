import React from "react";

const Frontend = () => {
  return (
    <div className="skills__content fade-in" id="skills">

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bxl-react icon__react"></i>
            <div>
              <h3 className="skills__name">React</h3>
              <span className="skills__level">
                React Hooks, Class Components, React-Router-Dom
              </span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bxl-typescript icon"></i>
            <div>
              <h3 className="skills__name">TypeScript</h3>
              <span className="skills__level">
                Типизация React Components, Redux, Redux Toolkit, Redux Thunk
              </span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bxl-redux icon"></i>
            <div>
              <h3 className="skills__name">Redux | Redux-Toolkit</h3>
              <span className="skills__level">
                State-management, работа с legacy code mDtP, mStP, работа с хуками useDispatch(), useSelector()
              </span>
            </div>
          </div>

          <div className="skills__data">
          <i class='bx bxl-html5 icon'></i>
            <div>
              <h3 className="skills__name">HTML5</h3>
              <span className="skills__level">
                Адаптивная и responsive вёрстка
              </span>
            </div>
          </div>

          <div className="skills__data">
          <i class='bx bxl-css3 icon'></i>
            <div>
              <h3 className="skills__name">CSS3</h3>
              <span className="skills__level">
                Styled components, CSS grid
              </span>
            </div>
          </div>

          <div className="skills__data">
          <i class='bx bxl-nodejs icon'></i>
            <div>
              <h3 className="skills__name">JavaScript</h3>
              <span className="skills__level">
                Отличное знание основ программирования на JavaScript, ООП
              </span>
            </div>
          </div>

          <div className="skills__data">
          <i class='bx bx-server icon'></i>
            <div>
              <h3 className="skills__name">AJAX</h3>
              <span className="skills__level">
                Работа со сторонним API, HTTP requests, fetch, работа с Axios. API запросы с помощью Redux-Thunk
              </span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bxl-git icon"></i>
            <div>
              <h3 className="skills__name">Git, npm</h3>
              <span className="skills__level">Git push origin</span>
            </div>
          </div>

          <div className="skills__data">
          <i class='bx bxl-bootstrap icon'></i>
            <div>
              <h3 className="skills__name">Bootstrap 5 | Ant Design</h3>
              <span className="skills__level">
                Bootstrap, React-Bootstrap, Ant-Design
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;

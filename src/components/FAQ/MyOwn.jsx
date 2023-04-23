import React from "react";

const MyOwn = () => {
  return (
    <div className="skills__content fade-in" id="skills">

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i class='bx bx-meh-blank'></i>
            <div>
              <h3 className="skills__name">Обо мне</h3>
              <span className="skills__level">
                Меня зовут Диёр, мне 20 лет. Я занимаюсь разработкой на React уже год. Прежде всего я позиционирую себя как React разработчик, могу выступать в роли FullStack разработчика.
              </span>
            </div>
          </div>

          <div className="skills__data">
          <i class='bx bx-time-five' ></i>
            <div>
              <h3 className="skills__name">Softskills</h3>
              <span className="skills__level">
                Я обладаю всеми нужными навыками для участия в современной разработки. Из личных скиллов, могу выделить: адаптивность, ответственность и пунктуальность
              </span>
            </div>
          </div>

          <div className="skills__data">
          <i class='bx bx-extension' ></i>
            <div>
              <h3 className="skills__name">Что я уже реализовывал?</h3>
              <span className="skills__level">
               Я реализовывал много функционала продакш уровня, который вы можете видеть в моих готовых проектах
              </span>
            </div>
          </div>

          <div className="skills__data">
          <i class='bx bxs-shopping-bags' ></i>
            <div>
              <h3 className="skills__name">Образование</h3>
              <span className="skills__level">
                На данный момент учусь на 3-ем курсе в вузе Университет МИСИС
              </span>
            </div>
          </div>

          <div className="skills__data">
          <i class='bx bx-user-voice' ></i>
            <div>
              <h3 className="skills__name">Английский</h3>
              <span className="skills__level">
                Обладаю уверенным B2-C1 английским. Спокойно читаю документацию и форумы на английском языке. Без сложностей слушаю тех. видео на английском. Свободно разговариваю на различные темы
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MyOwn;

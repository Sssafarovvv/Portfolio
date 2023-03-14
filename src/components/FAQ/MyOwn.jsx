import React from "react";

const MyOwn = () => {
  return (
    <div className="skills__content fade-in" id="skills">

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i class='bx bx-meh-blank'></i>
            <div>
              <h3 className="skills__name">React</h3>
              <span className="skills__level">
                Меня зовут Диёр, мне 20 лет. Я занимаюсь разработкой на React уже год. Прежде всего я позиционирую себя как React разработчик, не JS разработчик.
              </span>
            </div>
          </div>

          <div className="skills__data">
          <i class='bx bx-time-five' ></i>
            <div>
              <h3 className="skills__name">TypeScript</h3>
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
                Я умею реализовывать вёрстку на FlexBox/Grid/Адаптив, логинизацию и авторизацию, пагинацию, debounce пагинации, работа с различным API, роутинг и роутинг с параметрами, использование как хуков, так и классовых компонентов, и всё это типизировать. Помимо того, умею всё это реализовывать на хуках, либо использовать Redux
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
                Обладаю уверенным B2-B1 английским. Спокойно читаю документацию и форумы на английском языке. Без сложностей слушаю тех. видео на английском. Свободно разговариваю на различные темы
              </span>
            </div>
          </div>

          <div className="skills__data">
          <i class='bx bx-horizontal-right' ></i>
            <div>
              <h3 className="skills__name">Планы на будущее</h3>
              <span className="skills__level">
                Я точно планирую начать изучать backend. И не для того, чтобы стать fullstack-разработчиком, а для того, чтобы понимать, какие процессы происходят на серверной части. В планах изучить GraphQL + Apollo, а также Effector. Буду только за, если вы меня этому научите!
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOwn;

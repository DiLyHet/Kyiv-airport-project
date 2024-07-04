import React from "react";

const News: React.FC = () => {
  return (
    <section className="news">
      <div className="news__header">
        <span className="news__header_title">Останні новини</span>
        <button className="news__header_button">Всі новини</button>
      </div>
      <div className="news__content">
        <div className="news__content_main-element">
          <span className="news__content_data">24 / 02 / 2022</span>
          <span className="news__content_title">
            Роботу Міжнародного Аеропорту «Київ» зупинено.
          </span>
          <img
            className="news__content_image"
            src="https://api.iev.aero/media/blog/files/62174242efe8e305662116.jpg"
            alt="airport photo"
          />
          <span className="news__content_text">
            ! Шановні пасажири, станом на 24 лютого 2022 року повідомляємо:
            Роботу Міжнародного Аеропорту «Київ» зупинено. <br />
            Служби аеропорту працюють у взаємодії з державними органами згідно з
            інструкцією та чинним законодавством України.
          </span>
        </div>
        <div className="news__content_element-container">
          <div className="news__content_element">
            <span className="news__content_data">23 / 02 / 2022</span>
            <span className="news__content_title">
              Перший повноцінний «Д'юті фрі електронікс» - тепер і в Україні
            </span>
            <span className="news__content_text">
              Ноутбуки, планшети, смартфони, акустичні системи, навушники,
              валізи та багато іншого - великий асортимент відомих брендів
              електронних товарів та товарів для подорожі за вигідними цінами
              відтепер доступний і пасажирам, що подорожують із Міжнародного
              аеропорту Київ імені. І.Сікорського.
            </span>
          </div>
          <div className="news__content_element">
            <span className="news__content_data">16 / 02 / 2022</span>
            <span className="news__content_title">
              Статистика Міжнародного аеропорту «Київ». Січень 2022
            </span>
            <span className="news__content_text">
              За підсумками січня 2022 року Міжнародний аеропорт «Київ» ім.
              Сікорського обслужив 170 981 пасажирів
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;

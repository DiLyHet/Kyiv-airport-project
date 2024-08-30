import React from "react";
import AdultImg from "../../../public/images/AdultImg.svg";
import ChildImg from "../../../public/images/ChildImg.svg";
import PriorityLineImg from "../../../public/images/PriorityLineImg.svg";
import HowToGet from "../../../public/images/HowToGet.jpg";
import BuyTickets from "../../../public/images/BuyTickets.jpg";
import Parking from "../../../public/images/Parking.jpg";
import ExpressLine from "../../../public/images/ExpressLine.jpg";
import Services from "../../../public/images/Services.jpg";
import CovidTesting from "../../../public/images/CovidTesting.jpeg";
import AirlinesDestinations from "../../../public/images/AirlinesDestinations.jpg";
import VipTerminal from "../../../public/images/VipTerminal.jpg";
import MastercardFastline from "../../../public/images/MastercardFastline.jpg";
import Information from "../../../public/images/Information.jpg";

const Announcement: React.FC = () => {
  return (
    <section className="announcement">
      <div className="announcement__content">
        <span className="announcement__message">Шановні пасажири!</span>
        <span className="announcement__message">
          У зв'язку з пандемією коронавірусу COVID-19 на території аеропорту
          введені посилені заходи безпеки та нові правила проходження
          формальностей.
        </span>
        <span className="announcement__link">Детальніше</span>
      </div>
      <div>
        <div className="announcement__blocks">
          <div
            className="block__container block__container_top-position block__container_narrow-size block__container_how-to-get"
            style={{ backgroundImage: `url(${HowToGet})` }}
          >
            <div className="block__title block__title_left-position">
              <span className="text-left">ЯК ДІСТАТИСЯ</span>
            </div>
            <div className="block__content block__content_left-top block__content_how-to-get">
              <span className="block__description block__description_left-position">
                м. Київ, вул. Медова 2 <br />
                Термінали A, B та D
              </span>
              <button className="block__button block__button_left-position block__button_how-to-get">
                ДІЗНАТИСЯ
              </button>
            </div>
          </div>
          <div
            className="block__container block__container_top-position block__container_wide-size block__container_buy-tickets"
            style={{ backgroundImage: `url(${BuyTickets})` }}
          >
            <div className="block__title block__title_right-position">
              <span className="text-right">
                ПРИДБАТИ <br />
                АВІАКВИТКИ
              </span>
            </div>
            <div className="block__content block__content_right-top block__content_buy-tickets">
              <span className="block__description block__description_right-position">
                Будь-які напрямки. Найкращі ціни.
              </span>
              <button className="block__button block__button_right-position block__button_buy-tickets">
                ПРИДБАТИ
              </button>
            </div>
          </div>
        </div>
        <div className="announcement__blocks">
          <div className="block__container block__container_bottom-position block__container_narrow-size block__container_parking">
            <div
              className="block__title block__title_left-position block__title_parking"
              style={{ backgroundImage: `url(${Parking})` }}
            >
              <span className="text-left">ПАРКОВКА</span>
            </div>
            <div className="block__content block__content_left-bottom block__content_parking">
              <span className="block__description block__description_left-position">
                Тарифи паркування та <br />
                правила
              </span>
              <button className="block__button block__button_left-position block__button_parking">
                ДІЗНАТИСЯ БІЛЬШЕ
              </button>
            </div>
          </div>
          <div className="block__container block__container_bottom-position block__container_wide-size block__container_express-line">
            <div
              className="block__title block__title_right-position block__title_express-line"
              style={{ backgroundImage: `url(${ExpressLine})` }}
            >
              <span className="text-right">EXPRESS LINE</span>
            </div>
            <div className="block__content block__content_right-bottom block__content_express-line">
              <span className="block__description block__description_right-position">
                Проходження авіаційної безпеки без черги
              </span>
              <button className="block__button block__button_right-position block__button_express-line">
                ДІЗНАТИСЯ БІЛЬШЕ
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="announcement__info">
        <div className="info-block">
          <div className="info-block__title">
            <div className="info-block__icon">
              <img
                className="info-block__icon_img"
                src={PriorityLineImg}
                alt="priority"
              />
            </div>
            <div className="info-block__description">
              <span className="info-block__description_title">
                PRIORITY LINE
              </span>
              <span className="info-block__description_subtitle">
                Прискорене проходження всіх формальностей
              </span>
            </div>
          </div>
          <div className="quantity-selector">
            <div className="quantity-selector__item">
              <div className="quantity-selector__item_icon">
                <img className="icon__adult" src={AdultImg} alt="adult" />
                <span className="icon__text">Дорослі</span>
              </div>
              <span className="quantity-selector__counter_number">1</span>
              <button className="quantity-selector__counter_button">+</button>
            </div>
            <div className="quantity-selector__item">
              <div className="quantity-selector__item_icon">
                <img className="icon__child" src={ChildImg} alt="child" />
                <span className="icon__text">Діти (2-12)</span>
              </div>
              <span className="quantity-selector__counter_number">0</span>
              <button className="quantity-selector__counter_button">+</button>
            </div>
            <button className="quantity-selector__button">ЗАМОВИТИ</button>
          </div>
        </div>
      </div>
      <div className="announcement__blocks">
        <div
          className="block__container block__container_top-position block__container_medium-size block__container_services"
          style={{ backgroundImage: `url(${Services})` }}
        >
          <div className="block__title block__title_left-position">
            <span className="text-left">
              ПОСЛУГИ <br /> IEV
            </span>
          </div>
          <div className="block__content block__content_left-top block__content_services">
            <span className="block__description block__description_left-position">
              Онлайн-замовлення послуг <br />
              аеропорту «Київ»
            </span>
            <button className="block__button block__button_left-position block__button_services">
              ДІЗНАТИСЯ БІЛЬШЕ
            </button>
          </div>
        </div>
        <div
          className="block__container block__container_top-position block__container_medium-size block__container_covid-testing"
          style={{ backgroundImage: `url(${CovidTesting})` }}
        >
          <div className="block__title block__title_right-position">
            <span className="text-right">
              ТЕСТУВАННЯ НА <br />
              COVID-19
            </span>
          </div>
          <div className="block__content block__content_right-top block__content_covid-testing">
            <span className="block__description block__description_right-position">
              Ви можете пройти тестування <br />
              24/7 у Терміналі А
            </span>
            <button className="block__button block__button_right-position block__button_covid-testing">
              ДІЗНАТИСЯ БІЛЬШЕ
            </button>
          </div>
        </div>
      </div>
      <div className="announcement__blocks">
        <div className="block__container block__container_bottom-position block__container_medium-size block__container_airlines-destinations">
          <div
            className="block__title block__title_left-position block__title_airlines-destinations"
            style={{ backgroundImage: `url(${AirlinesDestinations})` }}
          >
            <span className="text-left">
              АВІАКОМПАНІЇ ТА <br />
              НАПРЯМКИ
            </span>
          </div>
          <div className="block__content block__content_left-bottom block__content_airlines-destinations">
            <span className="block__description block__description_left-position">
              Список авіакомпаній та напрямків
            </span>
            <button className="block__button block__button_left-position block__button_airlines-destinations">
              ПЕРЕГЛЯНУТИ
            </button>
          </div>
        </div>
        <div className="block__container block__container_bottom-position block__container_medium-size block__container_vip-terminal">
          <div
            className="block__title block__title_right-position block__title_vip-terminal"
            style={{ backgroundImage: `url(${VipTerminal})` }}
          >
            <span className="text-right">VIP ТЕРМІНАЛ</span>
          </div>
          <div className="block__content block__content_right-bottom block__content_vip-terminal">
            <span className="block__description block__description_right-position">
              Ексклюзивні послуги Терміналу для
              <br /> VIP-клієнтів
            </span>
            <button className="block__button block__button_right-position block__button_vip-terminal">
              ТЕРМІНАЛ B
            </button>
          </div>
        </div>
      </div>
      <div className="announcement__blocks">
        <div
          className="block__container block__container_top-position block__container_wide-size block__container_mastercard-fastline"
          style={{ backgroundImage: `url(${MastercardFastline})` }}
        >
          <div className="block__title block__title_left-position block__title_mastercard-fastline">
            <span className="text-left">
              MASTERCARD <br /> FAST LINE
            </span>
          </div>
          <div className="block__content block__content_left-top block__content_mastercard-fastline">
            <span className="block__description block__description_left-position">
              Проходьте контроль без черги
            </span>
            <button className="block__button block__button_left-position block__button_mastercard-fastline">
              ДІЗНАТИСЯ БІЛЬШЕ
            </button>
          </div>
        </div>
        <div
          className="block__container block__container_top-position block__container_narrow-size block__container_information"
          style={{ backgroundImage: `url(${Information})` }}
        >
          <div className="block__title block__title_right-position">
            <span className="text-right">АВІАДОВІДКА</span>
          </div>
          <div className="block__content block__content_right-top block__content_information">
            <span className="block__description block__description_right-position">
              Телефонуйте в авіадовідку <br />
              +38 (044) 500 49 73
            </span>
            <button className="block__button block__button_right-position block__button_information">
              КОНТАКТИ
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Announcement;

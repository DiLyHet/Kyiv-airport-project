import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer-section">
        <div className="footer__main-info">
          <div className="footer__main-info-section">
            <div className="footer__main-info_container">
              <ul>
                <li className="footer__main-info_title">Пасажирам</li>
                <li className="footer__main-info_item">Розклад рейсів</li>
                <li className="footer__main-info_item">Замовлення послуг</li>
                <li className="footer__main-info_item">Контактна інформація</li>
                <li className="footer__main-info_item">
                  Політика конфіденційності
                </li>
                <li className="footer__main-info_item">
                  Форма відгуків та пропозицій
                </li>
              </ul>
            </div>
            <div className="footer__main-info_container">
              <ul>
                <li className="footer__main-info_title">Партнерам</li>
                <li className="footer__main-info_item">Головна</li>
                <li className="footer__main-info_item">Наземне обслуговування</li>
                <li className="footer__main-info_item">Характеристики аеродрому</li>
                <li className="footer__main-info_item">Учбовий центр</li>
                <li className="footer__main-info_item">Ваканciї</li>
              </ul>
            </div>
            <div className="footer__main-info_container">
              <ul>
                <li className="footer__main-info_title">Пресцентр</li>
                <li className="footer__main-info_item">Головна пресцентру</li>
                <li className="footer__main-info_item">Останні новини</li>
                <li className="footer__main-info_item">Соціальні та артпроекти</li>
                <li className="footer__main-info_item">Фінансова звітність</li>
                <li className="footer__main-info_item">
                  Статистика пасажиропотоку
                </li>
              </ul>
            </div>
          </div>

          <div className="footer__main-info_etc-container">
            <div className="footer__main-info_contacts">
              <span className="footer__main-info_title">Авіадовідка</span>
              <span className="footer__main-info_text">+38 (044) 500 49 73</span>
            </div>
            <div className="footer__main-info_media">
              <span className="footer__main-info_title">Приєднуйтесь до нас</span>
              <div className="footer__main-info_media-container">
                <i className="footer__main-info_icon fa-brands fa-facebook-f"></i>
                <i className="footer__main-info_icon fa-brands fa-twitter"></i>
                <i className="footer__main-info_icon fa-brands fa-instagram"></i>
                <i className="footer__main-info_icon fa-brands fa-youtube"></i>
                <i className="footer__main-info_icon fa-brands fa-linkedin-in"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__dev-info">
          <div className="footer__dev-info_copyright">
            <div className="footer__dev-info_text">
              © 2011-2021
              <br />
              Міжнародний аеропорт «Київ»
            </div>
            <div className="footer__dev-info_uig-part">
              <span className="footer__dev-info_text">
                Part of{" "}
                <b>
                  Ufuture
                  <br />
                  Investment Group
                </b>
              </span>
              <img
                className="footer__dev-info_uig-icon"
                src="./img/logo_white.png"
                alt=""
              />
            </div>
          </div>
          <div className="footer__dev-info_dev-part">
            <span className="footer__dev-info_text">Розробка сайту</span>
            <img
              className="footer__dev-info_dev-icon"
              src="./img/smplLogo.png"
              alt=""
            />
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;

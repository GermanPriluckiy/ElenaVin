import React from "react";
import vklogo from "../../images/vk_color_white.svg"
import utubelogo from "../../images/youtube-icon.svg"
import telegrammlogo from "../../images/telegram-logo.png"

const Footer = () => {
    return (
        <div className="footer">
        <div className="footer__links">
        <a className="footer__link" href="#"><img className="footer__social-icon" src={vklogo} alt="Вконтакте" />VKontakte</a>
        <a className="footer__link" href="#"><img className="footer__social-icon" src={utubelogo} alt="Ютуб" />YouTube</a>
        <a className="footer__link" href="#"><img className="footer__social-icon" src={telegrammlogo} alt="Телеграм" />Telegram</a>
        </div>
        </div>
    )
}

export default Footer;
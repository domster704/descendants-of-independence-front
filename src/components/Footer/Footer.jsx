import React, { useState } from 'react';
import * as style from './Footer.module.css';
import Wrapper from '../../components/UI/Wrapper/Wrapper';
import foterBg from './img/Ellipse 11.png';
import telegramm from './img/Group 770845.png';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation('footer');
    const [navTogle, setNavTogle] = useState(false);
    const [helperTogle, setHelperTogle] = useState(false);
    const togle = (value, setter) => {
        setter(!value);
    };
    const navigationLinks = t('navigationLinks', { returnObjects: true });
    const helpLinks = t('helpLinks', { returnObjects: true });
    return (
        <div className={style.footer}>
            <h1 className={style.hidden}>Footer</h1>
            <img className={style.foterBg} src={foterBg}/>
            <Wrapper>
                <div className={style.footer_top}>
                    <div className={style.footer_left}>
                        <nav style={{ width: '100%' }}>
                            <h2 className={style.footer_title}>{t('navigation')}</h2>
                            <button
                                className={style.mobile}
                                onClick={() => togle(navTogle, setNavTogle)}
                            >
                                {t('navigation')}
                                <svg
                                    className={navTogle ? null : style.rotate}
                                    width="14"
                                    height="9"
                                    viewBox="0 0 14 9"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M13.7108 1.20986C13.6178 1.11613 13.5072 1.04174 13.3854 0.990969C13.2635 0.940201 13.1328 0.914062 13.0008 0.914062C12.8688 0.914062 12.7381 0.940201 12.6162 0.990969C12.4944 1.04174 12.3838 1.11613 12.2908 1.20986L7.71079 5.78986C7.61783 5.88359 7.50723 5.95798 7.38537 6.00875C7.26351 6.05952 7.1328 6.08566 7.00079 6.08566C6.86878 6.08566 6.73807 6.05952 6.61622 6.00875C6.49436 5.95798 6.38376 5.88359 6.29079 5.78986L1.71079 1.20986C1.61783 1.11613 1.50723 1.04174 1.38537 0.990969C1.26351 0.940201 1.1328 0.914062 1.00079 0.914062C0.868781 0.914062 0.738075 0.940201 0.616216 0.990969C0.494356 1.04174 0.383755 1.11613 0.290792 1.20986C0.104542 1.39722 0 1.65067 0 1.91486C0 2.17905 0.104542 2.4325 0.290792 2.61986L4.88079 7.20986C5.44329 7.77166 6.20579 8.08722 7.00079 8.08722C7.79579 8.08722 8.55829 7.77166 9.12079 7.20986L13.7108 2.61986C13.897 2.4325 14.0016 2.17905 14.0016 1.91486C14.0016 1.65067 13.897 1.39722 13.7108 1.20986Z"
                                        fill="white"
                                    />
                                </svg>
                            </button>
                            <ul
                                className={`${navTogle ? style.list_type : style.hidden} ${
                                    style.list_type
                                }`}
                            >
                                {navigationLinks.map((link, index) => (
                                    <li key={index}>
                                        <Link to={link.url} download={link.fileName}>
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        <div className={style.custom_color}>
                            <h3 className={style.footer_title}>{t('help')}</h3>
                            <button
                                className={style.mobile}
                                onClick={() => togle(helperTogle, setHelperTogle)}
                            >
                                {t('help')}
                                <svg
                                    className={helperTogle ? null : style.rotate}
                                    width="14"
                                    height="9"
                                    viewBox="0 0 14 9"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M13.7108 1.20986C13.6178 1.11613 13.5072 1.04174 13.3854 0.990969C13.2635 0.940201 13.1328 0.914062 13.0008 0.914062C12.8688 0.914062 12.7381 0.940201 12.6162 0.990969C12.4944 1.04174 12.3838 1.11613 12.2908 1.20986L7.71079 5.78986C7.61783 5.88359 7.50723 5.95798 7.38537 6.00875C7.26351 6.05952 7.1328 6.08566 7.00079 6.08566C6.86878 6.08566 6.73807 6.05952 6.61622 6.00875C6.49436 5.95798 6.38376 5.88359 6.29079 5.78986L1.71079 1.20986C1.61783 1.11613 1.50723 1.04174 1.38537 0.990969C1.26351 0.940201 1.1328 0.914062 1.00079 0.914062C0.868781 0.914062 0.738075 0.940201 0.616216 0.990969C0.494356 1.04174 0.383755 1.11613 0.290792 1.20986C0.104542 1.39722 0 1.65067 0 1.91486C0 2.17905 0.104542 2.4325 0.290792 2.61986L4.88079 7.20986C5.44329 7.77166 6.20579 8.08722 7.00079 8.08722C7.79579 8.08722 8.55829 7.77166 9.12079 7.20986L13.7108 2.61986C13.897 2.4325 14.0016 2.17905 14.0016 1.91486C14.0016 1.65067 13.897 1.39722 13.7108 1.20986Z"
                                        fill="white"
                                    />
                                </svg>
                            </button>
                            <ul
                                className={`${helperTogle ? style.list_type : style.hidden}  ${
                                    style.list_type
                                }`}
                            >
                                {helpLinks.map((link, index) => (
                                    <li key={index}>
                                        <Link to={link.url}>{link.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className={style.footer_telegram}>
                        <img src={telegramm} alt="Telegram"/>
                        <a href="https://t.me/TauelsizdikUrpaktary_bot" target="_blank" className={style.telegram_link}>
                            {t('go_to_telegram')}
                        </a>
                    </div>
                </div>
                <div className={style.footer_bottom}>
                    <p className={style.desctop_text}>{t('independence_parks_2023')}</p>
                    <p className={style.mobile_text}>{t('mobile_privacy')}</p>
                    <a className={style.footer_polisy} href="#">
                        {t('privacy_policy')}
                    </a>
                </div>
            </Wrapper>
        </div>
    );
};

export default Footer;

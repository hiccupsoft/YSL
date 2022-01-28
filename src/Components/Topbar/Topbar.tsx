/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/no-redundant-roles */
import React from "react";
// import Logo from "../../assets/img/logo.svg"
import style from "./styles.module.css"

const Topbar = () => {
    return (
        <header className={style.header}>
            <div className="container">
                <div className={style.header_row}>
                    <div className={style.header_logo}>
                        <a href="/">
                            <svg width="187" height="48" viewBox="0 0 187 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.91289 15.1162L28.6893 6.99714L0.488647 -0.000976562L9.91289 15.1162Z" fill="url(#paint0_linear)">
                                </path>
                                <path d="M17.5635 27.46L9.90881 15.1533L28.6852 7.03418L17.5635 27.46Z" fill="url(#paint1_linear)">
                                </path>
                                <path d="M13.724 34.5021L0 12.5068L3.79532 33.5733L13.724 34.5021Z" fill="url(#paint2_linear)">
                                </path>
                                <path d="M13.7206 34.4649L3.79187 33.5361L6.38614 47.9567L13.7206 34.4649Z" fill="url(#paint3_linear)">
                                </path>
                                <path d="M35.6765 33.8158V8.75391L24.5868 29.1397L35.6765 33.8158Z" fill="url(#paint4_linear)">
                                </path>
                                <path d="M35.6764 33.8343L24.5867 29.1582L14.3457 47.9987L35.6764 33.8343Z" fill="url(#paint5_linear)">
                                </path>
                                <defs>
                                    <linearGradient id="paint0_linear" x1="-0.0406955" y1="1.01583" x2="24.9206" y2="13.9767" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#0EF0FE">
                                        </stop>
                                        <stop offset="1" stop-color="#D275F7">
                                        </stop>
                                    </linearGradient>
                                    <linearGradient id="paint1_linear" x1="19.402" y1="11.0483" x2="19.1187" y2="21.6434" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#7A87F7">
                                        </stop>
                                        <stop offset="1" stop-color="#D275F7">
                                        </stop>
                                    </linearGradient>
                                    <linearGradient id="paint2_linear" x1="2.01048" y1="23.6661" x2="11.4791" y2="38.6317" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#D275F7">
                                        </stop>
                                        <stop offset="1" stop-color="#7A87F7">
                                        </stop>
                                    </linearGradient>
                                    <linearGradient id="paint3_linear" x1="9.33472" y1="34.8247" x2="6.09033" y2="46.3123" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#D275F7">
                                        </stop>
                                        <stop offset="1" stop-color="#FA9D3E">
                                        </stop>
                                    </linearGradient>
                                    <linearGradient id="paint4_linear" x1="37.9226" y1="18.7805" x2="29.4545" y2="28.7532" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#D275F7">
                                        </stop>
                                        <stop offset="1" stop-color="#7A87F7">
                                        </stop>
                                    </linearGradient>
                                    <linearGradient id="paint5_linear" x1="17.4775" y1="48.5941" x2="35.6764" y2="28.2111" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#D275F7">
                                        </stop>
                                        <stop offset="1" stop-color="#0EF0FE">
                                        </stop>
                                    </linearGradient>
                                </defs>
                                <g id="logo-letters">
                                    <path d="M49.1989 8.76215C49.5924 8.76215 49.8785 8.90524 50.0574 9.19142L59.6087 22.1053L69.2316 9.19142C69.4104 8.90524 69.6966 8.76215 70.0901 8.76215H74.7763C74.9552 8.76215 75.0983 8.83369 75.1698 8.97678C75.2414 9.15564 75.2056 9.29873 75.0983 9.4776L62.2559 26.1476V33.016C62.2559 33.5526 62.0055 33.803 61.4689 33.803H57.6054C57.0689 33.803 56.7827 33.5526 56.7827 33.016V26.1476L44.0834 9.4776C43.9761 9.29873 43.9403 9.15564 44.0118 8.97678C44.0476 8.83369 44.1907 8.76215 44.4053 8.76215H49.1989Z" fill="white">
                                    </path>
                                    <path d="M101.637 8.76215C102.174 8.76215 102.424 9.01255 102.424 9.54914V12.9475C102.424 13.4841 102.174 13.7345 101.637 13.7345H83.7149C83.0352 13.7345 82.5344 13.9134 82.2482 14.2711C81.962 14.6289 81.8189 15.1297 81.8189 15.7378V16.9541C81.8189 18.2777 82.4271 18.9573 83.6791 18.9573H97.0939C99.1687 18.9573 100.743 19.4939 101.78 20.5313C102.817 21.6045 103.354 23.1427 103.354 25.1102V27.972C103.354 29.7249 102.853 31.12 101.816 32.1932C100.778 33.2664 99.2045 33.803 97.0223 33.803H77.2042C76.6677 33.803 76.3815 33.5526 76.3815 33.016V29.6176C76.3815 29.081 76.6677 28.8306 77.2042 28.8306H95.9849C96.6646 28.8306 97.1654 28.6517 97.4516 28.294C97.7378 27.9363 97.8809 27.4354 97.8809 26.8273V25.3606C97.8809 24.037 97.2727 23.3574 96.0207 23.3574H82.6059C80.5311 23.3574 78.9571 22.8208 77.9197 21.7476C76.8823 20.7102 76.3457 19.172 76.3457 17.2045V14.5931C76.3457 12.8402 76.8465 11.4451 77.8839 10.3719C78.9213 9.29874 80.4953 8.76215 82.6775 8.76215H101.637Z" fill="white">
                                    </path>
                                    <path d="M112.048 8.76215C112.584 8.76215 112.835 9.01255 112.835 9.54914V23.8224C112.835 24.7883 112.906 25.5753 113.085 26.1834C113.228 26.8273 113.478 27.3281 113.836 27.6859C114.194 28.0794 114.695 28.3298 115.267 28.4729C115.911 28.6517 116.662 28.7233 117.592 28.7233H132.08C132.617 28.7233 132.867 28.9737 132.867 29.5103V33.016C132.867 33.5526 132.617 33.803 132.08 33.803H117.378C115.553 33.803 114.015 33.6241 112.763 33.3022C111.511 32.9802 110.474 32.4078 109.687 31.6924C108.864 30.9054 108.291 29.9395 107.934 28.759C107.54 27.5428 107.361 26.0761 107.361 24.359V9.54914C107.361 9.01255 107.648 8.76215 108.184 8.76215H112.048Z" fill="white">
                                    </path>
                                    <path d="M140.268 28.7941C140.805 28.7941 141.055 29.0445 141.055 29.5811V33.0152C141.055 33.5518 140.805 33.8022 140.268 33.8022H136.762C136.226 33.8022 135.939 33.5518 135.939 33.0152V29.5811C135.939 29.0445 136.226 28.7941 136.762 28.7941H140.268Z" fill="white">
                                    </path>
                                    <path d="M176.648 8.76215C178.473 8.76215 180.011 8.94101 181.299 9.26296C182.551 9.62069 183.588 10.1573 184.411 10.9085C185.198 11.6597 185.77 12.6614 186.128 13.8419C186.486 15.0224 186.665 16.489 186.665 18.2061V24.359C186.665 26.0761 186.486 27.5428 186.128 28.759C185.77 29.9395 185.198 30.9054 184.411 31.6924C183.588 32.4078 182.551 32.9802 181.299 33.3022C180.011 33.6241 178.473 33.803 176.648 33.803H165.594C163.77 33.803 162.232 33.6241 160.98 33.3022C159.728 32.9802 158.69 32.4078 157.903 31.6924C157.081 30.9054 156.508 29.9395 156.15 28.759C155.757 27.5428 155.578 26.0761 155.578 24.359V18.2061C155.578 16.489 155.757 15.0224 156.15 13.8419C156.508 12.6614 157.081 11.6597 157.903 10.9085C158.69 10.1573 159.728 9.62069 160.98 9.26296C162.232 8.94101 163.77 8.76215 165.594 8.76215H176.648ZM161.051 23.9655C161.051 24.8956 161.123 25.6826 161.302 26.2907C161.445 26.9346 161.695 27.4354 162.053 27.7932C162.411 28.1867 162.912 28.4371 163.52 28.5802C164.128 28.759 164.879 28.8306 165.809 28.8306H176.434C177.364 28.8306 178.151 28.759 178.759 28.5802C179.367 28.4371 179.832 28.1867 180.19 27.7932C180.547 27.4354 180.798 26.9346 180.977 26.2907C181.12 25.6826 181.191 24.8956 181.191 23.9655V18.5996C181.191 17.6695 181.12 16.8825 180.977 16.2386C180.798 15.6305 180.547 15.1297 180.19 14.7362C179.832 14.3784 179.367 14.128 178.759 13.9492C178.151 13.8061 177.364 13.7345 176.434 13.7345H165.809C164.879 13.7345 164.128 13.8061 163.52 13.9492C162.912 14.128 162.411 14.3784 162.053 14.7362C161.695 15.1297 161.445 15.6305 161.302 16.2386C161.123 16.8825 161.051 17.6695 161.051 18.5996V23.9655Z" fill="white">
                                    </path>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M151.11 33.0124C151.11 33.545 150.847 33.8114 150.322 33.8114H146.459C145.91 33.8114 145.637 33.545 145.637 33.0124V17.7807C145.637 17.2481 145.91 16.9817 146.459 16.9817H150.322C150.847 16.9817 151.11 17.2481 151.11 17.7807V33.0124ZM145.637 9.54338C145.637 9.02855 145.91 8.76215 146.459 8.76215H150.322C150.847 8.76215 151.11 9.02855 151.11 9.54338V13.4489C151.11 13.9815 150.847 14.2301 150.322 14.2301H146.459C145.91 14.2301 145.637 13.9815 145.637 13.4489V9.54338Z" fill="white">
                                    </path>
                                </g>
                            </svg>
                        </a>
                    </div>
                    <button role="button" tabIndex={0} type="button" className={"ant-btn " + style.nav_icon}>
                        <span />
                        <span />
                        <span />
                        <span />
                    </button>
                    <nav className="Header_header__nav__2ub6P">
                        <ul className={style.header__nav__list}>
                            <li>
                                <a aria-current="page" className={style.header__nav__link_active + " " + style.header__nav__link} rel="HEADER.NAV.EARN_TITLE" href="/earn" >
                                    <span className={style.header__nav__link__item + style.header__nav__link__item_active} style={{ transitionDelay: '0.06s' }}>Earn</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://vote.ysl.io/#/" className={style.header__nav__link} target="_blank" rel="noreferrer">
                                    <span className={style.header__nav__link__item} style={{ transitionDelay: '0.04s' }}>Vote</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://docs.ysl.io/ysl-io/protocol/tokenomics" className={style.header__nav__link} target="_blank" rel="noreferrer">
                                    <span className={style.header__nav__link__item} style={{ transitionDelay: '0.02s' }}>Docs</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className={style.header__userBar}>
                        <div className={style.UserBar_userBar}>
                            <button className={style.UserBar_userBar__button} type="button">
                                <i className={style.icon + " " + style.icon_account + " " + style.UserBar_userBar__icon}>
                                </i>
                            </button>
                            <button className={style.UserBar_userBar__button} type="button">
                                <i className={style.icon + " " + style.icon_settings + " " + style.UserBar_userBar__icon}>
                                </i>
                            </button>
                            <button className={style.UserBar_userBar__button} type="button">
                                <i className={style.icon + " " + style.icon_more + " " + style.UserBar_userBar__icon}></i>
                            </button>
                        </div>
                        <div>
                            <button type="button" className={"ant-btn button-1 " + style.Wallet_wallet__btn + " big connect"}>
                                <span>Connect Wallet</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Topbar;
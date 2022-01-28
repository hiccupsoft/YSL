/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, useState } from "react";
import style from "../../assets/css/earn.module.css"

interface TabListProps {

}

const TabList: FC<TabListProps> = (props: TabListProps) => {

    const [expand, setExpand] = useState(false)

    const getContainerClassName = () => {
        if (!expand) return 'ant-collapse-item earn-collapse'
        else return 'ant-collapse-item ant-collapse-item-active earn-collapse'
    }

    const getItemClassName = () => {
        if (!expand) return 'ant-collapse-content ant-collapse-content-inactive ant-collapse-content-hidden'
        else return 'ant-collapse-content ant-collapse-content-active'
    }


    return (
        <div className={getContainerClassName()} onClick={() => setExpand(!expand)}>
            <div className="ant-collapse-header">
                <span className="ant-collapse-arrow">
                    <i className="icon-arrow_down">
                    </i>
                </span>
                <div className={style.table__header}>
                    <img src="/images/vaults/CAKE.svg" alt="CAKE" />
                    <div className={style.table__header__info}>
                        <p className={`${style.s_text} ${style.s_h6} ${style.s_weight_semibold} ${style.s_primary_color} ${style.table__title}`}>
                            CAKE
                        </p>
                        <div className={`${style.s_text} ${style.s_body3} ${style.s_secondary_color}`}>
                            PancakeSwap
                        </div>
                    </div>
                    <div className={style.table__info}>
                        <div className="EarnPage_EarnPage__table__balance__qMB8w">
                            <div className={`${style.s_text} ${style.s_body3} ${style.s_secondary_color}`}>
                                Wallet
                            </div>
                            <span className={`${style.s_text} ${style.s_body2} ${style.s_secondary_color} ${style.s_text_center} ${style.s_text_numbers} ${style.hoverColor}`}>0.00000
                            </span>
                            <div className="table__sub">
                                <div className={`${style.s_text} ${style.s_body3} ${style.s_secondary_color} ${style.s_text_numbers}`}>
                                    $0.00
                                </div>
                            </div>
                        </div>
                        <div className="EarnPage_EarnPage__table__deposit__3MzjZ">
                            <div className={`${style.s_text} ${style.s_body3} ${style.s_secondary_color}`}>
                                Balance
                            </div>
                            <span className={`${style.s_text} ${style.s_body2} ${style.s_secondary_color} ${style.s_text_center} ${style.s_text_numbers} ${style.hoverColor}`}>
                                0.00000
                            </span>
                            <div className="EarnPage_EarnPage__table__sub__DRxXM">
                                <div className={`${style.s_text} ${style.s_body3} ${style.s_secondary_color} ${style.s_text_center} ${style.s_text_numbers}`}>
                                    $0.00
                                </div>
                            </div>
                        </div>
                        <div className="EarnPage_EarnPage__table__daily__3YLXd">
                            <div className={`${style.s_text} ${style.s_body3} ${style.s_secondary_color}`}>
                                Daily
                            </div>
                            <span className={`${style.s_text} ${style.s_body2} ${style.s_secondary_color} ${style.s_text_numbers} ${style.hoverColor}`}>1.161%
                            </span>
                        </div>
                        <div>
                            <div className={`${style.s_text} ${style.s_body3} ${style.s_secondary_color}`}>APY
                            </div>
                            <span className={`${style.s_text} ${style.s_body2} ${style.s_weight_semibold} ${style.s_primary_color} ${style.s_text_numbers}`}>
                                527.197%
                            </span>
                        </div>
                        <div className="EarnPage_EarnPage__table__liquidity__1x_c2">
                            <div className={`${style.s_text} ${style.s_body3} ${style.s_secondary_color}`}>Liquidity
                            </div>
                            <span className={`${style.s_text} ${style.s_body2} ${style.s_secondary_color} ${style.s_text_numbers} ${style.hoverColor}`}>$70,207.85</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={getItemClassName()}>
                <div className="ant-collapse-content-box"><div className="EarnPage_EarnPage__table__content__1JJ6f">
                    <div className="EarnPage_EarnPage__table__content__forms__61FA5">
                        <div className="swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events vaults-slider">
                            <div className="swiper-pagination swiper-pagination-progressbar">
                                <span className="swiper-pagination-progressbar-fill" style={{transform: 'translate3d(0px, 0px, 0px) scaleX(1) scaleY(1)', transitionDuration: '300ms'}}>
                                </span>
                            </div>
                            <div className="swiper-wrapper" style={{transform: 'translate3d(0px, 0px, 0px)'}}>
                                <div className="swiper-slide swiper-slide-active" style={{width: 260, marginRight: 20}}>
                                    <div className={`${style.table__content__nav}`}>
                                        <div className={`${style.table__content__links}`}>
                                            <div className={`${style.s_text} ${style.s_body2} ${style.s_weight_bold}`}>
                                                <a href="https://pancakeswap.finance/swap?outputCurrency=0x0E685Ce0E2Ca95b23Ed5C1815cF6834D8af0948D" target="_blank" rel="noreferrer">
                                                    Buy CAKE
                                                    <i className="icon icon-arrow-angle-right">
                                                    </i>
                                                </a>
                                            </div>
                                            <div className={`${style.s_text} ${style.s_body2} ${style.s_weight_bold}`}>
                                                <a href="#">
                                                    How it works
                                                    <i className="icon icon-arrow-angle-right">
                                                    </i>
                                                </a>
                                            </div>
                                            <div className={`${style.s_text} ${style.s_body2} ${style.s_weight_bold}`}>
                                                <a href="https://bscscan.com/address/0xb02B424249F13B7b09551d5E7e236bFbfFc97697" target="_blank" rel="noreferrer">
                                                    Vault Contract
                                                    <i className="icon icon-arrow-angle-right">
                                                    </i>
                                                </a>
                                            </div>
                                            <div className={`${style.s_text} ${style.s_body2} ${style.s_weight_bold}`}>
                                                <a href="https://bscscan.com/address/0x73e989cc5E69c2254327a1bC317255EF9ADc6985" target="_blank" rel="noreferrer">
                                                    Farm Contract
                                                    <i className="icon icon-arrow-angle-right"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="EarnPage_EarnPage__table__content__yields__3QZzT">
                                            <div>
                                                <div className={`${style.s_text} ${style.s_small} ${style.s_primary_color}`}>Trading APR:</div>
                                                <span className={`${style.s_text} ${style.s_small} ${style.s_primary_color} ${style.s_text_numbers}`}>-</span>
                                            </div>
                                            <div>
                                                <div className={`${style.s_text} ${style.s_small} ${style.s_primary_color}`}>Farming APR: </div>
                                                <span className={`${style.s_text} ${style.s_small} ${style.s_primary_color} ${style.s_text_numbers}`}>42.34%</span>
                                            </div>
                                            <div>
                                                <div className={`${style.s_text} ${style.s_small} ${style.s_primary_color}`}>
                                                    Farming APY:
                                                </div>
                                                <span className={`${style.s_text} ${style.s_small} ${style.s_primary_color} ${style.s_text_numbers}`}>52.72%</span>
                                            </div>
                                            <div>
                                                <div className={`${style.s_text} ${style.s_small} ${style.s_primary_color}`}>Multiplier APY:
                                                </div>
                                                <span className={`${style.s_text} ${style.s_small} ${style.s_primary_color} ${style.s_text_numbers}`}>
                                                    527.20%
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide swiper-slide-next" style={{width: 260, marginRight: 20}}>
                                    <div>
                                        <form id="deposit" className="ant-form ant-form-horizontal earn__form">
                                            <div className="earn__form__item">
                                                <div className="ant-row ant-form-item" style={{rowGap: 0}}>
                                                    <div className="ant-col ant-form-item-label">
                                                        <label className="ant-form-item-required ant-form-item-no-colon" title="">
                                                            <span title="Deposit Fee: 0%">Deposit: <span className="NumberFont">0.00000</span>
                                                                CAKE</span>
                                                        </label>
                                                    </div>
                                                    <div className="ant-col ant-form-item-control">
                                                        <div className="ant-form-item-control-input">
                                                            <div className="ant-form-item-control-input-content">
                                                                <div className="ant-input-number inputButton NumberFont">
                                                                    <div className="ant-input-number-handler-wrap">
                                                                        <span unselectable="on" role="button" aria-label="Increase Value" aria-disabled="false" className="ant-input-number-handler ant-input-number-handler-up">
                                                                            <span role="img" aria-label="up" className="anticon anticon-up ant-input-number-handler-up-inner">
                                                                            </span>
                                                                        </span>
                                                                        <span unselectable="on" role="button" aria-label="Decrease Value" aria-disabled="false" className="ant-input-number-handler ant-input-number-handler-down">
                                                                            <span role="img" aria-label="down" className="anticon anticon-down ant-input-number-handler-down-inner">
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                    <div className="ant-input-number-input-wrap">
                                                                        <input step="1" placeholder="0" id="deposit_depositAmount" className="ant-input-number-input" value="" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button type="button" className="ant-btn earn__form__max">
                                                    <span>Max</span>
                                                </button>
                                            </div>
                                            <div className="ant-row ant-form-item" style={{rowGap: 0}}>
                                                <div className="ant-col ant-form-item-control">
                                                    <div className="ant-form-item-control-input">
                                                        <div className="ant-form-item-control-input-content">
                                                            <button disabled type="submit" className="ant-btn ant-btn-primary button-1">
                                                                <span>Deposit</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={`${style.table__content__fee}`}>
                                                <div className={`${style.s_text} ${style.s_small} ${style.s_primary_color} ${style.s_text_center} ${style.s_text_numbers}`}>
                                                    Deposit Fee: 0%
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="swiper-slide" style={{width: 260, marginRight: 20}}>
                                    <div>
                                        <form id="withdraw" className="ant-form ant-form-horizontal earn__form">
                                            <div className="earn__form__item">
                                                <div className="ant-row ant-form-item" style={{rowGap: '0px'}}>
                                                    <div className="ant-col ant-form-item-label">
                                                        <label className="ant-form-item-required ant-form-item-no-colon" title="">
                                                            <span title="Withdrawal Fee: 0%">Withdraw:
                                                                <span className="NumberFont">0.00000</span>
                                                                CAKE</span>
                                                        </label>
                                                    </div>
                                                    <div className="ant-col ant-form-item-control">
                                                        <div className="ant-form-item-control-input">
                                                            <div className="ant-form-item-control-input-content">
                                                                <div className="ant-input-number inputButton NumberFont">
                                                                    <div className="ant-input-number-handler-wrap">
                                                                        <span unselectable="on" role="button" aria-label="Increase Value" aria-disabled="false" className="ant-input-number-handler ant-input-number-handler-up">
                                                                            <span role="img" aria-label="up" className="anticon anticon-up ant-input-number-handler-up-inner">
                                                                            </span>
                                                                        </span>
                                                                        <span unselectable="on" role="button" aria-label="Decrease Value" aria-disabled="false" className="ant-input-number-handler ant-input-number-handler-down">
                                                                            <span role="img" aria-label="down" className="anticon anticon-down ant-input-number-handler-down-inner">
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                    <div className="ant-input-number-input-wrap">
                                                                        <input placeholder="0" id="withdraw_withdrawAmount" className="ant-input-number-input" value="" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button type="button" className="ant-btn earn__form__max">
                                                    <span>Max</span>
                                                </button>
                                            </div>
                                            <div className="ant-row ant-form-item" style={{rowGap: 0}}>
                                                <div className="ant-col ant-form-item-control">
                                                    <div className="ant-form-item-control-input">
                                                        <div className="ant-form-item-control-input-content">
                                                            <button disabled type="submit" className="ant-btn ant-btn-primary button-1">
                                                                <span>Withdraw</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={`${style.table__content__fee}`}>
                                                <div className={`${style.s_text} ${style.s_small} ${style.s_primary_color} ${style.s_text_center} ${style.s_text_numbers}`}>Withdrawal Fee: 0%</div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="swiper-slide" style={{width: 260, marginRight: 20}}>
                                    <div className={`${style.table__content__controls}`}>
                                        <span className={`${style.s_text} ${style.s_body2} ${style.s_primary_color} ${style.table__content__tooltip}`}>
                                            sYSL Rewards
                                            <i className="icon icon-exclamation">
                                            </i>
                                        </span>
                                        <div className={`${style.table__content__rewards}`}>
                                            <span className={`${style.s_text} s_h6__TYu-o s_weight-semibold__2lhBJ ${style.s_text_center} ${style.s_text_numbers}`}>$0.00</span>
                                            <div className={`${style.s_text} ${style.s_small} ${style.s_secondary_color} ${style.s_text_center} ${style.s_text_numbers}`}>
                                                <div className={`${style.table__content__rewards__row}`}>
                                                    <div className={`${style.table__content__rewards__row__item}`}>
                                                        <img src="/images/vaults/CAKE.svg" alt="CAKE" />
                                                            0.00000
                                                    </div>
                                                    <div className={`${style.table__content__rewards__row__item}`}>
                                                        <img src="/static/media/ysl.455a44da.svg" alt="sYSL" />
                                                            0.00000</div>
                                                </div>
                                            </div>
                                        </div>
                                        <button disabled type="button" className="ant-btn button-1">
                                            <span>
                                                HARVEST
                                            </span>
                                        </button>
                                        <div className={`${style.s_text} ${style.s_small} ${style.s_primary_color} ${style.s_text_center} ${style.s_text_numbers}`}>
                                            Performance Fee: 0%
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default TabList


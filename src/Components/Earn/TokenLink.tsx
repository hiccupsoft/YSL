import React, { FC } from "react";
import style from "../../assets/css/earn.module.css"

interface TokenLinkComponentProps {
    value1: string
    value2: string
    subTitle1: string
    subTitle2: string
    href?: string
}

const TokenLinkComponent: FC<TokenLinkComponentProps> = (props: TokenLinkComponentProps) => {
    return (
        <a className={style.tokens__link} href={props.href} target="_blank" rel="noreferrer">
            <div className={style.Prices__tokens}>
                <div className={style.tokens__item}>
                    <img src="/static/media/ysl.455a44da.svg" alt="" />
                    <div>
                        <div className={`${style.s_text} ${style.s_h6} ${style.s_weight_semibold} ${style.s_text_numbers}`}>&lt; ${props.value1}
                        </div>
                        <span className={`${style.s_text} ${style.s_small} ${style.s_secondary_color}`}>{props.subTitle1}</span>
                    </div>
                </div>
                <div className={style.tokens__item}>
                    <img src="/static/media/ysl.455a44da.svg" alt="logo" />
                    <div>
                        <div className={`${style.s_text} ${style.s_h6} ${style.s_weight_semibold} ${style.s_text_numbers}`}>${props.value2}</div>
                        <span className={`${style.s_text} s_small ${style.s_secondary_color}`}>{props.subTitle2}</span>
                    </div>
                </div>
            </div>
        </a>
    )
}

export default TokenLinkComponent


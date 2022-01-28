import React, { FC } from "react";
import style from "../../assets/css/earn.module.css"

interface PriceBalanceProps {
    value1: string
    value2: string
    subTitle1: string
    subTitle2: string
}

const PriceBalance: FC<PriceBalanceProps> = (props: PriceBalanceProps) => {
    return (
        <div className={style.balances}>
            <div className={style.balances__row}>
                <div className={`${style.s_text} ${style.s_body2} ${style.s_secondary_color}`}>{props.subTitle1}</div>
                <div className={`${style.s_text} ${style.s_body2} ${style.s_secondary_color} ${style.s_text_numbers}`}>{props.value1}</div>
            </div>
            <div className={style.balances__row}>
                <div className={`${style.s_text} ${style.s_body2} ${style.s_secondary_color}`}>{props.subTitle2}</div>
                <div className={`${style.s_text} ${style.s_body2} ${style.s_secondary_color} ${style.s_text_numbers}`}>{props.value2}</div>
            </div>
        </div>
    )
}

export default PriceBalance


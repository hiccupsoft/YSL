import React, { FC } from "react";
import style from "../../assets/css/earn.module.css"

interface PriceTitleComponentProps {
    value: string
    subTitle: string
    totalFee?: number
}

const PriceTitleComponent: FC<PriceTitleComponentProps> = (props: PriceTitleComponentProps) => {
    return (
        <li className={style.PriceTiles__tile}>
            <div className="ant-row ant-row-space-between" style={{rowGap: 0}}>
                <div className={style.tile__card}>
                    <div className={`${style.s_text} ${style.s_h3} ${style.s_weight_bold} ${style.s_primary_color} ${style.s_text_numbers} ${style.tile__amount} Gradient-text`}>
                        ${props.value}
                    </div>
                    <div className={style.tile__title}>
                        <div className={`${style.s_text} ${style.s_body3} ${style.s_secondary_color}`}>{props.subTitle}</div>
                        <span className={`${style.s_text} ${style.s_body3} ${style.s_web3_color} ${style.s_text_numbers}`}>
                            <span className={`${style.s_text} ${style.s_body3} ${props.totalFee?(props.totalFee>0?style.s_web3_color:style.s_error_color): ''}`}>
                                {props.totalFee?(props.totalFee > 0 ? `+${props.totalFee}%` : `${props.totalFee}%`) : ''}
                            </span>
                        </span>
                    </div>
                </div>
                <div className={style.tile__tooltip}>
                    <i className="icon icon-exclamation" />
                </div>
            </div>
        </li>
    )
}

export default PriceTitleComponent


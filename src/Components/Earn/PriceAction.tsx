import React, { FC } from "react";
import style from "../../assets/css/earn.module.css"

interface PriceActionProps {
    value: string
    subTitle: string
    buttonName: string;
}

const PriceAction: FC<PriceActionProps> = (props: PriceActionProps) => {
    return (
        <div className={style.actions}>
            <div>
                <div className={`${style.s_text} ${style.s_h6} ${style.s_weight_semibold} ${style.s_secondary_color} ${style.s_text_numbers} Prices_Prices__actions__tooltip__1VMEG`}>
                    ${props.value}<i className="icon icon-exclamation"></i>
                </div>
                <span className={`${style.s_text} ${style.s_small} ${style.s_secondary_color} ${style.s_text_numbers}`}>{props.subTitle}</span>
            </div>
            <button disabled type="button" className="ant-btn button-1 big">
                <span>{props.buttonName}</span>
            </button>
        </div>

    )
}

export default PriceAction


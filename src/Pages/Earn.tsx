import React from "react";
import style from "../assets/css/earn.module.css"
import ActiveValue from "../Components/Earn/ActiveValue";
import Position from "../Components/Earn/Position";
import PriceAction from "../Components/Earn/PriceAction";
import PriceBalance from "../Components/Earn/PriceBalance";
import PriceTitleComponent from "../Components/Earn/PriceTitleComponent";
import TabList from "../Components/Earn/TabList";
import TokenLinkComponent from "../Components/Earn/TokenLink";

const Earn = () => {
    return (
        <main>
            <div className={style.EarnPage_EarnPage}>
                <div className="container">
                    <div className={style.PriceTiles_PriceTiles}>
                        <ul className={style.PriceTiles}>
                            <PriceTitleComponent
                                value="0.15"
                                subTitle="sYSL Protocol Price"
                            />
                            <PriceTitleComponent
                                value="0.15"
                                subTitle="Total Locked Liquidity"
                                totalFee={0.62}
                            />
                            <PriceTitleComponent
                                value="0.15"
                                subTitle="Total Value Locked"
                                totalFee={-0.06}
                            />
                        </ul>
                    </div>
                    <div className={style.PricesContainer}>
                        <TokenLinkComponent
                            value1="0.00001"
                            value2="1,098.43"
                            subTitle1="sYSL token price"
                            subTitle2="sYSL marketcap"
                            href="https://coinmarketcap.com/currencies/ysl-sysl/"
                        />
                        <PriceBalance
                            value1="0.00000"
                            value2="0.00000"
                            subTitle1="sYSL Locked Balance"
                            subTitle2="sYSL Available Balance"
                        />
                        <PriceAction
                            value="0.00"
                            subTitle="0.00000 sYSL"
                            buttonName="Harvest All"
                        />
                    </div>
                    <div className={style.PricesContainer}>
                        <TokenLinkComponent
                            value1="0.00001"
                            value2="1,098.43"
                            subTitle1="sYSL token price"
                            subTitle2="sYSL marketcap"
                            href="https://coinmarketcap.com/currencies/ysl-sysl/"
                        />
                        <PriceBalance
                            value1="0.00000"
                            value2="0.00000"
                            subTitle1="sYSL Locked Balance"
                            subTitle2="sYSL Available Balance"
                        />
                        <PriceAction
                            value="0.00000 sYSL"
                            subTitle="0.00000/0.0000"
                            buttonName="Withdraw"
                        />
                    </div>
                    <Position />
                    <div className={style.userPools}>
                        <div className={style.infoBox}>
                            <div>
                                <i className="icon icon-exclamation">
                                </i>
                                <span className={`${style.s_text} ${style.s_body2}`}>
                                    Your active vault positions will be shown here upon your wallet connection
                                </span>
                            </div>
                        </div>
                    </div>
                    <ActiveValue />
                    <div className="ant-tabs ant-tabs-top earn-tabs" >
                        <div className="ant-tabs-content-holder">
                            <div className="ant-tabs-content ant-tabs-content-top">
                                <div className="ant-tabs-tabpane ant-tabs-tabpane-active">
                                    <div className="ant-collapse ant-collapse-icon-position-right earn-collapse">
                                        <TabList />
                                        <TabList />
                                        <TabList />
                                        <TabList />
                                        <TabList />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Earn;
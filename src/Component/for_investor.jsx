import React, { Component } from 'react';
import "./../Css/main.css"


class ForInvestor extends Component {
    render() {
        return <div
            id='for_investor'
            className="pt-5"
            style={{ marginRight: "5em" }}
        >
            <span className="heading_1">VCs and Investors: How RiskLink's Dashboard Can Help You Manage Your Crypto Portfolio</span>

            <p className="p_text pt-5">
                Dfuse's custom dashboard helps investors track their tokens and monitor for potential risks and opportunities.
                <br />
                <br />
                <ol>
                    <li>Tracks over 100 risk parameters on the blockchain and scans social media for relevant information.</li>
                    <li>Provides real-time alerts and analysis to help you make informed decisions.</li>
                    <li>Alerts for any hacks in the smart contracts you are exposed to.</li>
                    <li>Monitors VC selling and platform withdrawal activity.</li>
                    <li>Provides analysis of the token's volatility compared to the market.</li>
                    <li>Trust Dfuse to be your partner in managing your crypto investments and maximizing your rewards.</li>
                </ol>
            </p>
        </div >
    }
}

export default ForInvestor;
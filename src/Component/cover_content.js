import React, { Component } from 'react';
import "./../Css/main.css"


class CoverContent extends Component {
    render() {
        return <div>
            <br />
            <br />

            <span className="heading1">Hi! We're RiskLink</span>
            <p>
                <br />
                <span className="heading2" >Personal risk analyst for all thing crypto.</span>
                <br />
                <br />
                <span className="p_text">
                    RiskLink is a service that provides on-chain risk scoring for Defi protocols.
                    Our goal is to make Defi a safe place for users and to enable protocol developers to
                    focus on building the best user experience possible.
                    <br />
                    <br />
                    <span className="heading3" >RisKLink provides a valuable tool for protocols to manage
                        risks and make informed decisions about the assets they support dynamically.</span>
                </span>
            </p>
            <br />
            <br />
            <div className="row">
                <div className="col-6">
                    <a
                        href="#for_investor"
                    >
                        <button type="button" className="button-1">Investor</button>
                    </a>
                </div>
                <div className="col-6 text-right" style={{ alignItems: "right" }}>
                    <a
                        href="#for_protocol"
                    >
                        <button type="button" className="button-1">Protocol</button>
                    </a>
                </div>
            </div>
        </div>
    }
}

export default CoverContent;
import React, { Component } from 'react';
import "./../Css/main.css"

class Teams extends Component {
    render() {
        return <div
            id='Teams'
            // className="row"
            style={{ marginRight: "5em" }}
        >
            <span className="heading1">Teams</span>
            <p
                className="p_text2"
            >
                <br />
                <br />

                Dfuse is built by a quant firm with years of experience in the financial industry.
                Our team has worked on equity quant desks in London and San Francisco,
                and has spent several years in the risk department of a macro hedge fund in London.
                This experience has given us a deep understanding of stress testing and risk management,
                which we use to develop innovative solutions for the crypto industry. Our modular, lean,
                and cost-effective approach sets us apart from other market players, making us
                the perfect partner for your crypto investments. Trust our team of experts to
                help you navigate the volatile world of crypto and maximize your rewards.
            </p>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <div className="row">
                <div className="col-12 text-center">
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSdBqpPBNRXcj9HKvXwfbzyDIYG_oTPXSlR59flvsKJhgm-xkA/viewform"
                        target="_blank"
                    >
                        <button type="button" className="button-1">Contact Us</button>
                    </a>
                </div>
            </div>
        </div>
    }
}

export default Teams;

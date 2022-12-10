import React, { Component } from 'react';
import "./../Css/main.css"


class ForProtocols extends Component {
    render() {
        return <div
            id='for_protocol'
            className="pt-5"
            style={{ marginRight: "5em" }}
        >
            <span className="heading_1">Protocols: How RiskLink Can Help You Achieve Maximum Utility</span>

            <p className="p_text pt-5">
                RisKLink provides a valuable tool for protocols to manage
                risks and make informed decisions about the assets they support dynamically.
                <br />
                <br />
                {/* <ol>
                    <li>Modular, lean, and cost-effective approach sets us apart from other market players.</li>
                    <li>Expertise in stress testing and incentive optimization to help your protocol achieve maximum utility.</li>
                    <li>Dynamic stress testing adjusts to market conditions for optimal LTV, lending and borrow rates.</li>
                    <li>Incentive optimization uses data from competitors, pool volume distribution, and other factors.</li>
                    <li>Trust Dfuse to help your protocol succeed in the fast-paced world of crypto.</li>

                </ol> */}
            </p>
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
        </div >
    }
}

export default ForProtocols;
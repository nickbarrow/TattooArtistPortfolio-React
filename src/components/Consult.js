import React, { Component } from "react";

export default class Consult extends Component {
    render() {
        return (
            <div id="consultation" className="page consultation__container">
                <div className="consultation__heading">
                    <img
                        src="https://uploads.codesandbox.io/uploads/user/a2880d96-f7ee-4434-bd51-6e6f7bdc7309/xdZ1-gold-tattoo.png"
                        alt="Heading Icon"
                    />
                    <h1>Schedule an appointment or consultation</h1>
                    <h2>
                        Let's make your tattoo dreams come true. I'll sit down
                        with you and discuss your ideas and inspirations to make
                        sure we make your piece your own. I'll help guide you
                        and explain the process and expectations. Newbies
                        welcome!
                    </h2>

                    <div className="consult__form">
                        <div className="consult__header">
                            <h1>Book a Consultation</h1>
                        </div>
                        <form>
                            <input
                                type="text"
                                placeholder="First Name"
                                name="First Name"
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                name="Last Name"
                            />
                            <input
                                type="text"
                                placeholder="Phone #"
                                name="Phone"
                            />
                            <input
                                type="text"
                                placeholder="Email Address"
                                name="Email"
                            />
                            <div className="consult__send-container">
                                <button
                                    className="tButton submit"
                                    type="submit">
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="portfolio__examples"></div>
            </div>
        );
    }
}

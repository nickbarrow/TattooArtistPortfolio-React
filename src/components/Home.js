import React, { Component } from "react";
import { Link } from "react-scroll";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false
        };
    }
    render() {
        return (
            <div className="page home__container">
                <div className="home__center">
                    <div className="logo__container">
                        <img
                            src="https://uploads.codesandbox.io/uploads/user/a2880d96-f7ee-4434-bd51-6e6f7bdc7309/DSH3-Tattoo+Logo.png"
                            alt="Logo"
                        />
                    </div>
                    <div className="home__link-container">
                        <Link
                            className="tButton"
                            to="portfolio"
                            smooth={true}
                            duration={500}>
                            Portfolio
                        </Link>
                        <Link
                            className="tButton"
                            to="consultation"
                            smooth={true}
                            duration={500}>
                            Schedule a Consultation
                        </Link>
                        <Link
                            className="tButton"
                            to="map"
                            smooth={true}
                            duration={500}>
                            See Map
                        </Link>
                        <Link
                            className="tButton"
                            to="credits"
                            smooth={true}
                            duration={500}>
                            Photo/Icon Creds
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

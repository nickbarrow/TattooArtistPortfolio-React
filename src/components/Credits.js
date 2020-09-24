import React, { Component } from "react";

export default class Credits extends Component {
    render() {
        return (
            <div id="credits" className="page credits__container">
                <div className="credits__center">
                    <img
                        src="https://uploads.codesandbox.io/uploads/user/a2880d96-f7ee-4434-bd51-6e6f7bdc7309/Jc5R-hand.png"
                        alt="Credits Icon"
                    />
                    <h1>Thanks to the following for the free resources!</h1>
                    <div className="credits-main">
                        <ul>
                            <li>Icons:</li>
                            <li>
                                Thank you to{" "}
                                <a href="https://www.flaticon.com/">
                                    flaticon.com
                                </a>{" "}
                                for the header icons!
                            </li>
                        </ul>
                        <ul>
                            <li>Backgrounds:</li>
                            <li>
                                Thanks to the following users on{" "}
                                <a href="https://www.unsplash.com">Unsplash</a>:
                                <ul>
                                    <li></li>
                                    <li>
                                        Kristian Angelo{" "}
                                        <a href="https://unsplash.com/@kristiangdia">
                                            @kristiangdia
                                        </a>
                                    </li>
                                    <li>
                                        Old Youth{" "}
                                        <a href="https://unsplash.com/@oldyouth">
                                            @oldyouth
                                        </a>
                                    </li>
                                    <li>
                                        Chang Hsien{" "}
                                        <a href="https://unsplash.com/@bonneville1983">
                                            @bonneville1983
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

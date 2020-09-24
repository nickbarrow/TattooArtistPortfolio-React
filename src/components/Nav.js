import React, { Component } from "react";
import Scroll from "react-scroll";
var scroll = Scroll.animateScroll;

export default class Nav extends Component {
    render() {
        return (
            <div className="nav">
                <img
                    className="nav-img"
                    src="https://uploads.codesandbox.io/uploads/user/a2880d96-f7ee-4434-bd51-6e6f7bdc7309/4UsH-diamond.png"
                    alt="Home Icon"
                    onClick={() => {
                        scroll.scrollToTop({ duration: 500 });
                    }}
                />
                <div className="nav-controls"></div>
            </div>
        );
    }
}

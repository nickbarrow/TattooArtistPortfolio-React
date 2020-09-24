import React, { Component } from "react";
import InstagramEmbed from "react-instagram-embed";

export default class Portfolio extends Component {
    render() {
        return (
            <div id="portfolio" className="page portfolio__container">
                <div className="portfolio__heading">
                    <img
                        src="https://uploads.codesandbox.io/uploads/user/a2880d96-f7ee-4434-bd51-6e6f7bdc7309/Nwzy-chest.png"
                        alt="Tattoo Icon"
                    />
                    <h1>The spookiest artist in town!</h1>
                    <h2>
                        We value cleanliness and comfort, and strive to provide
                        the cleanest and friendliest tattooing experience
                        possible in the area.
                    </h2>
                </div>
                <div className="portfolio__examples">
                    <div className="portfolio__column">
                        <InstagramEmbed
                            url="https://www.instagram.com/p/CEKTpdslk2d/"
                            maxWidth={320}
                            hideCaption={true}
                            containerTagName="div"
                        />

                        <InstagramEmbed
                            url="https://www.instagram.com/p/B6zIya9FEaq/"
                            maxWidth={320}
                            hideCaption={true}
                            containerTagName="div"
                        />
                    </div>

                    <div className="portfolio__column">
                        <InstagramEmbed
                            url="https://www.instagram.com/p/B3hJ_NjFOsd/"
                            maxWidth={320}
                            hideCaption={true}
                            containerTagName="div"
                        />
                        <InstagramEmbed
                            url="https://www.instagram.com/p/CBg1iidlm65/"
                            maxWidth={320}
                            hideCaption={true}
                            containerTagName="div"
                        />
                    </div>

                    <div className="portfolio__column">
                        <InstagramEmbed
                            url="https://www.instagram.com/p/B-S12cGF9XB/"
                            maxWidth={320}
                            hideCaption={true}
                            containerTagName="div"
                        />
                        <InstagramEmbed
                            url="https://www.instagram.com/p/B-Cmwa3FsaV/"
                            maxWidth={320}
                            hideCaption={true}
                            containerTagName="div"
                        />
                    </div>

                    <div className="portfolio__column">
                        <InstagramEmbed
                            url="https://www.instagram.com/p/B12TANJlyUp/"
                            maxWidth={320}
                            hideCaption={true}
                            containerTagName="div"
                        />
                        <InstagramEmbed
                            url="https://www.instagram.com/p/BzVmxV9Fdth/"
                            maxWidth={320}
                            hideCaption={true}
                            containerTagName="div"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

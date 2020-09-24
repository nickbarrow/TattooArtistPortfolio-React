import React, { Component } from "react";

export default class Map extends Component {
    render() {
        return (
            <div id="map" className="page map__container">
                <div className="map__center">
                    <img
                        src="https://uploads.codesandbox.io/uploads/user/a2880d96-f7ee-4434-bd51-6e6f7bdc7309/iKam-tattoo2.png"
                        alt="Shop Icon"
                    />
                    <h1>Stop by Tattoo Parlor on Main St. and see the shop!</h1>

                    <div class="map-outer">
                        <div class="gmap-canvas">
                            <iframe
                                title="Tattoo Map"
                                width="100%"
                                height="500"
                                id="gmap_canvas"
                                src="https://maps.google.com/maps?q=dark%20horse%20fort%20wayne&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                frameborder="0"
                                scrolling="no"
                                marginheight="0"
                                marginwidth="0"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

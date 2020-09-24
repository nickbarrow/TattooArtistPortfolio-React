import React from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Consult from "./components/Consult";
import Map from "./components/Map";
import Credits from "./components/Credits";
import "./styles.scss";

export default function App() {
    return (
        <div className="App">
            <Nav />
            <Home />
            <Portfolio />
            <Consult />
            <Map />
            <Credits />
        </div>
    );
}

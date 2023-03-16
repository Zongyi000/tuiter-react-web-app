import React from "react";
import "./index.css";
import TuitsList from "../tuits/TuitsList";
import WhatsHappening from "./whats-happening";


const HomeComponent = () => {
    return(
        <>
            <h4>Home</h4>
            <WhatsHappening/>
            <TuitsList/>
        </>


    );
};
export default HomeComponent;
import React from "react";
import "./index.css";
import PostList from "../post-list/index.js";


const HomeComponent = () => {
    return(
        <div className="row mt-2">

            <PostList />

        </div>

    );
};
export default HomeComponent;
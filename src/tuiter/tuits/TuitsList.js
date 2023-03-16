import React from "react";
// import posts from "./posts.json";
import {useSelector} from "react-redux";
import TuitItem from "./TuitItem.js";

const PostList = () => {
    const tuitsArray = useSelector(state => state.tuits)
    return (
        <ul className="list-group">
            {
                tuitsArray.map(tuit =>
                    <TuitItem key={tuit._id} tuit={tuit}/>
                )
            }
        </ul>
    );

}
export default PostList;

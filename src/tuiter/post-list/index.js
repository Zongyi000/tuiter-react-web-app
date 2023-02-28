import React from "react";
import posts from "./posts.json";
import PostItem from "./post-item.js";

const PostList = () => {
    return (

        <ul className="list-group">
            {
                posts.map(post =>
                    <PostItem key={post._id} post={post}/> )
            }
        </ul>
    );

}
export default PostList;

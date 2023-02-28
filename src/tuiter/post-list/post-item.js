import React from "react";

const PostItem = (
{
    post = {
        "_id": 123,
        "topic": "Space",
        "userName": "SpaceX",
        "time": "2h",
        "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
        "image": "tesla.png"
    }
}
) => {
    return(
        <li className="home-center">


            <img alt="" src={post.avatarIcon} className="avatar" />
            <div className="follow-avatar">
                <div className="wd-post-user">
                    <h6 className="margin-left-4px">{post.userName}</h6>
                    <i className="bi bi-patch-check-fill margin-left-4px"></i>
                    <div className="margin-left-4px">@{post.handle}</div>
                    <i className="fa fa-circle margin-left-4px"></i>
                    <span className="wd-tweets margin-left-4px">{post.time}</span>
                </div>


                <div className="wd-section">
                    <h2 className="wd-author-title">{post.title}</h2>
                </div>

                <img alt="" src={post.image} className="wd-home-center-image"/>
                <p>{post.content}</p>

                <div className="home-bottom">
                    <a className="list-group-item new-list-group-item" href="/">
                        <i className="bi bi-chat home-bottom-icon">{post.comments}</i></a>
                    <a className="list-group-item new-list-group-item" href="/">
                        <i className="bi bi-arrow-left-right home-bottom-icon">{post.tweets}</i></a>
                    <a className="list-group-item new-list-group-item" href="/">
                        <i className="bi bi-heart home-bottom-icon">{post.likes}</i></a>
                    <a className="list-group-item new-list-group-item" href="/">
                        <i className="bi bi-forward home-bottom-icon"></i></a>
                </div>

                <button className="home-show">Show this thread</button>
            </div>
        </li>
    );
};


export default PostItem;
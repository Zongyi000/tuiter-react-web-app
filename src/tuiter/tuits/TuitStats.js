import React from "react";

const TuitStats = (
    {
        tuit = {
            "_id": 2,
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "tesla.png"
        }
    }
) => {
    return (
        <div className="home-bottom">
            <a className="list-group-item new-list-group-item" href="/">
                <i className="bi bi-chat home-bottom-icon">{tuit.replies}</i></a>
            <a className="list-group-item new-list-group-item" href="/">
                <i className="bi bi-arrow-left-right home-bottom-icon">{tuit.retuits}</i></a>

            {tuit.liked ? <a className="list-group-item new-list-group-item" href="/">
                <i className="bi bi-heart-fill home-bottom-icon-red">{tuit.likes + 1}</i></a> :
                <a className="list-group-item new-list-group-item" href="/">
                <i className="bi bi-heart home-bottom-icon">{tuit.likes}</i></a>}

            <a className="list-group-item new-list-group-item" href="/">
                <i className="bi bi-forward home-bottom-icon"></i></a>
        </div>
    );
}

export default TuitStats
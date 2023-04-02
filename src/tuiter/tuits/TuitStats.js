import React from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";

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
    const dispatch = useDispatch();
    return (
        <div className="home-bottom">
            <a className="list-group-item new-list-group-item" href="/">
                <i className="bi bi-chat home-bottom-icon">{tuit.replies}</i></a>
            <a className="list-group-item new-list-group-item" href="/">
                <i className="bi bi-arrow-left-right home-bottom-icon">{tuit.retuits}</i></a>


            <div className="new-list-group-item">
                <i onClick={() => dispatch(updateTuitThunk({...tuit, likes: tuit.likes + 1}))} className="bi bi-heart-fill me-2 text-danger"></i>
                {tuit.likes}
            </div>

            <a className="list-group-item new-list-group-item" href="/">
                <i className="bi bi-forward home-bottom-icon"></i></a>

        </div>
    );
}

export default TuitStats
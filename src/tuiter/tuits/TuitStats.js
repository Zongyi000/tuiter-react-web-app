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
                {tuit.liked === true ?
                        <i onClick={() => dispatch(updateTuitThunk({...tuit, liked: false, likes: tuit.likes - 1}))} className="bi bi-heart-fill home-bottom-icon-red">{tuit.likes - 1}</i>
                    :

                        <i onClick={() => dispatch(updateTuitThunk({...tuit, liked: true, likes: tuit.likes + 1}))} className="bi bi-heart home-bottom-icon">{tuit.likes + 1}</i>
                }
            </div>

            <a className="list-group-item new-list-group-item" href="/">
                <i className="bi bi-forward home-bottom-icon"></i></a>

        </div>
    );
}

export default TuitStats
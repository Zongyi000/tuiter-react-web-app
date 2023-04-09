import React from "react";
import TuitStats from "./TuitStats";
import {useDispatch} from "react-redux";
// import {deleteTuit} from "./tuits-reducer";
import {deleteTuitThunk} from "../../services/tuits-thunks";

const TuitItem = (
    {
        tuit = {
            "_id": 2,
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "tesla.png",
            "handle": "Space-X",
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }
    return(
        <li className="home-center">
            <img alt="" src={`/images/${tuit.image}`} className="avatar" />

            <div className="follow-avatar">
                <div className="wd-post-user">
                    <h6 className="margin-left-4px">{tuit.userName}</h6>
                    <i className="bi bi-patch-check-fill margin-left-4px"></i>
                    <div className="margin-left-4px">{tuit.handle}</div>
                    <i className="fa fa-circle margin-left-4px"></i>
                    <span className="wd-tweets margin-left-4px">{tuit.time}</span>
                    <div className="delete_tuit">
                        <i className="bi bi-x-lg float-end"
                           onClick={() => deleteTuitHandler(tuit._id)}></i>
                    </div>
                </div>


                <div className="wd-section">
                    <h2 className="wd-author-title">{tuit.title}</h2>
                </div>

                {tuit.image ? <img alt="" src={`/images/${tuit.image}`} className="wd-home-center-image"/> : null}

                <p>{tuit.content}</p>

                <TuitStats tuit={tuit}/>


                <button className="home-show">Show this thread</button>
            </div>
        </li>
    );
};


export default TuitItem;
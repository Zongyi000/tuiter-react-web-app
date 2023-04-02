import React from "react";
import "./index.css";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";



const ProfileComponent = () => {
    const profileArray = useSelector(state => state.profile);
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }
    const GoEditProfile = () => {
        navigate("/tuiter/edit-profile")
    }

    return(
        <>
            <div className="wd-profile-flex ">
            <button className="wd-go-back" onClick={goBack} >
                <i className="bi bi-arrow-left wd-profile-arrow"></i>
            </button>

            <h4 className="margin-left-4px">{profileArray.firstName} {profileArray.lastName}</h4>
            </div>

            {profileArray.bannerPicture ? <img alt="" src={`/images/${profileArray.bannerPicture}`} className="wd-profile-image"/> : null}


            <div className="follow-avatar">
                <div className="wd-profile-flex-col">
                    <div className="wd-profile-top">
                        <img alt="" src={`/images/${profileArray.profilePicture}`} className="avatar wd-profile-avatar" />
                        <button className="Edit" onClick={GoEditProfile}>Edit Profile</button>
                    </div>
                    <h6 className="margin-left-4px">{profileArray.firstName} {profileArray.lastName}</h6>
                    <div className="margin-left-4px">{profileArray.handle}</div>
                </div>

                <div className="wd-section">
                    <h2 className="wd-author-title">{profileArray.bio}</h2>
                </div>

                <div className="wd-profile-flex">
                    <i className="bi bi-geo-alt margin-left-4px margin-bottom-4px">{profileArray.location}</i>
                    <i className="bi bi-balloon margin-left-4px margin-bottom-4px">{profileArray.dateOfBirth}</i>
                    <i className="bi bi-calendar margin-left-4px margin-bottom-4px">{profileArray.dateJoined}</i>
                </div>


                <div className="wd-profile-flex">
                    <div className="margin-left-4px margin-bottom-4px">{profileArray.followingCount} Following</div>
                    <div className="margin-left-4px margin-bottom-4px">{profileArray.followersCount} Followers</div>
                </div>

            </div>
        </>


    );
};
export default ProfileComponent;






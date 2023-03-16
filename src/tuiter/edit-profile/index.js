import React, { useState } from "react";
import "./index.css";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {updateProfile} from "../reducers/profile-reducer";




const EditProfile = () => {
    const profileArray = useSelector(state => state.profile);
    const [userFirstName, setUserFirstName] = useState(profileArray.firstName);
    const [userLastName, setUserLastName] = useState(profileArray.lastName);
    const [bio, setBio] = useState(profileArray.bio);
    const [location, setLocation] = useState(profileArray.location);
    const [birth, setBirth] = useState(profileArray.dateOfBirth)
    const [dateJoined, setDateJoined] = useState(profileArray.dateJoined)
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }
    const initialUserName = profileArray.firstName + " " + profileArray.lastName
    const dispatch = useDispatch();
    const saveEdit = () => {
        alert("user info changed saved!");
        const newProfile = {};
        newProfile.firstName = userFirstName;
        newProfile.lastName = userLastName;
        newProfile.bio = bio;
        newProfile.dateOfBirth = birth;
        newProfile.location = location;
        newProfile.dateJoined = dateJoined;
        dispatch(updateProfile(newProfile))
        navigate('/tuiter/profile')
    }

    const inputUserNameChange = (event) => {
        setUserFirstName(event.target.value.split(" ")[0]);
        setUserLastName(event.target.value.split(" ")[1]);
    }

    const inputBioChange = (event) => {
        setBio(event.target.value);
    }

    const inputLocationChange = (event) => {
        setLocation(event.target.value)
    }

    const inputBirthChange = (event) => {
        setBirth(event.target.value)
    }

    const inputDateJoinedChange = (event) => {
        setDateJoined(event.target.value)
    }

    return(
        <>
            <div className="wd-profile-flex ">
                <button className="wd-go-back" onClick={goBack} >
                    <i className="bi bi-arrow-left wd-profile-arrow"></i>
                </button>
                {/*<h4 className="margin-left-4px">{profileArray.firstName} {profileArray.lastName}</h4>*/}
            </div>

            {profileArray.bannerPicture ? <img alt="" src={`/images/${profileArray.bannerPicture}`} className="wd-profile-image"/> : null}


            <div className="follow-avatar">
                <div className="wd-profile-flex-col">
                    <div className="wd-profile-top">
                        <img alt="" src={`/images/${profileArray.profilePicture}`} className="avatar wd-profile-avatar" />
                    </div>
                    <label className="wd-edit-username">
                        User Name: <input onChange={inputUserNameChange} type="text" name="userName" defaultValue={initialUserName} />
                    </label>
                    {/*<div className="margin-left-4px">{profileArray.handle}</div>*/}

                </div>

                <div className="wd-section">
                    <label className="wd-author-title">
                        Bio: <input onChange={inputBioChange} className="wd-author-bio" type="textarea" name="userBio" defaultValue={profileArray.bio} />
                    </label>
                </div>

                <div className="wd-edit-profile-flex">
                    <label className="wd-edit-author-title">
                        Location: <input onChange={inputLocationChange} className="wd-author-location" type="text" name="userLocation" defaultValue={profileArray.location} />
                    </label>
                    <label className="wd-edit-author-title">
                        dateOfBirth: <input onChange={inputBirthChange} className="wd-author-location" type="text" name="userBirth" defaultValue={profileArray.dateOfBirth} />
                    </label>
                    <label className="wd-edit-author-title">
                        dateJoined: <input onChange={inputDateJoinedChange} className="wd-author-location" type="text" name="userDateJoined" defaultValue={profileArray.dateJoined} />
                    </label>
                </div>

                <button onClick={saveEdit} className="save">Save</button>

            </div>
        </>


    );
};
export default EditProfile;






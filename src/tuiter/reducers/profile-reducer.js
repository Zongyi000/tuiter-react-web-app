import { createSlice } from "@reduxjs/toolkit";
import profileArray from "../data/profile.json";

const profileSlice = createSlice({
    name: "profile",
    initialState: profileArray,
    reducers: {
        updateProfile(state, action) {
            // console.log("state: ", state)
            // console.log("action: ", action)
            state["firstName"] = action.payload.firstName;
            state["lastName"] = action.payload.lastName;
            state["bio"] = action.payload.bio;
            state["dateOfBirth"] = action.payload.dateOfBirth;
            state["location"] = action.payload.location;
            state["dateJoined"] = action.payload.dateJoined;
        },
    }
});

export const {updateProfile} = profileSlice.actions
export default profileSlice.reducer;
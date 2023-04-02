import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';
import {createTuitThunk, deleteTuitThunk, findTuitsThunk, updateTuitThunk} from "../../services/tuits-thunks";

const initialState = {
    tuits: [],
    loading: false
}


const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "nasa.png",
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}

const tuitsSlice = createSlice({
    name: 'tuits',
    initialState,
    extraReducers: {
        [findTuitsThunk.pending]:           // if request is not yet fulfilled …
            (state) => {
                state.loading = true
                state.tuits = []
            },
        [findTuitsThunk.fulfilled]:
            (state, { payload }) => { // we extract/destruct payload from action object
                state.loading = false
                state.tuits = payload
            },
        [findTuitsThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },
        [deleteTuitThunk.fulfilled] :
            (state, { payload }) => {
                state.loading = false
                state.tuits = state.tuits
                    .filter(t => t._id !== payload) // filter out tuit whose ID matches tuit to remove

            },
        [createTuitThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.tuits.push(payload)
            },

        [updateTuitThunk.fulfilled]: // when server update is done
            (state, { payload }) => {
                state.loading = false
                const tuitNdx = state.tuits // find index of updated tuit in array
                    .findIndex((t) => t._id === payload._id)
                state.tuits[tuitNdx] = { // merge old tuit with updated tuit
                    ...state.tuits[tuitNdx],
                    ...payload
                }
            }


    },
    reducers: {
        // we're not going to use the old reducers anymore
        // deleteTuit(state, action) {
        //     const index = state
        //         .findIndex(tuit =>
        //             tuit._id === action.payload);
        //     state.splice(index, 1);
        // },
        // createTuit(state, action) {
        //     state.unshift({
        //         ...action.payload,
        //         ...templateTuit,
        //         _id: (new Date()).getTime(),
        //     })
        // }
    }
});

export const {createTuit, deleteTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;
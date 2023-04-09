import {createAsyncThunk} from "@reduxjs/toolkit"
import * as service from "./tuits-service"


// create thunk for findTuits:give unique name, thunk invokes, service function. Returned data goes in redux action's payload
export const findTuitsThunk = createAsyncThunk(
    'tuits/findTuits', async () =>
        await service.findTuits()
)

export const deleteTuitThunk = createAsyncThunk(
    'tuits/deleteTuit',     // unique thunk identifier
    async (tuitId) => {
        await service.deleteTuit(tuitId)
        return tuitId   //return tuit ID, so we can remove tuit from reducer's store
})



//The createTuitThunk thunk posts the new tuit to the server using the corresponding service createTuit and the new tuit is dispatched to the reducer to be added to the state. The reducer updates the state appending the new tuit to the current state which makes its way through the store, provider, selector and back into the user interface for rendering. We're ignoring the pending and rejected thunks.
// The response contains the new instance created on the server and we return it to the reducer so it can add it to the local array of tuits in the state.
export const createTuitThunk = createAsyncThunk(
    'tuits/createTuit',
async (tuit) => {

    const newTuit = await service.createTuit(tuit)
    return newTuit
})


export const updateTuitThunk =
    createAsyncThunk(
        'tuits/updateTuit',
        async (tuit) =>
            await service.updateTuit(tuit) // sends updated tuit to server with service
    )


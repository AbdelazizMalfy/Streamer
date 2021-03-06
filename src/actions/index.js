import streams from '../apis/streams'
import history from '../history'

export const signIn = (userId) => {
    return {
        type: "SIGN_IN",
        payload: userId
    }
}

export const signOut = (userId) => {
    return {
        type: "SIGN_OUT",
        payload: userId
    }
}

// Async action creator

export const createStream = (fromValues) => {
    return async (dispatch,getState) =>{
        const {userId} = getState().auth;
        const response = await streams.post('/streams', {...fromValues, userId});

        dispatch({type : 'CREATE_STREAM', payload: response.data})
        history.push('/');
    }
}


export const fetchStreams = () => {
    return async (dispatch) =>{
        const response = await streams.get('/streams');

        dispatch({type : 'FETCH_STREAMS' , payload: response.data});
    }
}


export const fetchStream = (id) => {
    return async (dispatch) => {
        const response = await streams.get(`/streams/${id}`)

        dispatch({type: 'FETCH_STREAM', payload : response.data })
    }
}

export const editStream = (id,fromValues) => {
    return async (dispatch) => {
        const response = await streams.patch(`/streams/${id}`, fromValues)

        dispatch({type: 'EDIT_STREAM', payload: response.data})
        history.push('/');
    }
}

export const deleteStream = (id) => {
    return async (dispatch) => {
        await streams.delete(`/streams/${id}`);

        dispatch({type: 'DELETE_STREAM' , payload: id})
        history.push('/');
    }
} 
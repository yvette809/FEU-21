
import * as api from '../api'


// action creators 

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts()
        dispatch({ type: 'FETCH ALL', payload: data })

    } catch (error) {
        console.log(error.message)
    }
}


export const createPost = (post) => async (dispatch) => {
    try {
        const res = await api.createPost(post);

        dispatch({ type: 'CREATE', payload: res.data });
    } catch (error) {
        console.log(error);
    }
};
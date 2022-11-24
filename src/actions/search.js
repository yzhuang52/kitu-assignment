import * as api from '../api';

export const getInfo = (searchQuery) => async (dispatch) => {
    try {
        const {data} = await api.getInfo(searchQuery);
        dispatch({type: 'search', payload: data});
    } catch (error) {
        console.log(error);
    }
}
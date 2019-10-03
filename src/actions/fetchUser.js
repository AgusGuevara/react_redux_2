import jsonPlaceholder from '../Apis/jsonPlaceholder'


export const fetchUser = id => async dispatch => {
        const response =  await jsonPlaceholder.get(`/users/${id}`);

    dispatch({ type: 'FETCH_USER', payload : response.data})
} 
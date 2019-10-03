import _ from 'lodash'
import { fetchPosts } from '.'
import { fetchUser } from './fetchUser';

export const fetchPostsAndUser = () => async( dispatch, getState)  => {
    await dispatch(fetchPosts());   
    /*const userIds = _.uniq(_.map(getState().posts, 'userId'))
    userIds.forEach(id => dispatch(fetchUser(id)))*/

    _.chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach(id => dispatch(fetchUser(id)))
        .value()
}
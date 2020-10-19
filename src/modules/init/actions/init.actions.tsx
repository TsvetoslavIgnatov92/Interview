import * as actionTypes from './action-types';

export const fetchUsers = () => {
    return {
        type: actionTypes.FETCH_USERS
    };
};

export const fetchUsersSuccess = (payload: any) => {
    return {
        type: actionTypes.FETCH_USERS_SUCCESS,
        payload
    };
};

export const fetchUsersFailed = (payload: any) => {
    return {
        type: actionTypes.FETCH_USERS_FAILED,
        payload
    };
};

export const fetchPosts = (payload: any) => {
    return {
        type: actionTypes.FETCH_POSTS,
        payload
    };
};

export const fetchPostsSuccess = (payload: any) => {
    return {
        type: actionTypes.FETCH_POSTS_SUCCESS,
        payload
    };
};

export const fetchPostsFailed = (payload: any) => {
    return {
        type: actionTypes.FETCH_POSTS_FAILED,
        payload
    };
};

export const handleChange = (payload: any) => {
    return {
        type: actionTypes.HANDLE_CHANGE,
        payload
    };
};

export const setIsPostShown = (payload: any) => {
    return {
        type: actionTypes.SET_IS_POSTS_SHOWN,
        payload

    };
};
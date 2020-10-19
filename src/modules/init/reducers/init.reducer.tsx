import { Cmd, loop } from 'redux-loop';
import * as actionTypes from '@modules/init/actions/action-types';
import { fetchUsers, fetchPosts } from '@modules/init/services/init.service';
import * as mainActions from '@modules/init/actions/init.actions';
export const initialInitState: any = {
    users: []
};

const initReducer = (
    state: any = initialInitState,
    action: any
): any => {
    switch (action.type) {
    case actionTypes.FETCH_USERS: {
        return loop(
            {
                ...state,
            },
            Cmd.run(fetchUsers,
                {
                    successActionCreator: mainActions.fetchUsersSuccess,
                    failActionCreator: mainActions.fetchUsersFailed,
                    args: [action.payload]
                })
        );
    }
    case actionTypes.FETCH_USERS_SUCCESS: {
        return {
            ...state,
            users: action.payload.data

        };
    }
    case actionTypes.FETCH_USERS_FAILED: {
        return {
            ...state,
        };
    }
        case actionTypes.FETCH_POSTS: {
            return loop(
                {
                    ...state,
                },
                Cmd.run(fetchPosts,
                    {
                        successActionCreator: mainActions.fetchPostsSuccess,
                        failActionCreator: mainActions.fetchPostsFailed,
                        args: [action.payload]
                    })
            );
        }
        case actionTypes.FETCH_POSTS_SUCCESS: {
            let newUsers = state.users;
            newUsers[action.payload.id - 1].posts = action.payload.response.data;
            newUsers[action.payload.id - 1].isPostsShown = true;
            return {
                ...state,
                users: [...newUsers]

            };
        }
        case actionTypes.FETCH_POSTS_FAILED: {
            return {
                ...state,
            };
        }
        case actionTypes.HANDLE_CHANGE: {
            let newUsers = state.users;
            newUsers[action.payload.id][action.payload.field] = action.payload.value;
            return {
                ...state,
                users: [...newUsers]
            };
        }
        case actionTypes.SET_IS_POSTS_SHOWN: {
            let newUsers = state.users;
            newUsers[action.payload - 1].isPostsShown = !newUsers[action.payload - 1].isPostsShown;
            return {
                ...state,
                users: [...newUsers]
            };
        }
    default:
        return state;
    }
};

export default initReducer;

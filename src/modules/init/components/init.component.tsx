import React, { useEffect } from 'react';
import './init.component.scss';

export const InitComponent = ({fetchUsers, fetchPosts, handleChange, setIsPostShown, users, posts}: any) => {
    useEffect(() => {
        fetchUsers()
    }, []);

    const getPosts = (event: any, id: any) => {
        event.preventDefault();
        fetchPosts(id)
    };

    useEffect(() => {
        setUsers(users)
    }, [posts, users]);

    const setUsers = (users: any) => {
        return (users.map((user: any) => {
            return (<div className="user-section" key={user.id}>
                <div>Name: <input
                    type={'text'}
                    value={user.name}
                    onChange={(event) => handleChange({value:event.target.value, id: user.id - 1, field: 'name'})}
                />
                </div>
                <div>Username:
                    <input
                        type={'text'}
                        value={user.username}
                        onChange={(event) => handleChange({value:event.target.value, id: user.id - 1, field: 'username'})}
                    />
                </div>
                <div>Email:
                    <input
                        type={'text'}
                        value={user.email}
                        onChange={(event) => handleChange({value:event.target.value, id: user.id - 1, field: 'email'})}
                    />
                </div>
                {user.isPostsShown !== undefined && <button className="show-hide-btn" onClick={() => setIsPostShown(user.id)}>{user.isPostsShown ? 'Hide' : 'Show'}</button>}
                {'posts' in user && user.isPostsShown && user.posts.map((post: any) => {
                    return (<div className="post" key={post.id}>
                        <div>Title: {post.title}</div>
                        <div>Body: {post.body}</div>
                    </div>)})
                }
                <button className="get-posts-btn" onClick={() => getPosts(event,user.id)}>Get user’s posts</button>
            </div>)
        }))
    };
    return (
        <div className="wrapper">{setUsers(users)}</div>
    );
};


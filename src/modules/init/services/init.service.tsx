import { axiosConfig } from '@src/axios.config';

export const fetchUsers = () => {
    return axiosConfig.get('/users').then((response: any) => response);
};

export const fetchPosts = (id: any) => {
    return axiosConfig.get(`/posts?userId=${id}`).then((response: any) => {
        return {response, id:id};
    });
};

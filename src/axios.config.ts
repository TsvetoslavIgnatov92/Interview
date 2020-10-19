import axios from 'axios';


export const URL ='https://jsonplaceholder.typicode.com';

export const axiosConfig = axios.create({
    baseURL: URL,
    headers: {
        'X-Gravitee-Api-Key': 'bbed69e5-f10c-4db9-8bcd-d56853444602'
    }
});

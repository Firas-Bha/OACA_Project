import axios from 'axios';
const API = axios.create({baseURL: 'http://localhost:8800'});

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) { //get the token from the backend to see if the user is actually logged in
      req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
  
    return req;
  });
//const url = 'http://localhost:5000/posts';
export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost) => API.post('/posts', newPost); // bech tet3ada el data send a post via actionPOST lehne el appel yeta3mal
export const updatePost = (id, updatedPost) => API.patch(`${'/posts'}/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`${'/posts'}/${id}`);

//export const signin = (FormData) => API.post('/user/signin', FormData);
//export const signup = (FormData) => API.post('/user/signup', FormData);
export const signin = (FormData) => API.post('/api/users/signin', FormData);
export const signup = (FormData) => API.post('/api/users/signup', FormData);
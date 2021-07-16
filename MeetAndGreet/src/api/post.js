import API from '../api';

export default {
  getSelfPosts: async username => {
    const res = await API.get(`/posts?user.username=${username}`);
    if (res) return res;
  },
  getAllPosts: async () => {
    const res = await API.get('/posts?_sort=createdAt:DESC');
    if (res) return res;
  },
  getOnePost: async post_id => {
    const res = await API.get(`/posts/${post_id}`);
    if (res) return res;
  },
};

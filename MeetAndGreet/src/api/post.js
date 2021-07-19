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
  createPost: async (pic, title, captions, account_id) => {
    const form = new FormData();
    form.append(
      'files',
      {
        uri: pic.uri.replace('file://', ''),
        type: pic.type,
        name: pic.fileName,
      },
      pic.fileName,
    );

    const picRes = await API.post('/upload', form, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    const body = {
      user: account_id,
      picture: picRes.data[0].id,
      title,
      captions,
    };

    const res = await API.post('/posts', body);
    if (res) return res;
  },
};

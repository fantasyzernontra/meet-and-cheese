import API from '../api';

export default {
  getAllPhotographers: async () => {
    const res = await API.get('/users?user_type.type=2');
    if (res) return res;
  },
  getOnePhotographer: async photographer_account_id => {
    const res = await API.get(`/users/${photographer_account_id}`);
    if (res) return res;
  },
};

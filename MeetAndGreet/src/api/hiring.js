import API from '../api';

export default {
  getAmountOfHiring: async account_id => {
    const res = await API.get(`/hiring-contracts/count?hired=${account_id}`);
    if (res) return res;
  },
  getAllHiring: async account_id => {
    const res = await API.get(`/hiring-contracts?hired=${account_id}`);
    if (res) return res;
  },
  getOneHiring: async hiring_id => {
    const res = await API.get(`/hiring-contracts/${hiring_id}`);
    if (res) return res;
  },
  submitHiring: async (
    user_id,
    photographer_id,
    workDescription,
    location,
    startWorkingDate,
    endWorkingDate,
  ) => {
    const body = {
      hirer: user_id,
      hired: photographer_id,
      work_description: workDescription,
      location,
      start_date: startWorkingDate,
      end_date: endWorkingDate,
    };

    const res = await API.post('/hiring-contracts', body);
    if (res) return res;
  },
};

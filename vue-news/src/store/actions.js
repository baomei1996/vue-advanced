import { fetchNewsList, fetchAskList, fetchJobsList, fetchUserInfo, fetchItemInfo, fetchList} from '../api/index'

export default {
  //promise
  FETCH_NEWS(context) {
    return fetchNewsList() 
      .then(res => {
        console.log(res.data);
        context.commit('SET_NEWS', res.data)
        return res;
      })
      .catch(err => {
        console.log(err);
      })
  },
  //async
  async FETCH_ASK({ commit }) {
    const response = await fetchAskList();
    commit('SET_ASK', response.data);
    return response;
  },
  async ETCH_JOBS({ commit }) {
    const response = await fetchJobsList();
     commit('SET_JOBS', response.data)
     return response;
  },
  async FETCH_USER({ commit }, name) {
    const res = await fetchUserInfo(name);
    commit('SET_USER', res.data)
    return res;
  },
  async FETCH_ITEM({ commit }, id) {
    const res = await fetchItemInfo(id)
    commit('SET_ITEM', res.data)
    return res;
  },
  async FETCH_LIST({ commit }, pageName) {
    try {
      const res = await fetchList(pageName)
      commit('SET_LIST', res.data)
      return res;
    } catch(err) {
      console.log(err);
    }
  }
}
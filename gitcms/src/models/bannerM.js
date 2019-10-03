import { loadBanner } from "../services/bannerS.js";
export default {
  namespace:"bannerM",
  state: { banner: [] },
  effects: {
    *BannerCome({ payload }, { put, call }) {
      const banners = yield call(loadBanner);
      console.log(banners.data._root_);
      yield put({
        type: "save",
        payload:{banner:banners.data._root_ }
      }); 
    }
  },
  subscriptions: {
    setup({ dispatch, history }) {  // 订阅，这个实际用的少，表示监听当前state的变化
    },
  },
  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    }
  },

};

import { loadBanner } from "../services/bannerS.js";
export default {
  state: { banner: [] },
  effects: {
    *loadBanner({ payload }, { put, call }) {
      const banner = yield call(loadBanner);
      // console.log(news);
      alert("sss")
      yield put({
        type: "save",
        payload: {
          banner: banner.data._root_
        }
      });
    }
  },
  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    }
  }
};

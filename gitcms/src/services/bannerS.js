// import request from '../utils/request';
import { get } from "../utils/request.js";
// export const reLogin=()=>request("http://www.qhdlink-student.top/student/banner.php","POST");
export function loadBanner() {
    return get("http://rap2api.taobao.org/app/mock/231131/testApi");
  }
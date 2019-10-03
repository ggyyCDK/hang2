// import fetch from 'dva/fetch';
// import { type } from 'os';

// function parseJSON(response) {
//   return response.json();
// }

// function checkStatus(response) {
//   if (response.status >= 200 && response.status < 300) {
//     return response;
//   }

//   const error = new Error(response.statusText);
//   error.response = response;
//   throw error;
// }
// import axios from "axios";
// export default function request(url,data={},type){
//     alert("我是post")
//     axios({
//         url:url,
//         method:type,
//         data:data,
//         transformRequest:[function(data){
//             return qs.stringify(data);
//         }]
//     }).then(res=>console.log(res.data));
//   }
// export default function request(url,type) {
//     alert("调用成功");
//   return fetch(url,{
//       method:type,
//       body:"username=gy53&userpwd=12345678&userclass=53&type=2"
//   }).then(function(response){
//       return response.json();
//   }).then(json=>{
//         for(let v in json){
//             console.log(json[v]);
//         }
//     })
    // .then(parseJSON)
    // .then(data => ({ data }))
    // .catch(err => ({ err }));
// }
import axios from "axios";
const instance = axios.create();
instance.interceptors.response.use(null, error => {
  if (error.response && error.status == 401) {
    console.log("error");
  }
});

export function get(url, config) {
  return instance.get(url, config);
}

export function post(url, data, config) {
  return instance.post(url, data, config);
}


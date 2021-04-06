import api from "@/api/index.js";

//post请求接口
export function postData(url, params) {
  return new Promise(function(resolve, reject) {
    api.post(
      url,
      null,
      params,
      successRes => {
        resolve(successRes);
      },
      failureRes => {
        reject(failureRes);
      }
    );
  });
}

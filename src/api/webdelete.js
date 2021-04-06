import api from "@/api/index.js";

//delete请求接口
export function deleteData(url, params) {
  return new Promise(function(resolve, reject) {
    api.delete(
      url,
      null,
      params,
      (successRes) => {
        resolve(successRes);
      },
      (failureRes) => {
        reject(failureRes);
      }
    );
  });
}

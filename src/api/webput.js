import api from '@/api/index.js';
//put请求接口
export function putData(url,params) {
	return new Promise(function (resolve, reject) {
		api.put(url, null,
			params,
			successRes => {
				resolve(successRes);
			},
			failureRes => {
				reject(failureRes);
			}
		)
	})
}

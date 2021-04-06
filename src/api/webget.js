import api from '@/api/index.js';

//get请求接口
export function getData(url,params) {
	return new Promise(function (resolve, reject) {
		api.get(url, null,
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

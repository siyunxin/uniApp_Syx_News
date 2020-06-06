export default function $http(option) {
	const {url, data} = option;
	return new Promise((resolve, reject) =>  {
		uniCloud.callFunction({
			name: url,
			data
		}).then((res) => {
			if(res.result.code === 200) {
				resolve(res.result.data)
			}else{
				reject(res.result)
			}
		})
	})
}
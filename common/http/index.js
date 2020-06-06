const requireApi = require.context(
	//目录相对路径
	'./api',
	//是否查询子目录
	false,
	/.js$/
)

console.log(requireApi.keys())
let module = {}
requireApi.keys().forEach((key, index) => {
	Object.assign(module, requireApi(key))
})

console.log(module)

export default module
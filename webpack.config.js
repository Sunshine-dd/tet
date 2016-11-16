module.exports = {
	//配置入口文件(需要打包的文件)
	entry:'./build/js/index.js',
	//输出目录以及输出名字
	output:{
		//设置打包后的文件存放在哪里
		path:'./dist/',
		//打包后的文件
		filename:'js/index.js'
	},
	module:{
		//配置我们需要的加载器
		loaders:[
			{
				//匹配的文件
				test:/.css$/,
				loaders:['style','css']
			}
		]
	}
}

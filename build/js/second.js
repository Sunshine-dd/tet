var name = 'sunshine';
function hello(){
	document.write(this.name)
}
//暴露到对象里面去,方便引用
module.exports = {
	name:name,
	sayhello:hello
}

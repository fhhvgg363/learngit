function myCreateobj(proto) {
    function N() {

    }
    N.prototype = proto;
    return new N()

}
var name = '张三'
const parent = {
    name: '李四',
    say() {
        console.log(this.name);
    }
}
const child = myCreateobj(parent)
child.say();
// apply实现
Function.prototype.myApply=function(thisArg,args=[]) {
    const ctx=thisArg==null?globalThis:Object(thisArg);
    const key=Symbol();
    ctx[key]=this;
    const result=ctx[key](...args);
    delete ctx[key];
    return result;
}
// call实现
Function.prototype.myCall=function(thisArg,...args) {
    const ctx=thisArg==null?globalThis:Object(thisArg);
    const key=Symbol();
    ctx[key]=this;
    const result= ctx[key](...args);
    delete ctx[key];
    return result;
}
// thisArg要绑定的对象，args要传入的参数；
// 先确定绑定的对象，再将函数挂载到对象上，立即执行函数，删除属性防止污染对象
function say(a,b) {
    const name="李四"
    console.log(this.name,a,b);
}
const user={name:"张三"}
say.myCall(user,1,2);
say.myApply(user,[1])
//bind实现
Function.prototype.myBind = function (thisArg, ...args) {
    const fn = this;
  
    const bound = function (...newArgs) {
      // new bound() 时，this 是新实例，不再用 thisArg
      const isNew = this instanceof bound;
      return fn.apply(isNew ? this : thisArg, [...args, ...newArgs]);
    };
  
    // 保留原函数原型，让 new 出来的对象能继承
    if (fn.prototype) {
      bound.prototype = Object.create(fn.prototype);
    }
  
    return bound;
  };
  
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  const BindPerson = Person.myBind({ x: 1 }, "Tom");
  const p = new BindPerson(18);
  console.log(p.name, p.age); // Tom 18

// thisArg要绑定的对象，args要传入的参数；
// 先确定绑定的对象，再将函数挂载到对象是，立即执行函数，删除属性防止污染对象



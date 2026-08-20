function myNew(constructor,...args) {
    const obj=Object.create(constructor.prototype);
    const result=constructor.apply(obj,args)
    return result!==null&&(typeof result==='object'||typeof result==='function')?result:obj;
}
function Person(name,age) {
    this.name=name;
    this.age=age;
    return {name:'王五',age:18}
}
function Student(name,age) {
    this.name=name;
    this.age=age;
    return 123;
}
const person1=new Person('张三',18);
const person2=myNew(Person,'里斯',20);
const student1=new Student('赵六');
const student2=myNew(Student,"孙七")
console.log(person1,person2);
console.log(student1,student2);
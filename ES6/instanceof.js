function myInstanceof(obj, Constructor) {
    let proto = Object.getPrototypeOf(obj);
  
    while (proto) {
      if (proto === Constructor.prototype) {
        return true;
      }
      proto = Object.getPrototypeOf(proto);
    }
  
    return false;
  }
  
  const obj = {};
  
  console.log(myInstanceof(obj, Object));   // true
  console.log(myInstanceof(obj, Array));    // false
  console.log(myInstanceof(obj, String));   // false
  console.log(myInstanceof([], Array));     // true
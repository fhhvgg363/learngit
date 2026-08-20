arr=[1,2,3,4]
arr[Symbol.iterator]=function(){
    let index = 0;
    let self = this;
    return {
        next() {
            if(index<self.length) {
                return {
                    done:false,
                    value:arr[index++]
                }
            }
            return {
                done:true,
                value:undefined
            }
        }
    }
}
for(const item of arr){
    console.log(item)
}
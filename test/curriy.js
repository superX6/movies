
function myBind(context){
  const self = this;
  const args = Array.prototype.slice.call(arguments, 1)
  return function(){
    return self.apply(context, args)
  }
}


const add = (...args) => args.reduce((acc, cur) => acc + cur, 0)


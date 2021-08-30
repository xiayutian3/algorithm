//顺序搜索  时间复杂度 o(n)
Array.prototype.sequentialSearch = function(item){
  for(var i=0; i < this.length; i++){
    if(this[i] == item){
      return i
    }
  }
  return -1
}
const res = [1,2,3,5,4].sequentialSearch(3)


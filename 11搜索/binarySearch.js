//二分搜索  时间复杂度 o(log n)
//前提是有序数组
Array.prototype.binarySearch = function(item) {
  let low = 0;
  let high = this.length - 1;
  while (low <= high) {
    const mid = Math.floor((low+high)/2);
    const elment = this[mid];
    if(elment<item){
      low = mid + 1;
    }else if(elment>item){
      high = mid-1;
    }else{
      return mid;
    }
  }
  return -1;


}
const res = [1,2,3,4,5].binarySearch(5)


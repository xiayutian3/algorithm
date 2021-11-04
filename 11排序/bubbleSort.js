//冒泡排序，时间复杂度 o(n^2)
// 从小到大排序，
// 第一轮选出来的是最大的一个
Array.prototype.bubbleSort = function () {
  for (let i = 0; i < this.length - 1; i++) {
    for (let j = 0; j < this.length - 1 - i; j++) {
      // console.log(this[j],this[j+1])
      if (this[j] > this[j + 1]) {
        const temp = this[j]
        this[j] = this[j + 1]
        this[j + 1] = temp
      }
    }
  }

}

const arr = [5, 4, 3, 2, 1]
arr.bubbleSort()
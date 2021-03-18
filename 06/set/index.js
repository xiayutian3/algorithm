// 集合   无序且唯一

// // 去重
// const arr = [1,1,2,2]
// const arr2 = [...new Set(arr)]
// console.log(arr2)

// //判断元素师傅再集合中
// const set = new Set(arr) 
// const has = set.has(3)

// //求交集
// const set2  = new Set([7,8,2,3])
// const set3 = Array.from(set).filter(item=>set2.has(item))
// console.log(set3)




// es6中的 set
let mySet = new Set()
mySet.add(1)
mySet.add(5)
mySet.add(5)
mySet.add('some')
let o = {
  a:1,b:2
}
mySet.add(o)
mySet.add({
  a:1,b:2
})

const has = mySet.has(o)

mySet.delete(5 )

// set数据结构 key value 是一样的
for(let [key,item] of mySet.entries()) console.log(key,item)



//求交集  
 const mySet2 = new Set([1,2,3,4])
 const intersection = new Set([...mySet].filter(item=>mySet2.has(item)))


//差集
const difference = new Set([...mySet].filter(item=>!mySet2.has(item)))



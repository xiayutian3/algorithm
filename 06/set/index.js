// 集合

// 去重
const arr = [1,1,2,2]
const arr2 = [...new Set(arr)]
console.log(arr2)

//判断元素师傅再集合中
const set = new Set(arr) 
const has = set.has(3)

//求交集
const set2  = new Set([7,8,2,3])
const set3 = Array.from(set).filter(item=>set2.has(item))
console.log(set3)
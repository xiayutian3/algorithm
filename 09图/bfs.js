const graph = require('./graph')

const bfs = (start)=>{
  const vidited = new Set()
  vidited.add(start)
  const q = [start]
  while(q.length){
    const n = q.shift()
    console.log(n)
    graph[n].forEach(c=>{
      if(!vidited.has(c)){
        q.push(c)
        vidited.add(c)
      }
    })
  }
}

bfs(2)

// 2 0 3 1 
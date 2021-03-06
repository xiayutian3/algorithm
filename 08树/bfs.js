const tree = {
  val:'a',
  children:[
    {
      val:'b',
      children:[
        {
          val:'d',
          children:[]
        },
        {
          val:'e',
          children:[]
        }
      ]
    },
    {
      val:'c',
      children:[
        {
          val:'f',
          children:[]
        },
        {
          val:'g',
          children:[]
        }
      ]
    }
  ]
}

//广度优先算法

//1.新建一个队列，根节点入队
//2.队首出队，出队并访问队首的children
//3.将队首的children添加到队列中
//4.重复 2、3步骤，直至队列为空

const bfs = (root)=>{
  const q = [root]
  while(q.length>0){
    const n = q.shift()
    console.log(n.val)
    n.children.forEach(child=>{
      q.push(child)
    })
  }
}

bfs(tree)
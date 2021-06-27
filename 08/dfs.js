//深度优先遍历
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

//深度优先算法

//1.访问根节点
//2.遍历chiildren节点

const dfs = (root)=>{
  console.log(root.val);
  root.children.forEach(dfs)
}
dfs(tree)
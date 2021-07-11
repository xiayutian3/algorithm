const bt = require('./bt')

//后续遍历算法
// 1.对根节点的左子树进行后序遍历
// 2.对根节点的右子树进行后序遍历
// 3.访问根节点

// const postorder = (root) => {
//   if(!root) return
//   postorder(root.left)
//   postorder(root.right)
//   console.log(root.val)
// }

//非递归版  (4526731)

const postorder = (root) => {
  if(!root) return
  const outputStack =[] 
  const stack = [root]
  while(stack.length){
    const n = stack.pop()
    outputStack.push(n)
    if(n.left){stack.push(n.left)}
    if(n.right){stack.push(n.right)}
    
  }
  while(outputStack.length){
    const n = outputStack.pop()
    console.log(n.val)
  }
}

postorder(bt)
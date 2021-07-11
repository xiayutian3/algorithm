const bt = require('./bt')
//二叉树 先序遍历

// 1.先访问根节点
// 2.递归遍历访问左子树
// 3.递归遍历访问右子树
// const preorder = (root)=>{
//   if(!root) return
//   console.log(root.val)
//   preorder(root.left)
//   preorder(root.right)
// }


//非递归版的实现   (1245367)
const preorder=(root) =>{
  if(!root) return
  const stack = [root]
  while(stack.length){
    const n = stack.pop()
    console.log(n.val)
    if(n.right){stack.push(n.right)}
    if(n.left){stack.push(n.left)}
  }
}


preorder(bt)
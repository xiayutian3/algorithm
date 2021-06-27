const bt = require('./bt')
//二叉树 先序遍历

// 1.先访问根节点
// 2.递归遍历访问左子树
// 3.递归遍历访问右子树
const preorder = (root)=>{
  if(!root) return
  console.log(root.val)
  preorder(root.left)
  preorder(root.right)
}

preorder(bt)
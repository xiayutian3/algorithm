const bt = require('./bt')

//后续遍历算法
// 1.对根节点的左子树进行后序遍历
// 2.对根节点的右子树进行后序遍历
// 3.访问根节点

const postorder = (root) => {
  if(!root) return
  postorder(root.left)
  postorder(root.right)
  console.log(root.val)
}
postorder(bt)
const bt = require('./bt')
//中序遍历
// 1.访问根节点的左子树中序遍历
// 2.访问根节点
// 3.访问很节点的右子树中序遍历

// const inorder = (root) => {
//   if(!root) return
//   inorder(root.left)
//   console.log(root.val)
//   inorder(root.right)
// }

//非递归版  (4251637)
const inorder = (root) => {
  if (!root) return
  const stack = [];
  let p = root
  while (stack.length || p) {
    while (p) {
      stack.push(p)
      // console.log(stack)
      p = p.left
    }
    const n = stack.pop()
    console.log(n.val)
    p = n.right
  }
}

inorder(bt)
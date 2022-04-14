const treeNode = (val, left, right) => {
  return {
    val,
    left,
    right,
  };
};
const calcHeight = (root) => {
  if (!root) return 0;
  return 1 + Math.max(calcHeight(root.left), calcHeight(root.right));
};

const tree = treeNode(
  1,
  treeNode(2, treeNode(4, null, null), treeNode(5, null, null)),
  treeNode(3, treeNode(6, null, null), treeNode(7, null, null))
);

console.log(tree);
console.log(calcHeight(tree));

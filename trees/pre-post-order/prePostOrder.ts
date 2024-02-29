import { TreeNodeNum } from "../common/tree"

/** dfsPreOrder(): Traverse from the invoking node using pre-order DFS.
 * Returns an array of visited nodes. */

function preOrder(node: TreeNodeNum | null): number[] {
  //base
  if (node === null) return [];

  let output = [node.val]

  for (let child of node.children){
    output.push(...preOrder(child))
  }

  return output
}


/** dfsPostOrder(): Traverse from the invoking node using post-order DFS.
 * Returns an array of visited nodes. */

function postOrder(node: TreeNodeNum | null): number[] {
  if (node === null) return [];

  let output = []

  for (let child of node.children){
    output.push(...postOrder(child))
  }

  output.push(node.val)

  return output
}

export { preOrder, postOrder };
import { BNodeNum } from "../common/bintree";

/** dfsPreOrder(): Traverse from the invoking node using pre-order DFS.
 * Returns an array of visited nodes. */

function preOrder(node: BNodeNum | null): number[] {
  if (node === null) return [];
  return [
    node.val,
    ...preOrder(node.lnode),
    ...preOrder(node.rnode),
  ];

}


/** dfsPostOrder(): Traverse from the invoking node using post-order DFS.
 * Returns an array of visited nodes. */

function postOrder(node: BNodeNum | null): number[] {
  if (node === null) return [];
  return [
    ...postOrder(node.lnode),
    ...postOrder(node.rnode),
    node.val,
  ];
}

export { preOrder, postOrder };
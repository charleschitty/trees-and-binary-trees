import { BNodeNum } from "../common/bintree";

/** Minimum depth from node to an "incomplete node".
 *
 * An incomplete node is a node with 0 or 1 children (not 2).
 */

function minDepthToIncompleteNode(node: BNodeNum): number {
  //base case
  if (node === null) return 0;

  return Math.min(
    minDepthToIncompleteNode(node.lnode!),
    minDepthToIncompleteNode(node.rnode!)) + 1;
}

export { minDepthToIncompleteNode };





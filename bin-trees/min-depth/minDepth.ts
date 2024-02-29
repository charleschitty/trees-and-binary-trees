import { BNodeNum } from "../common/bintree";

/** Get minimum depth from node.
 *
 * Minimum depth: length of shortest path from node to a leaf.
 **/

function minDepth(node: BNodeNum): number {
  // if (node === null) return Infinity
  if(!node.lnode && !node.rnode) return 1;

  // A. ok A has a left node and a right node
  // continue
  // b...
  // C has a left node but no right node
  // continue
  // G has no left node nor right node
  // end
  // C.rightnode has no left node aand no right node and is nulL (no count)
  let leftLength = Infinity
  let rightLength = Infinity

  if (node.lnode){
    leftLength = minDepth(node.lnode)
  }

  if (node.rnode){
    rightLength = minDepth(node.rnode)
  }

  return Math.min(
    leftLength,
    rightLength) + 1;
}

export { minDepth };

//              6
//            /   \
//           5     5
//
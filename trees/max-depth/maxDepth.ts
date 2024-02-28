import { TreeNodeNum } from "../common/tree";

/** Get maximum depth from node.
 *
 * Maximum depth: length of longest path from node to a leaf.
 **/

function maxDepth(node: TreeNodeNum | null): number {
  //basecase
  if (node === null) return 0;

  let longest = 0;

  for (const child of node.children) { // 2, 3
    let childDepth = maxDepth(child)
    longest = Math.max(longest, childDepth)
    }

  return longest + 1
  }

export { maxDepth };
import { TreeNodeNum } from "../common/tree";

/** Get maximum depth from node.
 *
 * Maximum depth: length of longest path from node to a leaf.
 **/

function maxDepth(node: TreeNodeNum | null): number {
  //basecase
  if (node === null) return 0;
  let count = 1;
  let longest = 0;
  for (const child of node.children) {
    count += maxDepth(child);
    if (node.children.length === 0) {
      if (longest < count) {
        longest = count;
      }
      count = 1;
    }
  }
  return longest;
}

export { maxDepth };

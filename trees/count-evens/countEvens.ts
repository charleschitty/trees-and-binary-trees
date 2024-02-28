import { TreeNodeNum } from "../common/tree";

/** countEvens(): starting from the invoking node and moving through its
 * children, count how many nodes have even values. Returns that count as
 * an integer. */
function countEvens(node: TreeNodeNum): number {
  let count = 0;

  if (node.val % 2 === 0){
    count += 1
  }

  for (const child of node.children) { // [2,3,4]
    count += countEvens(child)
  }

  return count;
}

export { countEvens };

//            1
//          / | \
//        2   3   4
//               / \
//              5   6
//                   \
//                    7
//                     \
//                      8

import { BNodeNum } from "../common/bintree";

/** Returns smallest value from node that is larger than lowerBound.
 *
 * Returns null if no such value exists.
 **/

function nextLarger(node: BNodeNum, lowerBound: number): number | null {
  let current: BNodeNum | null = node;

  let smallest = Infinity;

  while (current) {
    if (lowerBound < current.val && current.val < smallest )
      smallest = current.val;

    current = (lowerBound < current.val)
      ? current.lnode
      : current.rnode;
  }
  if (smallest === Infinity) {
      return null;
    } else {
      return smallest;
    }
}
  export { nextLarger };

// [  1 , 3 , 5 ]

//   lowerBound = 2
//
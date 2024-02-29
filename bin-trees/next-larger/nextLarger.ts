import { BNodeNum } from "../common/bintree";
import { Stack } from "../common/stack";

/** Returns smallest value from node that is larger than lowerBound.
 *
 * Returns null if no such value exists.
 **/

function nextLarger(node: BNodeNum, lowerBound: number): number | null {
  let stack: Stack<BNodeNum> = new Stack([node]);
  let smallest = Infinity;

  //              6
  //            /   \
  //           5     5

  while (!stack.isEmpty()) {
    let current = stack.pop();
    console.log("My stack is", stack);
    console.log("My current is", current);

    if (lowerBound < current!.val && current!.val < smallest) {
      smallest = current!.val;
    }

    if (node.lnode) {
      stack.push(node.lnode);
    }

    if (node.rnode) {
      stack.push(node.rnode);
    }
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

// let current: BNodeNum | null = node;

//   let smallest = Infinity;

//   while (current) {
//     if (lowerBound < current.val && current.val < smallest )
//       smallest = current.val;

//     current = (lowerBound < current.val)
//       ? current.lnode
//       : current.rnode;
//   }
//   if (smallest === Infinity) {
//       return null;
//     } else {
//       return smallest;
//     }
//
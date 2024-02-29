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
    let current = stack.pop()!;
    console.log("My stack is", stack);
    console.log("My current is", current);

    if (lowerBound < current.val && current.val < smallest) {
      smallest = current.val;
    }

    if (current.lnode) stack.push(current.lnode);
    if (current.rnode) stack.push(current.rnode);
  }

  if (smallest === Infinity) {
    return null;
  } else {
    return smallest;
  }
}

// const stack: Stack<BNodeNum> = new Stack([node]);
// let closest = Infinity;

// while (!stack.isEmpty()) {
//   let node = stack.pop()!;

//   if (node.val > lowerBound && node.val < closest) closest = node.val;

//   if (node.lnode) stack.push(node.lnode);
//   if (node.rnode) stack.push(node.rnode);
// }

// return closest === Infinity ? null : closest;
// }
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
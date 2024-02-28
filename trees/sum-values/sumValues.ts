import { TreeNodeNum } from "../common/tree";

/** sumValues(): add up all values of node and its descendants.
 * Returns sum as an integer. */
function sumValues(node: TreeNodeNum): number {
  let sum = node.val

  for (const child of node.children) {
    sum += sumValues(child)
  }

  return sum
}

export { sumValues };

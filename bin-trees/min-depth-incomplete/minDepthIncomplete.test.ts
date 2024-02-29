import { expect, it } from "vitest";
import { largeTree, longTree, smallTree } from "../common/bintree.test";
import { minDepthToIncompleteNode } from "./minDepthIncomplete";

it("handles simple trees", function () {
  expect(minDepthToIncompleteNode(smallTree.root!)).toBe(2);
});

it("handles more complex trees", function () {
  expect(minDepthToIncompleteNode(largeTree.root!)).toBe(2);
});

it("handles long tree", function () {
  expect(minDepthToIncompleteNode(longTree.root!)).toBe(2);
});

import { Tree } from "@src/types";

const addTree = (nodes: string[], trees: Tree[]): void => {
  if (!nodes.length) {
    return;
  }

  const first = nodes.shift();

  for (let tree of trees) {
    if (tree.key === first) {
      if (!nodes) {
        return;
      }

      if (!tree.node) {
        tree.node = [] as Tree[];
      }

      return addTree(nodes, tree.node);
    }
  }

  trees.push({ key: first } as Tree);

  if (nodes.length) {
    trees[trees.length - 1].node = [] as Tree[];
    return addTree(nodes, trees[trees.length - 1].node!);
  }
};

export const parseLabTree = (data: string[]) => {
  const trees = [] as Tree[];

  data.forEach((path) => {
    const nodes = path.split("/");
    addTree(nodes, trees);
  });

  return trees;
};

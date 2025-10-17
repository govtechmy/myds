import React from "react";
import { PageTree } from "fumadocs-core/server";
import { Tag } from "@govtechmy/myds-react/tag";

// Components that should have SPLaSK tags
const SPLASK_SUPPORT = ["accordion", "select", "search bar", "akordion", "pilih"];

// Function to check if a page should have a beta tag
function checkSplaskTag(name: string | React.ReactNode): boolean {
  if (typeof name === "string") {
    return SPLASK_SUPPORT.some(component => 
      name.toLowerCase().includes(component.toLowerCase())
    );
  }
  return false;
}

// Function to add beta tag to the title
export function addSplaskToTitle(name: string | React.ReactNode): React.ReactNode {
  if (checkSplaskTag(name)) {
    return (
      <div className="justify-between flex w-full">
       <div>{name}</div> <Tag variant="primary" size="small">SPLaSK</Tag>
      </div>
    );
  }
  return name;
}

// Function to transform tree recursively
export function transformTreeWithBeta(tree: PageTree.Root): PageTree.Root {
  const transformNode = (node: PageTree.Node): PageTree.Node => {
    switch (node.type) {
      case "folder":
        return {
          ...node,
          name: addSplaskToTitle(node.name),
          children: node.children?.map(transformNode)
        };
      case "page":
        return {
          ...node,
          name: addSplaskToTitle(node.name)
        };
      default:
        return node;
    }
  };

  return {
    ...tree,
    children: tree.children.map(transformNode)
  };
}
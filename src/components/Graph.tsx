import { useState } from "react";
import { TGraphNode } from "../types";
import GraphNode from "./GraphNode";
import { CategoryWrap, GraphWrap } from "../styles/graphStyles";

const graphStart = {
  value: "Categories",
  children: {},
  id: null,
  parent: null,
  depth: 0,
};
const Graph = () => {
  const [graphTree, setGraphTree] = useState<TGraphNode>(graphStart);
  const renderGraphNodes = (graphNode: TGraphNode) => {
    const nodeChildren = Object.getOwnPropertySymbols(graphNode.children);
    return (
      <div>
        <GraphNode
          graphNode={graphNode}
          graphTree={graphTree}
          setGraphTree={setGraphTree}
        />
        {nodeChildren.length !== 0 && (
          <GraphWrap
            $depth={graphNode.depth}
            $childrenLength={nodeChildren.length}
          >
            {nodeChildren.map((childKey, index) => {
              const element = graphNode.children[childKey];
              return (
                <CategoryWrap key={index}>
                  {renderGraphNodes(element)}
                </CategoryWrap>
              );
            })}
          </GraphWrap>
        )}
      </div>
    );
  };
  return <>{renderGraphNodes(graphStart)}</>;
};

export default Graph;

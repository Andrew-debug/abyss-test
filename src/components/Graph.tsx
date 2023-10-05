import { useState, Fragment } from "react";
import { TGraphNode } from "../types";
import GraphNode from "./GraphNode";

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
    return (
      <div className="category-wrap">
        <GraphNode
          graphNode={graphNode}
          graphTree={graphTree}
          setGraphTree={setGraphTree}
        />
        <div style={{ display: "flex" }}>
          {Object.getOwnPropertySymbols(graphNode.children).map(
            (childKey, index) => {
              const element = graphNode.children[childKey];
              return (
                <Fragment key={index}>{renderGraphNodes(element)}</Fragment>
              );
            }
          )}
        </div>
      </div>
    );
  };
  return <>{renderGraphNodes(graphStart)}</>;
};

export default Graph;

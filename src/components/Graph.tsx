import { useState } from "react";
import GraphNode from "./GraphNode";
import { IGraph } from "../types";
import { v4 as uuidv4 } from "uuid";
import { GraphList } from "../styles/graphStyles";

const Graph = () => {
  const [graph, setGraph] = useState<IGraph[]>([
    {
      value: "Category",
      children: [],
      parent: null,
      depth: 0,
      id: uuidv4(),
    },
  ]);

  const renderGraph = (graphTree: IGraph[]) => {
    return (
      <>
        {graphTree.length !== 0 && (
          <GraphList>
            {graphTree.map((node) => (
              <GraphNode
                key={node.id}
                node={node}
                graph={graph}
                setGraph={setGraph}
              >
                {renderGraph(node.children)}
              </GraphNode>
            ))}
          </GraphList>
        )}
      </>
    );
  };
  return <>{renderGraph(graph)}</>;
};

export default Graph;

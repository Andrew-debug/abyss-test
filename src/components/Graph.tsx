import { useState } from "react";
import NewGraphNode from "./GraphNode";
import { IGraph } from "../types";
import { v4 as uuidv4 } from "uuid";
import { GraphList } from "../styles/graphStyles";

const NewGraph = () => {
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
              <NewGraphNode
                key={node.id}
                node={node}
                graph={graph}
                setGraph={setGraph}
              >
                {renderGraph(node.children)}
              </NewGraphNode>
            ))}
          </GraphList>
        )}
      </>
    );
  };
  return <>{renderGraph(graph)}</>;
};

export default NewGraph;

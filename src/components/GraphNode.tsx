import { useState } from "react";
import { TGraphNode } from "../types";
import GraphButton from "./GraphButton";
import { nodesColors } from "../constants";

interface IGraphNode {
  graphNode: TGraphNode;
  graphTree: TGraphNode;
  setGraphTree: any;
}

function GraphNode({ graphNode, graphTree, setGraphTree }: IGraphNode) {
  const [inputValue, setInputValue] = useState(graphNode.value);
  const [isEditMode, setisEditMode] = useState(graphNode.value ? false : true);
  const [beforeEditValue, setBeforeEditValue] = useState("");
  const createChild = () => {
    const newGraphId = Symbol();
    graphNode.children[newGraphId] = {
      value: "",
      children: {},
      id: newGraphId,
      parent: graphNode,
      depth: graphNode.depth + 1,
    };
    setGraphTree({ ...graphTree });
  };
  const deleteItem = () => {
    delete graphNode.parent!.children[graphNode.id];
    setGraphTree({ ...graphTree });
  };

  const getTextColor = (isEditMode: boolean, depth: number) => {
    if (isEditMode || depth === 0) {
      return "#000";
    } else {
      return "#fff";
    }
  };
  return (
    <div className="category-node">
      <div
        style={{
          backgroundColor: isEditMode ? "#fff" : nodesColors[graphNode.depth],
          color: isEditMode ? "#000" : "#fff",
        }}
        className="input-wrap"
      >
        <input
          type="text"
          style={{
            color: getTextColor(isEditMode, graphNode.depth),
          }}
          className={
            isEditMode
              ? "node-input--gray-placeholder"
              : "node-input--white-placeholder"
          }
          placeholder="Category name"
          disabled={!isEditMode}
          value={inputValue}
          onChange={(e) => {
            graphNode.value = e.target.value;
            setInputValue(e.target.value);
          }}
          autoFocus
        />
      </div>
      {isEditMode ? (
        <GraphButton
          handleClick={() => {
            setisEditMode(false);
            setInputValue(beforeEditValue);
          }}
          action="cancel"
        />
      ) : (
        <GraphButton handleClick={() => createChild()} action="create" />
      )}
      {graphNode.id && isEditMode ? (
        <GraphButton
          handleClick={() => setisEditMode(false)}
          action="confirm"
        />
      ) : (
        <GraphButton
          handleClick={() => {
            setisEditMode(true);
            setBeforeEditValue(inputValue);
          }}
          action="edit"
        />
      )}
      {graphNode.parent && !isEditMode && (
        <GraphButton handleClick={() => deleteItem()} action="delete" />
      )}
    </div>
  );
}

export default GraphNode;

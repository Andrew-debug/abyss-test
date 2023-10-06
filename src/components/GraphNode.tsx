import { useState } from "react";
import { TGraphNode } from "../types";
import GraphButton from "./GraphButton";
import { nodesColors } from "../constants";
import { CategoryNode, InputWrap } from "../styles/graphStyles";

interface IGraphNode {
  graphNode: TGraphNode;
  graphTree: TGraphNode;
  setGraphTree: (v: TGraphNode) => void;
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

  return (
    <CategoryNode>
      <InputWrap
        $isEditMode={isEditMode}
        $bgColor={nodesColors[graphNode.depth]}
        $depth={graphNode.depth}
      >
        <input
          name="category"
          type="text"
          placeholder="Category name"
          disabled={!isEditMode}
          value={inputValue}
          onChange={(e) => {
            graphNode.value = e.target.value;
            setInputValue(e.target.value);
          }}
          autoFocus
        />
      </InputWrap>

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
    </CategoryNode>
  );
}

export default GraphNode;

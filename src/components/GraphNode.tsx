import { ReactNode, useState } from "react";
import { IGraph } from "../types";
import NewGraphNodeBtnGroup from "./GraphNodeBtnGroup";
import { v4 as uuidv4 } from "uuid";
import { CategoryInner, NewCategoryWrap } from "../styles/graphStyles";
import { nodesColors } from "../constants";

interface IGraphNode {
  node: IGraph;
  children: ReactNode;
  graph: IGraph[];
  setGraph: (v: IGraph[]) => void;
}
const NewGraphNode = ({ node, children, graph, setGraph }: IGraphNode) => {
  const [inputValue, setInputValue] = useState(node.value);
  const [isEditMode, setisEditMode] = useState(node.value ? false : true);
  const [beforeEditValue, setBeforeEditValue] = useState("");

  const createChild = () => {
    node.children.push({
      value: "",
      children: [],
      parent: node,
      depth: node.depth + 1,
      id: uuidv4(),
    });
    setGraph([...graph]);
  };
  const deleteItem = () => {
    if (node.parent) {
      node.parent.children = node.parent.children.filter(
        (item) => item.id !== node.id
      );
    }
    setGraph([...graph]);
  };

  return (
    <li>
      <NewCategoryWrap>
        <CategoryInner
          $depth={node.depth}
          $isEditMode={isEditMode}
          $bgColor={nodesColors[node.depth]}
        >
          <input
            name="category"
            type="text"
            placeholder="Category name"
            disabled={!isEditMode}
            value={inputValue}
            onChange={(e) => {
              node.value = e.target.value;
              setInputValue(e.target.value);
            }}
            autoFocus
          />
          <NewGraphNodeBtnGroup
            isEditMode={isEditMode}
            setisEditMode={setisEditMode}
            setInputValue={setInputValue}
            beforeEditValue={beforeEditValue}
            createChild={createChild}
            setBeforeEditValue={setBeforeEditValue}
            node={node}
            inputValue={inputValue}
            deleteItem={deleteItem}
          />
        </CategoryInner>
      </NewCategoryWrap>
      {children}
    </li>
  );
};

export default NewGraphNode;

import { BtnGroupDiv } from "../styles/graphStyles";
import { IGraph } from "../types";
import GraphButton from "./GraphButton";

interface IGraphNodeBtnGroup {
  isEditMode: boolean;
  setisEditMode: (v: boolean) => void;
  inputValue: string;
  setInputValue: (v: string) => void;
  beforeEditValue: string;
  setBeforeEditValue: (v: string) => void;
  createChild: () => void;
  node: IGraph;
  deleteItem: () => void;
}

const NewGraphNodeBtnGroup = ({
  isEditMode,
  setisEditMode,
  setInputValue,
  beforeEditValue,
  setBeforeEditValue,
  createChild,
  node,
  inputValue,
  deleteItem,
}: IGraphNodeBtnGroup) => {
  return (
    <BtnGroupDiv $isEditMode={isEditMode} $depth={node.depth}>
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

      {node.id && isEditMode ? (
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

      {node.parent && !isEditMode && (
        <GraphButton handleClick={() => deleteItem()} action="delete" />
      )}
    </BtnGroupDiv>
  );
};

export default NewGraphNodeBtnGroup;

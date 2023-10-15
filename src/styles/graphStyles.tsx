import styled from "styled-components";

export const CategoryWrap = styled.div`
  width: 100%;
  position: relative;
  padding: 20px 50px 0 50px;
  color: white;
  text-align: center;
`;

export const GraphList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  position: relative;
  padding-top: 20px;

  ul::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    border-left: 1px solid gray;
    width: 0;
    height: 20px;
  }

  li {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  li > ${CategoryWrap}::before {
    content: "";
    position: absolute;
    top: 0;
    right: 50%;
    border-top: 1px solid gray;
    width: 50%;
    height: 19px;
  }
  li > ${CategoryWrap}::after {
    content: "";
    position: absolute;
    top: 0;
    right: 50%;
    border-top: 1px solid gray;
    width: 50%;
    height: 19px;
  }
  li > ${CategoryWrap}::after {
    right: auto;
    left: 50%;
    border-left: 1px solid gray;
  }
  li:only-child > ${CategoryWrap}::after {
    display: none;
  }
  li:only-child > ${CategoryWrap}::before {
    display: none;
  }

  li:only-child > ${CategoryWrap} {
    padding-top: 0;
  }

  li:first-child > ${CategoryWrap}::before {
    border: none;
  }
  li:last-child > ${CategoryWrap}::after {
    border: none;
  }
  li:last-child > ${CategoryWrap}::before {
    border-right: 1px solid gray;
    border-radius: 0 5px 0 0;
  }
  li:first-child > ${CategoryWrap}::after {
    border-radius: 5px 0 0 0;
  }
`;
interface ICategoryInner {
  $isEditMode: boolean;
  $depth: number;
  $bgColor: string;
}
export const CategoryInner = styled.div<ICategoryInner>`
  display: inline-block;
  padding: 5px;
  position: relative;
  font-weight: 600;
  background-color: ${({ $isEditMode, $bgColor }) =>
    $isEditMode ? "#fff" : $bgColor};
  color: ${({ $isEditMode }) => ($isEditMode ? "#000" : "#fff")};
  input {
    all: unset;
    width: 100%;
    padding: 5px 0;
    text-align: center;
    color: ${({ $isEditMode, $depth }) =>
      $isEditMode || $depth === 0 ? "#000" : "#fff"};
  }
  input::placeholder {
    color: ${({ $isEditMode }) => ($isEditMode ? "gray" : "#fff")};
  }
`;

interface IBtnGroupDiv {
  $isEditMode: boolean;
  $depth: number;
}
export const BtnGroupDiv = styled.div<IBtnGroupDiv>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 11px;
  right: ${({ $isEditMode, $depth }) =>
    $isEditMode || $depth === 0 ? "-50px" : "-75px"};
  z-index: 10;
`;

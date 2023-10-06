import styled, { css } from "styled-components";

export const GraphWrap = styled.ul<{ $depth: number; $childrenLength: number }>`
  display: flex;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: -21px;
    left: 50%;
    border-left: 1px solid gray;
    width: 0;
    height: ${({ $childrenLength }) => ($childrenLength > 1 ? "22px" : "44px")};
  }

  ${({ $depth, $childrenLength }) =>
    $depth === 0 &&
    css`
      &::before {
        content: "";
        position: absolute;
        top: -21px;
        left: 50%;
        border-left: 1px solid gray;
        width: 0;
        height: ${$childrenLength > 1 ? "22px" : "44px"};
      }
    `}

  li::before,
 li::after {
    content: "";
    position: absolute;
    top: 0;
    right: 50%;
    border-top: 1px solid gray;
    width: 50%;
    height: 20px;
  }
  li::after {
    right: auto;
    left: 50%;
    border-left: 1px solid gray;
  }

  li:only-child::after,
  li:only-child::before {
    display: none;
  }

  li:only-child {
    padding-top: 0;
  }

  li:first-child::before,
  li:last-child::after {
    border: 0 none;
  }
  li:last-child::before {
    border-right: 1px solid gray;
    border-radius: 0 5px 0 0;
    -webkit-border-radius: 0 5px 0 0;
    -moz-border-radius: 0 5px 0 0;
  }
  li:first-child::after {
    border-radius: 5px 0 0 0;
    -webkit-border-radius: 5px 0 0 0;
    -moz-border-radius: 5px 0 0 0;
  }
`;
export const CategoryWrap = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const CategoryNode = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  margin: 21px;
`;

interface IInputWrap {
  $isEditMode: boolean;
  $bgColor: string;
  $depth: number;
}
export const InputWrap = styled.div<IInputWrap>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  min-width: 100px;
  padding: 10px;
  background-color: #fff;
  font-weight: 600;

  background-color: ${({ $isEditMode, $bgColor }) =>
    $isEditMode ? "#fff" : $bgColor};
  color: ${({ $isEditMode }) => ($isEditMode ? "#000" : "#fff")};

  input {
    all: unset;
    width: 100%;
    text-align: center;
    color: ${({ $isEditMode, $depth }) =>
      $isEditMode || $depth === 0 ? "#000" : "#fff"};
  }
  input::placeholder {
    color: ${({ $isEditMode }) => ($isEditMode ? "gray" : "#fff")};
  }
`;

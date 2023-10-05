import { Fragment, useState } from "react";

type TNode = {
  value: string;
  childs: TNode[];
};
const sample_graph = {
  value: "root",
  childs: [
    {
      value: "layer 1 node 1",
      childs: [
        {
          value: "layerdsada 2 node 1",
          childs: [],
        },
        {
          value: "layerssssssssss 2 node 2",
          childs: [],
        },
        {
          value: "layedadsr 2 node 3",
          childs: [],
        },
        {
          value: "layer 2 node 4",
          childs: [],
        },
      ],
    },
    {
      value: "se 2",
      childs: [
        {
          value: "lasode 5",
          childs: [],
        },
        {
          value: "lays6",
          childs: [],
        },
      ],
    },
    {
      value: "ls",
      childs: [],
    },
  ],
};
function Graph() {
  // const layers = [];
  // let currentNodesLayer = [sample_graph];
  // let nextNodesLayer = [];
  // let counter = 0;
  // while (true) {
  //   currentNodesLayer.forEach((el) => {
  //     layers.push(
  //       <div key={counter} className="category-node">
  //         {el.value}
  //       </div>
  //     );
  //     counter++;
  //   });
  //   currentNodesLayer.forEach((el) => {
  //     el.childs.forEach((child) => nextNodesLayer.push(child));
  //   });
  //   if (nextNodesLayer.length === 0) {
  //     break;
  //   }
  //   currentNodesLayer = nextNodesLayer;
  //   nextNodesLayer = [];
  // }
  // return <>{layers}</>;
  const [graph, setgraph] = useState(sample_graph);
  const getDivFromGraph = (
    node: TNode,
    leftEnd: boolean,
    rightEnd: boolean
  ) => {
    return (
      <div className="category-wrap">
        {/* {leftEnd && (
            <section
              style={{
                position: "absolute",
                top: -25,
                left: 0,
                width: "50%",
                height: 20,
                backgroundColor: "#242424",
              }}
            ></section>
          )}
          {rightEnd && (
            <section
              style={{
                position: "absolute",
                top: -25,
                right: 0,
                width: "50%",
                height: 20,
                backgroundColor: "#242424",
              }}
            ></section>
          )} */}
        <div className="category-node">
          <span style={{ padding: 5, backgroundColor: "#fff" }}>
            {node.value}
          </span>
        </div>
        {/* {node.childs.length !== 0 && (
            <hr
              style={{
                width: "95%",
                alignSelf: "center",
                color: "white",
                border: "1px solid rgb(128, 128, 128)",
              }}
            />
          )} */}
        <div style={{ display: "flex" }}>
          {node.childs.map((element, index) => (
            <Fragment key={index}>
              {getDivFromGraph(
                element,
                index === 0,
                index === node.childs.length - 1
              )}
            </Fragment>
          ))}
        </div>
      </div>
    );
  };
  return getDivFromGraph(sample_graph, false, false);
}

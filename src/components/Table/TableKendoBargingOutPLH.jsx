import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import PlanBargingOutPort from "./dummyData/PlanBargingOutPort.json";
import { cellFontColor } from "../../utils/table/index";
const mergeCells = (data) => {
  let looped = 1;
  for (let i = 0; i < data.length; i += looped) {
    let rowSpan = 1;
    looped = 1;
    for (let j = i + 1; j < data.length; j++) {
      if (data[i].Jetty === data[j].Jetty) {
        looped++;
        rowSpan++;
      } else {
        break;
      }
    }
    data[i].discontinuedCellRowSpan =
      rowSpan === 1 ? (looped === 1 ? 1 : undefined) : rowSpan;
    }
    defaultExpanded(data)
    return data;
  };
const defaultExpanded = (data) => {
  for(let i = 0; i < data.length; i++){
    data[i].SubTotal ? data[i].expanded = true : data[i].expanded = false
  }
}
const DetailComponent = (props) => {
    const dataItem = props.dataItem;
    return (
        <>
        {
            props.dataItem['SubTotal'] ?
            <div>
              <div className="w-100 row justify-content-center">
                  <div className="col">
                      <h5 className="fw-bold me-2">Sub total:</h5>
                  </div>
              </div>
                <div className="row">
                  <div className="col">
                    <div>
                      <span className="font-14 fw-bold">1. Plan Cargo (Ton):</span><span className="ms-3 font-12">{props.dataItem['SubTotal']}</span>
                    </div>
                  </div>
                </div>
            </div>
            : null
        }
        </>
    );
  };
const TableKendoBargingOutPLH = () => {
  const [gridData, setGridData] = useState(() =>
    mergeCells(PlanBargingOutPort)
  );
  //utils
  const expandChange = (event) => {
    let newData = gridData.map((item) => {
        if (item.Jetty === event.dataItem.Jetty && item.SubTotal) {
        item.expanded = !event.dataItem.expanded;
      }
      return item;
    });
    setGridData(newData);
  };
  // methods
  const updateItem = (item) => {
    console.log(gridData,"ini grid dataaa")
    const updatedProducts = [...gridData];
    const index = updatedProducts.findIndex(
      (record) => record.ProductID === item.ProductID
    );
    updatedProducts[index] = item;
    return updatedProducts;
  };
  const getItemIndex = (dataItem) => {
    return gridData.findIndex(
      (record) => record.ProductID === dataItem.ProductID
    );
  };
  const hoverMergedCellByIndex = (index, hover) => {
    let currentIndex = index;
    let currentDataItem = gridData[currentIndex];
    while (!currentDataItem.discontinuedCellRowSpan) {
      currentIndex--;
      currentDataItem = gridData[currentIndex];
    }
    currentDataItem.jettyClassName = hover ? "k-hover" : undefined;
    update(currentDataItem);
  };
  const updateNextItems = (index, count, hover) => {
    for (let i = index; i < index + count; i++) {
      const dataItem = gridData[i];
      dataItem.className = hover ? "k-hover" : undefined;
      update(dataItem);
    }
  };
  const handleMergedHover = (dataItem, rowSpanNumber, hover) => {
    const index = getItemIndex(dataItem);
    updateNextItems(index, rowSpanNumber, hover);
  };
  const handleCellHover = (dataItem, hover) => {
    if (dataItem.discontinuedCellRowSpan) {
      return;
    }
    let index = getItemIndex(dataItem);
    hoverMergedCellByIndex(index, hover);
  };
  const update = (dataItem) => {
    const updatedData = updateItem(dataItem);
    setGridData(updatedData);
  };
  const cellRender = (cell, props) => {
    const { dataItem, field } = props;
    if (field === "Jetty") {
      console.log(dataItem,"ini data nya lur")
      if (dataItem.discontinuedCellRowSpan) {
        return (
          <td
            {...cell.props}
            rowSpan={dataItem.discontinuedCellRowSpan}
            className={dataItem.className || dataItem.jettyClassName}
            onMouseOver={() => {
              handleMergedHover(
                dataItem,
                dataItem.discontinuedCellRowSpan,
                true
              );
            }}
            onMouseOut={() => {
              handleMergedHover(
                dataItem,
                dataItem.discontinuedCellRowSpan,
                false
              );
            }}
          >
            {cell.props.children}
          </td>
        );
      } else {
        return null;
      }
    }
    return (
      <td
        {...cell.props}
        className={dataItem.className}
        colSpan={props.colSpan}
        onMouseOver={() => {
          handleCellHover(props.dataItem, true);
        }}
        onMouseOut={() => {
          handleCellHover(props.dataItem, false);
        }}
      >
        {cell.props.children}
      </td>
    );
  };
  return (
    <div id="table-kendo-barging-out-plh">
      <div>
          <Grid
            style={{
              height: "510px",
            }}
            data={gridData}
            cellRender={cellRender}
            groupable={{
              footer: "visible",
            }}
            expandField="expanded"
            sortable={true}
            onExpandChange={expandChange}
            detail={DetailComponent}
            >
            <Column field="ProductID" title="ID" width="40px"/>
            <Column field="Jetty" width="60px" />
            <Column field="ProductName" title="Entity" width="90px" />
            <Column field="Tugboat" title="Tugboat" width="120px" />
            <Column field="Barge" title="Barge" width="150px" />
            <Column field="Destination" title="Destination" width="120px" />
            <Column field="Arrival" title="Arrival" width="120px" />
            <Column field="Alongside" title="AlongSide" width="120px" />
            <Column field="Commence" title="Commence" width="120px" />
            <Column field="Complete" title="Complete" width="120px" />
            <Column field="Castoff" title="Cast Off" width="120px" />
            <Column field="Plancargo" title="Plan Cargo (Ton)" width="140px" />
            <Column field="Actcargo" title="Act Cargo (Ton)" width="140px" />
            <Column
              field="Status"
              title="Status"
              cell={(props) => cellFontColor(props)}
              width="inherit"
            />
          </Grid>
        </div>
        <div>
          <div className="row p-2">
            <div className="col">
              <div className="ms-3 bg-primary-2 p-2">
                <h3 className="font-14 fw-bold">Total:</h3>
                <div>
                  <span className="font-14 fw-bold">1. Plan Cargo (Ton):</span><span className="ms-3 font-12 fw-semibold">60.600</span>
                </div>
                <div>
                  <span className="font-14 fw-bold">2. Act Cargo (Ton):</span><span className="ms-3 font-12 fw-semibold">5.309,03</span>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};
export default TableKendoBargingOutPLH;

// import React, { useEffect, useState } from "react";
// import * as ReactDOM from "react-dom";

// const TableKendoBargingOutPLH = () => {
//   const [header, setHeader] =useState([
//     { name: "No" },
//     { name: "Jetty" },
//     { name: "Entity" },
//     { name: "Tugboat" },
//     { name: "Barge" },
//     { name: "Destination" },
//     { name: "Arrival" },
//     { name: "Alongside" },
//     { name: "Commence" },
//     { name: "Complete" },
//     { name: "Cast Off" },
//     { name: "Plan Cargo (Ton)" },
//     { name: "Act Cargo (Ton)" },
//     { name: "Status" }
//   ])
//   const [item, setItem] = useState([
//     {
//         jetty:"CR018",
//         entity:"abb",
//         tugboat:"ercalm",
//         barge:"estella",
//         destination:"MV. Pedhpulas rose",
//         arrival:"11/06/23 21.30",
//         alongside:"11/06/23 21.30",
//         commence:"11/06/23 21.30",
//         complete:"11/06/23 21.30",
//         castoff:"11/06/23 21.30",
//         castoff:"11/06/23 21.30",
//         plancargo: "10.000",
//         actcargo: "10.000",
//         status: "On Proses",
//     },
//     {
//         jetty: "CR018",
//         entity:"abb",
//         tugboat:"ercalm",
//         barge:"estella",
//         destination:"MV. Pedhpulas rose",
//         arrival:"11/06/23 21.30",
//         alongside:"11/06/23 21.30",
//         commence:"11/06/23 21.30",
//         complete:"11/06/23 21.30",
//         castoff:"11/06/23 21.30",
//         castoff:"11/06/23 21.30",
//         plancargo: "10.000",
//         actcargo: "10.000",
//         status: "On Proses",
//     },
//     {
//         jetty: "CR018",
//         entity:"abb",
//         tugboat:"ercalm",
//         barge:"estella",
//         destination:"MV. Pedhpulas rose",
//         arrival:"11/06/23 21.30",
//         alongside:"11/06/23 21.30",
//         commence:"11/06/23 21.30",
//         complete:"11/06/23 21.30",
//         castoff:"11/06/23 21.30",
//         castoff:"11/06/23 21.30",
//         plancargo: "10.000",
//         actcargo: "10.000",
//         status: "On Proses",
//     },
//   ])
//   function groupData(data) {
//     const grouped = {};
//     data.forEach((item) => {
//       if (!grouped[item.jetty]) {
//         grouped[item.jetty] = {
//           jetty: item.jetty,
//           rowspan: 1,
//           barge: item.barge,
//         };
//       } else {
//         grouped[item.jetty].rowspan++;
//       }
//     });
//     return Object.values(grouped);
//   }

//   const groupedData = groupData(item);
//   console.log(groupedData)
//   return (
//     <>
//       <div id="table-manual-barging-out-plh">
//         <table>
//           <thead>
//             <tr>
//               {header.map((element) => (
//                 <th>{element.name}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//           {groupedData.map((item, index) => (
//             <tr key={index}>
//               <td>{++index}</td>
//               <td rowSpan={item.rowspan}>{item.jetty}</td>
//               <td>{item.barge}</td>
//             </tr>
//           ))}
//             {/* { item.map((element, index)=>(
//                 <tr>
//                     <td>{++index}</td>
//                     <td>{element.jetty[0].name}</td>
//                     <td>{element.entity}</td>
//                     <td>{element.tugboat}</td>
//                     <td>{element.barge}</td>
//                     <td>{element.destination}</td>
//                     <td>{element.arrival}</td>
//                     <td>{element.alongside}</td>
//                     <td>{element.commence}</td>
//                     <td>{element.complete}</td>
//                     <td>{element.castoff}</td>
//                     <td>{element.plancargo}</td>
//                     <td>{element.actcargo}</td>
//                     <td>{element.status}</td>
//                 </tr>
//             ))} */}
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// };

// export default TableKendoBargingOutPLH;

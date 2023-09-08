// import * as React from 'react';
// import * as ReactDOM from 'react-dom';
// import { process } from '@progress/kendo-data-query';
// import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
// import { CustomFilterUI } from './customFilterUI';
// import { GridColumnMenuFilter } from '@progress/kendo-react-grid';
// import products from './products.json';
// const createDataState = dataState => {
//   return {
//     result: process(products.slice(0), dataState),
//     dataState: dataState
//   };
// };
// const TableKendoFilter = () => {
//   let initialState = createDataState({
//     take: 8,
//     skip: 0
//   });
//   const [result, setResult] = React.useState(initialState.result);
//   const [dataState, setDataState] = React.useState(initialState.dataState);
//   const dataStateChange = event => {
//     let updatedState = createDataState(event.dataState);
//     setResult(updatedState.result);
//     setDataState(updatedState.dataState);
//   };
//   return <div>
//         <Grid data={result} {...dataState} onDataStateChange={dataStateChange} sortable={true} pageable={true} pageSize={8}>
//           <Column field={'ProductName'} title={'Product Name'} columnMenu={props => <GridColumnMenuFilter {...props} filterUI={CustomFilterUI} />}/>
//           <Column field={'Discontinued'} title={'Discontinued'} filter={'boolean'} columnMenu={props => <GridColumnMenuFilter {...props} filterUI={CustomFilterUI} />} />
//         </Grid>
//         <br />
//       </div>;
// };
// export default TableKendoFilter;

import * as React from "react";
import {
  Grid,
  GridColumn as Column,
  getSelectedState,
  getSelectedStateFromKeyDown,
} from "@progress/kendo-react-grid";
import products from "./products.json";
import { getter } from "@progress/kendo-react-common";
import { process } from "@progress/kendo-data-query";

import { CustomFilterUI } from "./customFilterUI";
import { GridColumnMenuFilter } from "@progress/kendo-react-grid";

const DATA_ITEM_KEY = "ProductID";
const SELECTED_FIELD = "selected";
const idGetter = getter(DATA_ITEM_KEY);

const createDataState = (dataState) => {
  return {
    result: process(products.slice(0), dataState),
    dataState: dataState,
  };
};

const TableKendoFilter = () => {
  let initialState = createDataState({
    take: 8,
    skip: 0,
  });
  const dataStateChange = (event) => {
    let updatedState = createDataState(event.dataState);
    setResult(updatedState.result);
    setDataState(updatedState.dataState);
  };
  //   const [data, setData] = React.useState(
  //     products.map((dataItem) =>
  //       Object.assign(
  //         {
  //           selected: false,
  //         },
  //         dataItem
  //       )
  //     )
  //   );
  const [selectedState, setSelectedState] = React.useState({});
  const [result, setResult] = React.useState(initialState.result);
  const [dataState, setDataState] = React.useState(initialState.dataState);
  const onSelectionChange = (event) => {
    const newSelectedState = getSelectedState({
      event,
      selectedState: selectedState,
      dataItemKey: DATA_ITEM_KEY,
    });
    setSelectedState(newSelectedState);
  };
  const onKeyDown = (event) => {
    const newSelectedState = getSelectedStateFromKeyDown({
      event,
      selectedState: selectedState,
      dataItemKey: DATA_ITEM_KEY,
    });
    setSelectedState(newSelectedState);
  };
  return (
    <div>
      <Grid
        style={{
          height: "400px",
        }}
        data={result.data.map((item) => ({
          ...item,
          [SELECTED_FIELD]: selectedState[idGetter(item)],
        }))}
        {...dataState}
        dataItemKey={DATA_ITEM_KEY}
        selectedField={SELECTED_FIELD}
        selectable={{
          enabled: true,
          drag: false,
          cell: false,
          mode: "single",
        }}
        onDataStateChange={dataStateChange}
        sortable={{
          allowUnsort: false,
        }}
        pageable={true}
        pageSize={8}
        total={result.total}
        navigatable={true}
        onSelectionChange={onSelectionChange}
        onKeyDown={onKeyDown}
      >
        <Column
          field="ProductID"
          title="Product Id"
          width="150px"
          locked={true}
          columnMenu={(props) => (
            <GridColumnMenuFilter {...props} filterable={true} filterUI={CustomFilterUI} />
          )}
        />
        <Column
          field="ProductName"
          title="Product Name"
          width="150px"
          locked={true}
          columnMenu={(props) => (
            <GridColumnMenuFilter {...props} filterUI={CustomFilterUI} />
          )}
        />
        <Column
          field="UnitsInStock"
          title="Units In Stock"
          width="300px"
          columnMenu={(props) => (
            <GridColumnMenuFilter {...props} filterUI={CustomFilterUI} />
          )}
        />
        <Column
          field="UnitsOnOrder"
          title="Units On Order"
          width="300px"
          columnMenu={(props) => (
            <GridColumnMenuFilter {...props} filterUI={CustomFilterUI} />
          )}
        />
        <Column
          field="ReorderLevel"
          title="Reorder Level"
          width="300px"
          columnMenu={(props) => (
            <GridColumnMenuFilter {...props} filterUI={CustomFilterUI} />
          )}
        />
        <Column
          field="ReorderLevel"
          title="Reorder Level"
          width="300px"
          columnMenu={(props) => (
            <GridColumnMenuFilter {...props} filterUI={CustomFilterUI} />
          )}
        />
        <Column
          field="ReorderLevel"
          title="Reorder Level"
          width="300px"
          columnMenu={(props) => (
            <GridColumnMenuFilter {...props} filterUI={CustomFilterUI} />
          )}
        />
      </Grid>
    </div>
  );
};
export default TableKendoFilter;

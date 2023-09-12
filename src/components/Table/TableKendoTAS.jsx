import * as React from "react";
import * as ReactDOM from "react-dom";
import { getter } from "@progress/kendo-react-common";
import { process } from "@progress/kendo-data-query";
import {
  Grid,
  GridColumn as Column,
  getSelectedState,
} from "@progress/kendo-react-grid";
import { CustomColumnMenu } from "../Table/trial/customColumnMenu";
import { cellWithBackGround, cellWithBackGroundPergerakanBarge, cellFontColorA2B } from "../../utils/table";

import columns from "./dummyData/columnsTAS";

const DATA_ITEM_KEY = "id";
const SELECTED_FIELD = "selected";
const idGetter = getter(DATA_ITEM_KEY);

const TableKendoTAS = ({dataTableProps}) => {
    const createDataState = (dataState) => {
      return {
        result: process(dataTableProps.slice(0), dataState),
        dataState: dataState,
      };
    };
    let initialState = createDataState({
        take: 8,
        skip: 0,
    });
  const [selectedState, setSelectedState] = React.useState({});
  const [result, setResult] = React.useState(initialState.result);
  const [dataState, setDataState] = React.useState(initialState.dataState);
  const [stateColumns, setStateColumns] = React.useState(columns);
  const onSelectionChange = (event) => {
    const newSelectedState = getSelectedState({
      event,
      selectedState: selectedState,
      dataItemKey: DATA_ITEM_KEY,
    });
    setSelectedState(newSelectedState);
  };
  const dataStateChange = (event) => {
    let updatedState = createDataState(event.dataState);
    setResult(updatedState.result);
    setDataState(updatedState.dataState);
  };
  const onColumnsSubmit = (columnsState) => {
    setStateColumns(columnsState);
  };
  return (
    <div>
      <Grid
        selectable={{ enabled: true, mode: "single" }}
        dataItemKey={DATA_ITEM_KEY}
        selectedField={SELECTED_FIELD}
        data={result.data.map((item) => ({
          ...item,
          [SELECTED_FIELD]: selectedState[idGetter(item)],
        }))}
        {...dataState}
        onDataStateChange={dataStateChange}
        onSelectionChange={onSelectionChange}
        sortable={true}
        pageable={true}
        total={result.total}
        pageSize={8}
      >
        {stateColumns.map(
          (column, idx) =>
            column.show && (
              <Column
                key={idx}
                cell={ column.title === "Status" ? (props) => cellFontColorA2B(props) : null}
                field={column.field}
                title={column.title}
                filter={column.filter}
                columnMenu={(props) => (
                  <CustomColumnMenu
                    {...props}
                    columns={stateColumns}
                    onColumnsSubmit={onColumnsSubmit}
                  />
                )}
              />
            )
        )}
      </Grid>
      <br />
    </div>
  );
};

export default TableKendoTAS;

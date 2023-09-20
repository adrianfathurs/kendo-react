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
import { cellWithBackGround, cellWithBackGroundPergerakanBarge, cellFontColorTAS } from "../../utils/table";
import { CustomFilterUI } from "./customFilterUI";
import { GridColumnMenuFilter } from "@progress/kendo-react-grid";
import {convertDateTime} from "../../utils/dateTime/index"
import {getCapitilization} from "../../utils/typography/index"

const DATA_ITEM_KEY = "id";
const SELECTED_FIELD = "selected";
const idGetter = getter(DATA_ITEM_KEY);

const TableKendoTAS = ({dataTableProps, columnsTableProps}) => {
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
  const [stateColumns, setStateColumns] = React.useState(columnsTableProps);
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
  const headerDateConvert = (props) =>{
    console.log(props, "ini header")
    return props
  }
  const CustomHeaderCell = (props) =>
  {
    if(props.field == "current_date" || props.field == "last_date"){
      return(
        <span>
          {convertDateTime(null," DD-MMM", props.field == "last_date" ? 1 : null , "day")}
        </span>
      )
    }
    else{
      return(
        <span>
          {getCapitilization(props.field)}
        </span>
      )
    }
  }
    
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
                cell={ column.title === "Trend" ? (props) => cellFontColorTAS(props) : null}
                field={column.field}
                headerCell={(props)=>CustomHeaderCell(props)}
                filter={column.filter}
                columnMenu={(props) => (
                  <GridColumnMenuFilter {...props} filterUI={CustomFilterUI} />
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

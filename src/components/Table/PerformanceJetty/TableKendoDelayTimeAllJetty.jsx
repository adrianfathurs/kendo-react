import * as React from "react";
import * as ReactDOM from "react-dom";
import { getter } from "@progress/kendo-react-common";
import { process } from "@progress/kendo-data-query";
import {
  Grid,
  GridColumn as Column,
  getSelectedState,
} from "@progress/kendo-react-grid";
import { CustomColumnMenu } from "../trial/customColumnMenu";
import { cellFontColorJetty, cellWithBackGroundA2BSupport} from "../../../utils/table";
import { CustomFilterUI } from "../customFilterUI";
import { GridColumnMenuFilter } from "@progress/kendo-react-grid";

import columns from "../dummyData/columnsDelayTimeAllJetty"

const DATA_ITEM_KEY = "id";
const SELECTED_FIELD = "selected";
const idGetter = getter(DATA_ITEM_KEY);

const TableKendoDelayTimeAllJetty = ({dataTableProps}) => {
    const createDataState = (dataState) => {
        return {
          result: process(dataTableProps.slice(0), dataState),
          dataState: dataState,
        };
      };
      let initialState = createDataState({
          take: 100,
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
    const test = (check) => {
      console.log(check,"ini check")
    }
    return (
      <div id="table-kendo-A2B-support">
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
          sortable={false}
          pageable={true}
          total={result.total}
          pageSize={100}
        >
          {stateColumns.map(
            (column, idx) =>
              column.show && column.children.length == 0 ? (
                <Column
                  key={idx}
                  cell={column.title === "Unit" ? (props) => cellFontColorJetty(props) : null  }
                  field={column.field === "Subtotal" ? (props) => test(props) : column.field}
                  title={column.title}
                  filter={column.filter}
                  // columnMenu={(props) => (
                  //   <GridColumnMenuFilter {...props} filterUI={CustomFilterUI} />
                  // )}
                /> )
              : (
                  <Column title={column.title}>
                    {
                      column.children.map((item)=>(
                        <Column
                          key={idx}
                          // cell={(props) => cellWithBackGroundA2BSupport(props, 71)}
                          field={item.field}
                          title={item.title}
                          filter={item.filter}
                          // columnMenu={(props) => (
                          //   <GridColumnMenuFilter {...props} filterUI={CustomFilterUI} />
                          // )}
                        /> 
                        ))
                    }
                  </Column>
                )
          )}
        </Grid>
        <br />
      </div>
    );
};


export default TableKendoDelayTimeAllJetty;
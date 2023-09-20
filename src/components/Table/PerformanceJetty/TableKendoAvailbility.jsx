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
import { cellFontColorA2B, cellWithBackGroundA2BSupport} from "../../../utils/table";
import { CustomFilterUI } from "../customFilterUI";
import { GridColumnMenuFilter } from "@progress/kendo-react-grid";

import columns from "../dummyData/columnsPhysicalAvailbility";

const DATA_ITEM_KEY = "id";
const SELECTED_FIELD = "selected";
const idGetter = getter(DATA_ITEM_KEY);

const mergeCells = (data) => {
  let looped = 1;
  for (let i = 0; i < data.data.length; i += looped) {
    let rowSpan = 1;
    looped = 1;
    for (let j = i + 1; j < data.data.length; j++) {
      if (data.data[i].item === data.data[j].item) {
        looped++;
        rowSpan++;
      } else {
        break;
      }
    }
    data.data[i].discontinuedCellRowSpan =
      rowSpan === 1 ? (looped === 1 ? 1 : undefined) : rowSpan;
  }
  return data;
};

const TableKendoPhysicalAvailbility = ({dataTableProps, limitMinimumProps}) => {
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
  const [result, setResult] = React.useState(mergeCells(initialState.result));
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
  const getItemIndex = (dataItem) => {
    return result.data.findIndex(
      (record) => record.id === dataItem.id
    );
  };
  const dataStateChange = (event) => {
    let updatedState = createDataState(event.dataState);
    setResult(updatedState.result);
    setDataState(updatedState.dataState);
  };
  const hoverMergedCellByIndex = (index, hover) => {
    let currentIndex = index;
    let currentDataItem = result.data[currentIndex];
    while (!currentDataItem.discontinuedCellRowSpan) {
      currentIndex--;
      currentDataItem = result.data[currentIndex];
    }
    currentDataItem.itemClassName = hover ? "k-hover" : undefined;
    // update(currentDataItem);
  };
  const updateNextItems = (index, count, hover) => {
    for (let i = index; i < index + count; i++) {
      const dataItem = result.data[i];
      dataItem.className = hover ? "k-hover" : undefined;
      // update(dataItem);
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
    setResult(updatedData);
  };
  const updateItem = (item) => {
    console.log(result,"ini result")
    const updatedProducts = [...result.data];
    console.log(updatedProducts,"ini updated produutcss")
    // const index = updatedProducts.findIndex(
    //   (record) => record.id === item.id
    // );
    // updatedProducts.data[index] = item;
    // return updatedProducts;
  };
  const cellRender = (cell, props) => {
    const { dataItem, field } = props;
    if (field === "item") {
      if (dataItem.discontinuedCellRowSpan) {
        return (
          <td
            {...cell.props}
            rowSpan={dataItem.discontinuedCellRowSpan}
            className={dataItem.className || dataItem.itemClassName}
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
        pageable={true}
        sortable={false}
        total={result.data.total}
        pageSize={8}
        cellRender={cellRender}
      >
        {stateColumns.map(
          (column, idx) =>
            column.show && column.children.length == 0 ? (
              <Column
                key={idx}
                cell={ column.title !== "Item" && column.title !== "Deskripsi" ? (props) => cellWithBackGroundA2BSupport(props, limitMinimumProps) : null}
                field={column.field}
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
                        cell={(props) => cellWithBackGroundA2BSupport(props, 71)}
                        field={ item.field}
                        title={ item.title}
                        filter={ item.filter}
                        columnMenu={(props) => (
                          <GridColumnMenuFilter {...props} filterUI={CustomFilterUI} />
                        )}
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

export default TableKendoPhysicalAvailbility;

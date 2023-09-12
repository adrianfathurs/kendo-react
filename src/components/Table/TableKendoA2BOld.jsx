import React, { useState, useEffect } from "react";
import { Grid, GridColumn, GridToolbar } from "@progress/kendo-react-grid";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import { GridPDFExport } from "@progress/kendo-react-pdf";
import { ExcelExport } from "@progress/kendo-react-excel-export";
import {
  IntlProvider,
  load,
  LocalizationProvider,
  loadMessages,
  IntlService,
} from "@progress/kendo-react-intl";
import likelySubtags from "./supplemental/likelySubtags.json";
import currencyData from "./supplemental/currencyData.json";
import weekData from "./supplemental/weekData.json";
import numbers from "cldr-numbers-full/main/es/numbers.json";
import currencies from "cldr-numbers-full/main/es/currencies.json";
import dateFields from "cldr-dates-full/main/es/dateFields.json";
import timeZoneNames from "cldr-dates-full/main/es/timeZoneNames.json";
import esMessages from "./es.json";
import { process } from "@progress/kendo-data-query";
import { maxWidthIcon } from "@progress/kendo-svg-icons";
load(
  likelySubtags,
  currencyData,
  weekData,
  numbers,
  currencies,
  dateFields,
  timeZoneNames
);
loadMessages(esMessages, "es-ES");
const DATE_FORMAT = "yyyy-mm-dd hh:mm:ss.SSS";
const intl = new IntlService("en");

const DetailComponent = (props) => {
  const dataItem = props.dataItem;
  return (
    <div>
      <section
        style={{
          width: "200px",
          float: "left",
        }}
      >
        <p>
          <strong>Street:</strong> {dataItem.shipAddress.street}
        </p>
        <p>
          <strong>City:</strong> {dataItem.shipAddress.city}
        </p>
        <p>
          <strong>Country:</strong> {dataItem.shipAddress.country}
        </p>
        <p>
          <strong>Postal Code:</strong> {dataItem.shipAddress.postalCode}
        </p>
      </section>
      <Grid data={dataItem.details} />
    </div>
  );
};
const TableKendo = ({dataTableProps}) => {
  //state
  let _pdfExport;
  let _export;
  const locales = [
    {
      language: "en-US",
      locale: "en",
    },
    {
      language: "es-ES",
      locale: "es",
    },
  ];
  const [dataState, setDataState] = useState({
    skip: 0,
    take: 20,
  });
  const [currentLocale, setCurrentLocale] = useState(locales[0]);
  const [dataResult, setDataResult] = useState(process(dataTableProps, dataState));

  // method 
  const dataStateChange = (event) => {
    setDataResult(process(dataTableProps, event.dataState));
    setDataState(event.dataState);
  };
  const expandChange = (event) => {
    const isExpanded =
      event.dataItem.expanded === undefined
        ? event.dataItem.aggregates
        : event.dataItem.expanded;
    event.dataItem.expanded = !isExpanded;
    setDataResult({
      ...dataResult,
      data: [...dataResult.data],
    });
  };
  const sortDate = () => {
    dataTableProps.forEach((o) => {
      o.orderDate = intl.parseDate(
        o.orderDate ? o.orderDate : "20/20/2020",
        DATE_FORMAT
      );
      o.shippedDate = intl.parseDate(
        o.shippedDate ? o.shippedDate.toString() : "20/20/2020",
        DATE_FORMAT
      );
    });
  }

  const exportExcel = () => {
    _export.save();
  };

  const exportPDF = () => {
    _pdfExport.save();
  };

  useEffect(()=>{
    sortDate()
  }, [])

  return (
    <div style={{ maxWidth: "100%" }}>
      <LocalizationProvider language={currentLocale.language}>
        <IntlProvider locale={currentLocale.locale}>
          <div>
            <ExcelExport
              data={dataTableProps}
              ref={(exporter) => {
                _export = exporter;
              }}
            >
              <Grid
                style={{
                  height: "500px",
                  width: "inherit",
                }}
                // sortable={true}
                filterable={true}
                // groupable={true}
                reorderable={true}
                pageable={{
                  buttonCount: 4,
                  pageSizes: true,
                }}
                data={dataResult}
                {...dataState}
                onDataStateChange={dataStateChange}
                // detail={DetailComponent}
                // expandField="expanded"
                onExpandChange={expandChange}
              >
                <GridToolbar className="d-flex justify-content-end">
                  <div>
                    <button
                      title="Export to Excel"
                      className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary"
                      onClick={exportExcel}
                    >
                      Export to Excel
                    </button>
                    &nbsp;
                    <button
                      className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary"
                      onClick={exportPDF}
                    >
                      Export to PDF
                    </button>
                  </div>
                </GridToolbar>
                <GridColumn
                  title="NO"
                  field="id"
                  locked={true}
                  filterable={false}
                  width="90px"
                />
                <GridColumn title="Equipment" field="equipment"/>
                <GridColumn title="Status" field="status" />
                <GridColumn title="Remark" field="remark" />
              </Grid>
            </ExcelExport>
            <GridPDFExport
              ref={(element) => {
                _pdfExport = element;
              }}
              margin="1cm"
            >
              {
                <Grid
                  data={process(dataTableProps, {
                    skip: dataState.skip,
                    take: dataState.take,
                  })}
                >
                  <GridColumn
                    title="NO"
                    field="id"
                    locked={true}
                    filterable={false}
                    width="90px"
                  />
                  <GridColumn title="Tug Boat" field="tugboat" width="200px" />
                  <GridColumn title="Barge" field="barge" width="200px" />
                  <GridColumn title="Size" field="size" width="200px" />
                  <GridColumn
                    title="Arrival / Eta PALA"
                    field="eta"
                    filter="date"
                    format="{0:D}"
                    width="300px"
                  />
                  <GridColumn
                    title="Port Of Discharge"
                    field="plan"
                    width="200px"
                  />
                  <GridColumn title="Status" field="status" width="200px" />
                </Grid>
              }
            </GridPDFExport>
          </div>
        </IntlProvider>
      </LocalizationProvider>
    </div>
  );
};
export default TableKendo;

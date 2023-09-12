import * as React from "react";
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import products from "../../products.json";

import { cellWithBackGround } from "../../../../utils/table/index";

const TableKendoMultiHeader = () => {
  return (
    <>
      <div id="table-kendo-multi-header">
        {[1, 2].map(() => (
          <Grid
            style={{
              height: "420px",
            }}
            resizable={true}
            reorderable={true}
            data={products.slice(0, 10)}
            total={products.length}
          >
            <Column
              field="ProductID"
              title="Entity"
              width={70}
              resizable={false}
            />
            <Column
              field="ProductName"
              title="Product"
              width={100}
              resizable={false}
            />
            <Column title="Dump To">
              <Column field="ProductName" title="SP1" />
              <Column field="UnitPrice" title="SP2" sort={true}></Column>
              <Column field="UnitPrice" title="SP3"></Column>
              <Column field="UnitPrice" title="SP4"></Column>
              <Column field="UnitPrice" title="SP5"></Column>
            </Column>
            <Column field="UnitPrice" title="Total"></Column>
            {/* <Column
        title="Category"
        children={[
          {
              field: "Category.CategoryName",
              title: "Name",
            },
          <Column key={2} field="Category.Description" title="Description" />,
        ]}
        />
    */}
          </Grid>
        ))}
      </div>
    </>
  );
};

export default TableKendoMultiHeader;

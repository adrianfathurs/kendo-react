import * as React from "react";
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import products from "../../products.json";

import { cellWithBackGround } from "../../../../utils/table/index";

const TableKendoMultiHeader = () => {
  return (
    <Grid
      style={{
        height: "420px",
      }}
      resizable={true}
      reorderable={true}
      data={products.slice(0, 10)}
      total={products.length}
    >
      <Column field="ProductID" title="ID" width={40} resizable={false} />
      <Column title="Product Informaiton">
        <Column field="ProductName" title="Name" />
        <Column title="Unit">
          <Column
            field="UnitPrice"
            title="Price"
            cell={(props) => cellWithBackGround(props, 19)}
          />
          <Column field="UnitsInStock" title="In Stock" />
        </Column>
      </Column>
      <Column
        title="Category"
        children={[
          {
            field: "Category.CategoryName",
            title: "Name",
          },
          <Column key={2} field="Category.Description" title="Description" />,
        ]}
      />
    </Grid>
  );
};

export default TableKendoMultiHeader;

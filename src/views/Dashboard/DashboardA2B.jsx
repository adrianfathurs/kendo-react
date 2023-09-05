import React from "react";
import TableKendoA2B from "../../components/Table/TableKendoA2B";

const DashboardA2B = (props) => {
  return (
    <>
      <div>
        <h4>A2B Support</h4>
        <div className="mt-3">
          <TableKendoA2B />
        </div>
      </div>
    </>
  );
};

export default DashboardA2B;

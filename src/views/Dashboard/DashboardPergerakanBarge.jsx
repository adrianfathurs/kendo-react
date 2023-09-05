import React from "react";
import TablePergerakanBarge from "../../components/Table/TablePergerakanBarge";
import TableKendoPergerakanBarge from "../../components/Table/TableKendoPergerakanBarge";

const DashboardPergerakanBarge = (props) => {
  return (
    <>
      <div>
        <h4>Pergerakan Barge</h4>
        <div className="mt-3">
          <TableKendoPergerakanBarge />
        </div>
      </div>
    </>
  );
};

export default DashboardPergerakanBarge;

import React from "react";
import TablePergerakanBarge from "../../components/Table/TablePergerakanBarge";
import TableKendoPergerakanBarge from "../../components/Table/TableKendoPergerakanBarge";
import TableKendoA2B from "../../components/Table/TableKendoA2B";
// import TableKendoA2B from "../../components/Table/TableKendoA2BOld";
import TableKendoPlanHauling from "../../components/Table/TableKendoPlanHauling";
import TableKendoPlanHauling2 from "../../components/Table/TableKendoPlanHauling2";
import TableKendoTAS from "../../components/Table/TableKendoTAS";
// import TableKendoTAS from "../../components/Table/TableKendoTASOld";
import TableKendoBargingOutPLH from "../../components/Table/TableKendoBargingOutPLH";

import TableKendoMultiHeader from "../../components/Table/trial/TableKendoMultiHeader/TableKendoMultiHeader2";

// import data for table kendo a2bWL
import A2BWLData from "../../components/Table/dummyData/A2BWLData.json";
import A2BLDData from "../../components/Table/dummyData/A2BLDData.json";

// import data for table kendo tas data
import TASData from "../../components/Table/dummyData/TASData.json";

function DashboardRealTimeMonitoring() {
  return (
    <>
      <div className="row">
        <div className="col">
          <div className="card p-2 shadow">
            <div className="d-flex justify-content-center">
              <h4>PLAN BARGING OUT PORT PLH_13 JUNI 2023</h4>
            </div>
            <div className="mt-3">
              <TableKendoBargingOutPLH />
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        {/* <div className="col-4">
          <div className="card p-2 shadow">
            <div className="d-flex justify-content-center">
              <h4>Plan Hauling</h4>
            </div>
            <div className="mt-3">
              <TableKendoMultiHeader />
            </div>
          </div>
        </div> */}
        <div className="col-6">
          <div className="card p-2 shadow">
            <div className="d-flex justify-content-center">
              <h4>Pergerakan Barge</h4>
            </div>
            <div className="mt-3">
              <TableKendoPergerakanBarge />
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="row">
            <div className="col">
              <div className="card p-2 shadow">
                <div className="d-flex justify-content-center">
                  <h4>TAS</h4>
                </div>
                <div className="row mt-3">
                  <div className="col col-12">
                    <TableKendoTAS dataTableProps={TASData} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col">
              <div className="card p-2 shadow">
                <div className="d-flex justify-content-center">
                  <h4>A2B Support</h4>
                </div>
                <div className="row mt-3">
                  <div className="col col-md-12 col-sm-12 col-lg-6 mt-2">
                    <TableKendoA2B dataTableProps={A2BWLData} />
                  </div>
                  <div className="col col-md-12 col-sm-12 col-lg-6 mt-2">
                    <TableKendoA2B dataTableProps={A2BLDData} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <div className="card p-2 shadow">
              <div className="d-flex justify-content-center">
                <h4>Plan Hauling</h4>
              </div>
              <div className="mt-3">
                <TableKendoMultiHeader />
              </div>
            </div>
          </div>
      </div>
      {/* <div className="row">
        <div className="col">
          <div className="row">
            <div className="col">
              <div className="mt-3 card p-2 shadow">
                <div className="d-flex justify-content-center">
                  <h4>Plan Hauling</h4>
                </div>
                <div className="row mt-3">
                  <div className="col col-12">
                    <TableKendoPlanHauling2 dataTableProps={A2BWLData} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <div className="col">
              <div className="mt-3 card p-2 shadow">
                <div className="d-flex justify-content-center">
                  <h4>A2B Support</h4>
                </div>
                <div className="row mt-3">
                  <div className="col col-md-12 col-sm-12 mt-2">
                    <TableKendoA2B dataTableProps={A2BWLData} />
                  </div>
                  <div className="col col-md-12 col-sm-12 mt-4">
                    <TableKendoA2B dataTableProps={A2BLDData} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default DashboardRealTimeMonitoring;

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

import TableKendoPlanHauling3 from "../../components/Table/TableKendoPlanHauling3"

// import data for table kendo a2bWL
import A2BWLData from "../../components/Table/dummyData/A2BWLData.json";
import A2BLDData from "../../components/Table/dummyData/A2BLDData.json";

// import data for table kendo tas data
import TASData from "../../components/Table/dummyData/TASData.json";

//import column for table kendo tas
import ColumnsTAS from "../../components/Table/dummyData/columnsTAS"
import StockInventoryABBData from "../../components/Table/dummyData/stockInventoryABB.json"
import StockInventorySMMData from "../../components/Table/dummyData/stockInventorySMM.json"
import StockInventoryTOPData from "../../components/Table/dummyData/stockInventoryTOP.json"
import PlanHaulingAllData from "../../components/Table/dummyData/planHaulingAll.json"
import PlanHaulingABBData from "../../components/Table/dummyData/planHaulingABB.json"
import PlanHaulingSMMData from "../../components/Table/dummyData/planHaulingSMM.json"
import PlanHaulingTOPData from "../../components/Table/dummyData/planHaulingTOP.json"
import columnsPlanHaulingABB from "../../components/Table/dummyData/columnsPlanHaulingABB";
import columnsPlanHaulingSMM from "../../components/Table/dummyData/columnsPlanHaulingSMM";
import columnsPlanHaulingTOP from "../../components/Table/dummyData/columnsPlanHaulingTOP";
import columnsPlanHaulingAll from "../../components/Table/dummyData/columnsPlanHaulingAll";
import TablePlanMultiRowMultiCols from "../../components/Table/TablePlanMultiRowMultiCols";

import PlanHaulingNewData from "../../components/Table/dummyData/planHaulingNew.json"
import StockInventoryNewData from "../../components/Table/dummyData/stockInventoryNew.json"

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
                    <TableKendoTAS dataTableProps={TASData} columnsTableProps={ColumnsTAS} />
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
            <TablePlanMultiRowMultiCols dataTableProps={PlanHaulingNewData} />
          </div>
        </div>
        <div className="col">
          <div className="card p-2 shadow">
            <div className="d-flex justify-content-center">
              <h4>Stock Inventory</h4>
            </div>
            <TablePlanMultiRowMultiCols dataTableProps={StockInventoryNewData} />
          </div>
        </div>
      </div>
      {/* <div className="row mt-3">
        <div className="col">
              <div className="card p-2 shadow">
                  <div className="d-flex justify-content-center">
                    <h4>Plan Hauling</h4>
                  </div>
                  <div className="mt-3">
              <div className="row">
                <div className="col">
                    <TableKendoPlanHauling3 dataTableProps={PlanHaulingABBData} columnsDataTable={columnsPlanHaulingABB}/>
                  </div>
              </div>
              <div className="row">
                <div className="col">
                    <TableKendoPlanHauling3 dataTableProps={PlanHaulingSMMData} columnsDataTable={columnsPlanHaulingSMM}/>
                  </div>
              </div>
              <div className="row">
                <div className="col">
                    <TableKendoPlanHauling3 dataTableProps={PlanHaulingTOPData} columnsDataTable={columnsPlanHaulingTOP}/>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
              <div className="card p-2 shadow">
                  <div className="d-flex justify-content-center">
                    <h4>Stock Inventory</h4>
                  </div>
                  <div className="mt-3">
              <div className="row">
                <div className="col">
                    <TableKendoPlanHauling3 dataTableProps={StockInventoryABBData} columnsDataTable={columnsPlanHaulingABB}/>
                  </div>
              </div>
              <div className="row">
                <div className="col">
                    <TableKendoPlanHauling3 dataTableProps={StockInventorySMMData} columnsDataTable={columnsPlanHaulingSMM}/>
                  </div>
              </div>
              <div className="row">
                <div className="col">
                    <TableKendoPlanHauling3 dataTableProps={StockInventoryTOPData} columnsDataTable={columnsPlanHaulingTOP}/>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* plan hauling individu */}
      {/* <div className="row mt-3">
        <div className="col">
          <div className="card p-2 shadow">
              <div className="d-flex justify-content-center">
                <h4>Plan Hauling</h4>
              </div>
              <div className="mt-3">
                <TableKendoPlanHauling3 dataTableProps={PlanHaulingAllData} columnsDataTable={columnsPlanHaulingAll}/>
              </div>
          </div>
        </div>
      </div> */}

      {/* row plan hauling */}
        {/* <div className="row mt-3">
          <div className="col">
            <div className="card p-2 shadow">
                <div className="d-flex justify-content-center">
                  <h4>Plan Hauling ABB</h4>
                </div>
                <div className="mt-3">
                  <TableKendoPlanHauling3 dataTableProps={PlanHaulingABBData} columnsDataTable={columnsPlanHaulingABB}/>
                </div>
            </div>
          </div>
          <div className="col">
            <div className="card p-2 shadow">
                <div className="d-flex justify-content-center">
                  <h4>Plan Hauling SMM</h4>
                </div>
                <div className="mt-3">
                  <TableKendoPlanHauling3 dataTableProps={PlanHaulingSMMData} columnsDataTable={columnsPlanHaulingSMM}/>
                </div>
            </div>
          </div>
          <div className="col">
            <div className="card p-2 shadow">
                <div className="d-flex justify-content-center">
                  <h4>Plan Hauling TOP</h4>
                </div>
                <div className="mt-3">
                  <TableKendoPlanHauling3 dataTableProps={PlanHaulingTOPData} columnsDataTable={columnsPlanHaulingTOP}/>
                </div>
            </div>
          </div>
        </div> */}
        
      {/* split2 plan hauling */}
        {/* <div className="row mt-3">
          <div className="col">
            <div className="card p-2 shadow">
                <div className="d-flex justify-content-center">
                  <h4>Stock Inventory ABB</h4>
                </div>
                <div className="mt-3">
                  <TableKendoPlanHauling3 dataTableProps={StockInventoryABBData} columnsDataTable={columnsPlanHaulingABB}/>
                </div>
            </div>
          </div>
          <div className="col">
            <div className="card p-2 shadow">
                <div className="d-flex justify-content-center">
                  <h4>Stock Inventory SMM</h4>
                </div>
                <div className="mt-3">
                  <TableKendoPlanHauling3 dataTableProps={StockInventorySMMData} columnsDataTable={columnsPlanHaulingSMM}/>
                </div>
            </div>
          </div>
          <div className="col">
            <div className="card p-2 shadow">
                <div className="d-flex justify-content-center">
                  <h4>Stock Inventory TOP</h4>
                </div>
                <div className="mt-3">
                  <TableKendoPlanHauling3 dataTableProps={StockInventoryTOPData} columnsDataTable={columnsPlanHaulingTOP}/>
                </div>
            </div>
          </div>
        </div> */}

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

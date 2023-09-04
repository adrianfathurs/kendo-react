import React from "react";
import ExampleAmchartComponent from "../components/AmCharts/ExampleAmchartComponent";
import PieChartComponent from "../components/AmCharts/PieChartComponent";
import XYChartComponent from "../components/AmCharts/XYChartComponent";

const Chart = (props) => {
  return (
    <>
      <div className="row">
        <div className="col col-12">
          <div className="card">
            <ExampleAmchartComponent />
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col col-6">
          <div className="card">
            <center>
              <PieChartComponent />
            </center>
          </div>
        </div>
        <div className="col col-6">
          <div className="card">
            <XYChartComponent />
          </div>
        </div>
      </div>
    </>
  );
};

export default Chart;

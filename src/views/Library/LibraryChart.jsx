import React from "react";
import BarLineChartComponent from "../../components/AmCharts/BarLineChartComponent";
import ExampleAmchartComponent from "../../components/AmCharts/ExampleAmchartComponent";
import PieChartComponent from "../../components/AmCharts/PieChartComponent";
import XYChartComponent from "../../components/AmCharts/XYChartComponent";

// import Coba from "../../components/AmCharts/Coba"

// import data for chart daily achievement
import DailyAchievementData from "../../components/AmCharts/dummyData/dailyAchievement.json";

import MixedComponent from "../../components/Apexchart/MixedComponent";
import ParetoChartComponent from "../../components/AmCharts/ParetoChartComponent";

const LibraryChart = (props) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col card shadow px-3 py-2">
            <div>
              <h4>Bar Component</h4>
            </div>
            <BarLineChartComponent
              chartNameProps={"DailyAchievement"}
              chartDataProps={DailyAchievementData}
              chartLineProps={"achiev"}
              categoryChartProps={"category"}
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col card shadow px-3 py-2">
            <div>
              <h4>Pareto Chart</h4>
            </div>
            <ParetoChartComponent
              chartNameProps={"DailyParetoChart"}
              chartDataProps={DailyAchievementData}
              chartLineProps={"achiev"}
              categoryChartProps={"category"}
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col card shadow px-3 py-2">
            <div>
              <h4>Time Series Graphic</h4>
            </div>
            <ExampleAmchartComponent />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col card shadow px-3 py-2">
            <div>
              <h4>Pie Graphic</h4>
            </div>
            <PieChartComponent />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col card shadow px-3 py-2">
            <div>
              <h4>Stack Bar Graphic</h4>
            </div>
            <XYChartComponent />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col card shadow px-3 py-2">
            <div>
              <h4>Stack Bar Graphic</h4>
            </div>
            {/* <Coba /> */}
          </div>
        </div>
        <div className="row mt-3">
          <div className="col card shadow px-3 py-2">
            <div>
              <h4>Stack Bar Graphic</h4>
            </div>
            <MixedComponent />
          </div>
        </div>
      </div>
    </>
  );
};

export default LibraryChart;

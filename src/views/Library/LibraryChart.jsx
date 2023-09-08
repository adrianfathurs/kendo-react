import React from "react";
import BarChartComponent from "../../components/AmCharts/BarChartComponent";
import ExampleAmchartComponent from "../../components/AmCharts/ExampleAmchartComponent";
import PieChartComponent from "../../components/AmCharts/PieChartComponent";
import XYChartComponent from "../../components/AmCharts/XYChartComponent";

// import data for chart daily achievement
import DailyAchievementData from "../../components/AmCharts/dummyData/dailyAchievement.json";

const LibraryChart = (props) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col card shadow px-3 py-2">
            <div>
              <h4>
                Bar Component
              </h4>
            </div>
            <BarChartComponent
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
      </div>
    </>
  );
};

export default LibraryChart;

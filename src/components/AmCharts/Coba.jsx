import React, { useEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

function Coba() {
    // Sample data for the left and right sides
    const chartDataLeft = [10, 20, 30, 40, 50];
    const chartDataRight = [5, 15, 25, 35, 45];
  
    // Labels for the left and right sides
    const leftLabel = "Left Side Label";
    const rightLabel = "Right Side Label";
  
    useEffect(() => {
        let root = am5.Root.new('ChartCoba');

        root.setThemes([
            am5themes_Animated.new(root)
        ]);
      // Create the AMSChart5 instance within the useEffect hook
      var chart = root.container.children.push(
        am5xy.XYChart.new(root, {
          panX: false,
          panY: false,
          wheelX: "panX",
          wheelY: "zoomX",
          layout: root.verticalLayout
      }));
  
      // Add a dataset for the left side
      chart.addData({
        data: chartDataLeft,
        label: leftLabel,
        type: "line", // You can change the chart type as needed
        yAxisID: "left-axis",
      });
  
      // Add a dataset for the right side
      chart.addData({
        data: chartDataRight,
        label: rightLabel,
        type: "line", // You can change the chart type as needed
        yAxisID: "right-axis",
      });
  
      // Define the left and right axes
      chart.addYAxis({
        id: "left-axis",
        position: "left",
        title: {
          display: true,
          text: leftLabel,
        },
      });
  
      chart.addYAxis({
        id: "right-axis",
        position: "right",
        title: {
          display: true,
          text: rightLabel,
        },
      });
  
      // Render the chart
      chart.render();
  
      // Clean up the chart when the component unmounts
      return () => {
        chart.destroy();
      };
    }, []);
  
    return <div id="ChartCoba" style={{ width: "100%", height: "400px" }}></div>;
  }
  
  export default Coba;
  
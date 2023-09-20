import React, { useRef, useEffect, useState } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

//import utils
import {persenBargingOutPLHFormula} from '../../utils/chart/index'

const ParetoChartComponent = ({
  chartNameProps,
  chartDataProps,
  chartLineProps,
  categoryChartProps,
  dataTypeProps = "",
  rotationProps = "vertical",
  chartDividedNumber,
  chartDividerNumber
}) => {
  const [chartDataPropsBackup, setChartDataPropsBackup] = useState(chartDataProps);
  const [persenMax, setPersenMax] = useState(100)
  useEffect(() => {
    let root = am5.Root.new(chartNameProps);

    root.setThemes([am5themes_Animated.new(root)]);
    var chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: false,
        panY: false,
        wheelX: "panX",
        wheelY: "zoomX",
        layout: root.verticalLayout,
      })
    );

    // Add legend
    // https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
    var legend = chart.children.push(
      am5.Legend.new(root, {
        centerX: am5.p50,
        x: am5.p50,
      })
    );
    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    var xRenderer = am5xy.AxisRendererX.new(root, {
      minGridDistance: 30,
    });

    var xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: categoryChartProps,
        renderer: xRenderer,
      })
    );

    xRenderer.grid.template.setAll({
      cellStartLocation: 0.1,
      cellEndLocation: 0.9
    });

    xRenderer.labels.template.setAll({
      paddingTop: 10,
      paddingLeft: 10,
    });

    xAxis.data.setAll(chartDataProps);

    var yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {
          strokeOpacity: 0.1,
        }),
      })
    );

    var paretoAxisRenderer = am5xy.AxisRendererY.new(root, { opposite: true });
    var paretoAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: paretoAxisRenderer,
        min: 0,
        max: persenMax,
        strictMinMax: true,
      })
    );

    paretoAxisRenderer.grid.template.set("forceHidden", false);
    paretoAxis.set("numberFormat", "#'%");

    function makeSeries(name, fieldName) {
      var series = chart.series.push(
        am5xy.ColumnSeries.new(root, {
          name: name,
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: fieldName == 'pareto' ? null : fieldName,
          categoryXField: categoryChartProps,
        })
      );

      series.columns.template.setAll({
        tooltipText: "{name}, {categoryX}: {valueY}",
        width: am5.percent(70),
        tooltipY: 0,
        strokeOpacity: 0,
      });

      series.data.setAll(chartDataProps);

      // Make stuff animate on load
      // https://www.amcharts.com/docs/v5/concepts/animations/
      series.appear();

      series.bullets.push(function () {
        return am5.Bullet.new(root, {
          locationY: 0,
          sprite: am5.Label.new(root, {
            text: "{valueY}",
            fill: am5.color("#000000"), //I'd like to use fill: {color}
            stroke: am5.color("#fff"),
            strokeWidth: 3,
            centerY: rotationProps == 'vertical' ? am5.p50 : am5.p100,
            centerX: rotationProps == 'vertical' ? am5.p100 : am5.p50,
            rotation: rotationProps == 'vertical' ? "90" : "0",
            populateText: true,
          }),
        });
      });
      legend.data.push(series);
    }
    prepareParetoData();
    function prepareParetoData() {
      // console.log(chartDataProps)
      let chartDataPareto = chartDataProps;
      var total = 0;

      for (var i = 0; i < chartDataPareto.length; i++) {
        var value = persenBargingOutPLHFormula(chartDataPareto[i][chartDividedNumber], chartDataPareto[i][chartDividerNumber])
        chartDataPareto[i][chartLineProps] = value
      } 

      let maxValue = Math.max.apply(null, chartDataPareto.map(function(o) {return o[chartLineProps] })) + 50
      setPersenMax(maxValue)
      setChartDataPropsBackup(chartDataPareto);
      let keysObjectArray = Object.keys(chartDataProps[0]);
      keysObjectArray = keysObjectArray.filter((element) => {
        return element !== chartLineProps;
      });
      keysObjectArray.map((element) => {
        if (element != categoryChartProps) {
          makeSeries(element, element);
        }
      });
      makeLineChart();
    }
    function makeLineChart() {
      // pareto series
    setTimeout(() => {
      var paretoSeries = chart.series.push(
        am5xy.LineSeries.new(root, {
          name: chartLineProps,
          xAxis: xAxis,
          yAxis: paretoAxis,
          valueYField: chartLineProps,
          categoryXField: categoryChartProps,
          stroke: root.interfaceColors.get("alternativeBackground"),
          maskBullets: false,
        })
        );
        paretoSeries.data.setAll(chartDataPropsBackup);
        setTimeout(()=>{
          paretoSeries.bullets.push(function () {
            return am5.Bullet.new(root, {
            locationY: 1,
            sprite: am5.Circle.new(root, {
              radius: 5,
              tooltipText: `{${chartLineProps}}` + "%",
              showTooltipOn: "always",
              fill: am5.color(0xd9d9d9),
              tooltip: am5.Tooltip.new(root, {}),
              stroke: root.interfaceColors.get("alternativeBackground"),
            }),
          });
        });
      }, 1000)
      legend.data.push(paretoSeries);
    }, 1200)
    }
    
    // series.data.setAll(data);
    // paretoSeries.data.setAll(data);

    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    chart.appear(1000, 100);
    return () => {
      root.dispose();
    };
  }, [persenMax]);
  return (
    <div>
      <div id={chartNameProps} style={{ width: "100%", height: "500px" }}></div>
    </div>
  );
};

export default ParetoChartComponent;

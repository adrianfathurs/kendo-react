import React, { useRef, useLayoutEffect } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

function App({chartNameProps, chartDataProps, chartLineProps, categoryChartProps}) {
  useLayoutEffect(() => {
    
    let root = am5.Root.new(chartNameProps);

    root.setThemes([
      am5themes_Animated.new(root)
    ]);

    var chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: false,
        panY: false,
        wheelX: "panX",
        wheelY: "zoomX",
        layout: root.verticalLayout
    }));

    // Add legend
    // https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
    var legend = chart.children.push(
      am5.Legend.new(root, {
        centerX: am5.p50,
        x: am5.p50
      })
    );

    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    var xRenderer = am5xy.AxisRendererX.new(root, {
      cellStartLocation: 0.1,
      cellEndLocation: 0.9
    })

    var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
      categoryField: categoryChartProps,
      renderer: xRenderer,
      tooltip: am5.Tooltip.new(root, {})
    }));

    xRenderer.grid.template.setAll({
      location: 1
    })
    
    xAxis.data.setAll(chartDataProps);

    var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
      renderer: am5xy.AxisRendererY.new(root, {
        strokeOpacity: 0.1
      })
    }));

    // Add series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    function makeSeries(name, fieldName) {
      var series = chart.series.push(am5xy.ColumnSeries.new(root, {
        name: name,
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: fieldName,
        categoryXField: categoryChartProps
      }));

      series.columns.template.setAll({
        tooltipText: "{name}, {categoryX}: {valueY}",
        width: am5.percent(90),
        tooltipY: 0,
        strokeOpacity: 0
      });

      series.data.setAll(chartDataProps);

      // Make stuff animate on load
      // https://www.amcharts.com/docs/v5/concepts/animations/
      series.appear();

      series.bullets.push(function() {
        return am5.Bullet.new(root, {
          locationY: 0,
          sprite: am5.Label.new(root, {
            text: "{valueY}",
            fill: am5.color('#000000'), //I'd like to use fill: {color}
            stroke: am5.color('#fff'),
            strokeWidth: 1,
            centerY: am5.p50,
            centerX: am5.p100,
            rotation: "90",
            populateText: true
          })
        });
      });
      legend.data.push(series);
    }

    function makeLineChart(name, fieldName) {
      var series2 = chart.series.push(
        am5xy.LineSeries.new(root, {
          name: name,
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: fieldName,
          categoryXField: categoryChartProps,
          showTooltipOn: "always",
          tooltip: am5.Tooltip.new(root, {
            showTooltipOn: "always",
            labelText: "{valueY}",
            getFillFromSprite: false,
            getStrokeFromSprite: true,
            autoTextColor: false,
            getLabelFillFromSprite: true,
            fill: am5.color(0xffffff),
            fillOpacity: 0.8
          })
        })
      );

      series2.strokes.template.setAll({
        strokeWidth: 3,
        templateField: "strokeSettings"
      });
      
      
      series2.data.setAll(chartDataProps);
      
      series2.bullets.push(function() {
        return am5.Bullet.new(root, {
          sprite: am5.Circle.new(root, {
            radius: 5,
            fill: am5.color(0xd9d9d9),
            fillOpacity: 0.5,
            stroke: root.interfaceColors.get("background"),
            strokeWidth: 2,
            stroke: series2.get("stroke"),
            showTooltipOn: "always",
            tooltipText: "{valueY}",
            tooltip: am5.Tooltip.new(root, {})
          })
        });
      });
      
      chart.set("cursor", am5xy.XYCursor.new(root, {}));
      legend.data.push(series2);
    }

    // this variable for get keys object and handling whats graphic we want render
    let keysObjectArray = Object.keys(chartDataProps[0])
    keysObjectArray = keysObjectArray.filter((element)=>{ return element !== chartLineProps })
    keysObjectArray.map((element)=>{
      if(element != categoryChartProps){
        makeSeries(element, element)
      }
    })
    makeLineChart(chartLineProps, chartLineProps)

    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    chart.appear(1000, 100);
    return () => {
      root.dispose();
    };
  }, []);

  return (
    <div id={chartNameProps} style={{ width: "100%", height: "500px" }}></div>
  );
}
export default App;
import React, { useRef, useLayoutEffect, useState } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import ReactApexChart from "react-apexcharts";

const MixedComponent = (props) => {
    let chart = am4core.create("chartapexp-pie", am4charts.PieChart);
    const [series, setSeries] = useState(
        [{
            name: 'Income',
            type: 'column',
            data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
          }, {
            name: 'Cashflow',
            type: 'column',
            data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5]
          }, {
            name: 'Revenue',
            type: 'line',
            data: ["100%", "20%", "40%"]
          }],
    )
    const [options, setOptions] = useState(
        {
            chart: {
              height: 350,
              type: 'line',
              stacked: false
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              width: [1, 1, 4]
            },
            title: {
              text: 'XYZ - Stock Analysis (2009 - 2016)',
              align: 'left',
              offsetX: 110
            },
            xaxis: {
              categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
            },
            yaxis: [
              {
                axisTicks: {
                  show: true,
                },
                axisBorder: {
                  show: true,
                  color: '#008FFB'
                },
                labels: {
                  style: {
                    colors: '#008FFB',
                  }
                },
                title: {
                  text: "",
                  style: {
                    color: '#008FFB',
                  }
                },
                tooltip: {
                  enabled: true
                }
              },
              {
                seriesName: '',
              },
              {
                seriesName: 'Revenue',
                opposite: true,
                axisTicks: {
                  show: true,
                },
                axisBorder: {
                  show: true,
                  color: '#FEB019'
                },
                labels: {
                  style: {
                    colors: '#FEB019',
                  },
                },
                title: {
                  text: "Revenue (thousand crores)",
                  style: {
                    color: '#FEB019',
                  }
                }
              },
            ],
            tooltip: {
              fixed: {
                enabled: true,
                position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
                offsetY: 30,
                offsetX: 60
              },
            },
            legend: {
              horizontalAlign: 'left',
              offsetX: 40
            }
          }
    )

  return (
    <div id="chartapex-pie">
        <ReactApexChart options={options} series={series} type="line" height={350} />
    </div>
  );
};

export default MixedComponent;

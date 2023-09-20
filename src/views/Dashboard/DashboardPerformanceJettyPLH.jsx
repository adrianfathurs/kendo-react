import React from 'react';
import ExampleAmchartComponent from '../../components/AmCharts/ExampleAmchartComponent';
import PieChartComponent from '../../components/AmCharts/PieChartComponent';
import XYChartComponent from '../../components/AmCharts/XYChartComponent';
import BarChartComponent from '../../components/AmCharts/BarChartComponent';

// import data for table kendo a2bWL
import A2BWLData from "../../components/Table/dummyData/A2BWLData.json"
import A2BWLSupportData from "../../components/Table/dummyData/A2BWLSupportData.json"
import A2BLDSupportData from "../../components/Table/dummyData/A2BLDSupportData.json"
import A2BLDData from "../../components/Table/dummyData/A2BLDData.json"
import DailyPhysicalAvailbilityData from "../../components/AmCharts/dummyData/dailyPhysicalAvailbility.json"
import DailyProductivityData from "../../components/AmCharts/dummyData/dailyProductivity.json"

import PhysicalAvailbilityData from "../../components/Table/dummyData/PhysicalAvailbilityData.json"
import UtilityAvailbilityData from "../../components/Table/dummyData/UtilityAvailbilityData.json"
import ProductivityData from "../../components/Table/dummyData/ProductivityData.json"
import DelayTimeAllJettyData from "../../components/Table/dummyData/DelayTimeAllJettyData.json"

import TableKendoA2BSupport from '../../components/Table/PerformanceJetty/TableKendoA2BSupport';
import TableKendoAvailbility from '../../components/Table/PerformanceJetty/TableKendoAvailbility';
import TableKendoProductivity from '../../components/Table/PerformanceJetty/TableKendoProductivity';
import TableKendoDelayTimeAllJetty from '../../components/Table/PerformanceJetty/TableKendoDelayTimeAllJetty'

function DashboardPerformanceJettyPLH() {
    return (
        <>
            <div className='row mt-3'>
                <div className='col'>
                    <div className="card shadow p-3">
                        <div className="d-flex justify-content-start">
                            <h4>Daily Physical Availbility(%)</h4>
                        </div>
                        <BarChartComponent chartNameProps={"DailyPhysicalAvailbility"} chartDataProps={DailyPhysicalAvailbilityData}  categoryChartProps={"category"} rotationProps={"horizontal"} dataTypeProps={'%'}/>
                    </div>
                </div>
                <div className='col'>
                    <div className="card shadow p-3">
                        <div className="d-flex justify-content-start">
                            <h4>Daily Utility Availbility(%)</h4>
                        </div>
                        <BarChartComponent chartNameProps={"DailyPhysicalAvailbility2"} chartDataProps={DailyPhysicalAvailbilityData}  categoryChartProps={"category"} rotationProps={"horizontal"} dataTypeProps={'%'}/>
                    </div>
                </div>
                <div className='col'>
                    <div className="card shadow p-3">
                        <div className="d-flex justify-content-start">
                            <h4>Daily Productivity</h4>
                        </div>
                        <BarChartComponent chartNameProps={"DailyPhysicalAvailbility3"} chartDataProps={DailyProductivityData}  categoryChartProps={"category"} rotationProps={"vertical"} />
                    </div>
                </div>
            </div>
            <div className='row mt-3'>
                <div className="col">
                    <div className='card shadow p-3'>
                        <div className="d-flex justify-content-start">
                            <h4>Physical Availbility</h4>
                        </div>
                        <TableKendoAvailbility dataTableProps={PhysicalAvailbilityData} limitMinimumProps={98}/>
                        {/* <BarChartComponent chartNameProps={"OutLoadingABB"} chartDataProps={OutloadingABBData} chartLineProps={"abbachiev"} categoryChartProps={"category"} /> */}
                    </div>
                </div>
                <div className="col">
                    <div className='card shadow p-3'>
                        <div className="d-flex justify-content-start">
                            <h4>Utility Availbility</h4>
                        </div>
                        <TableKendoAvailbility dataTableProps={UtilityAvailbilityData}/>
                        {/* <BarChartComponent chartNameProps={"OutLoadingABB"} chartDataProps={OutloadingABBData} chartLineProps={"abbachiev"} categoryChartProps={"category"} /> */}
                    </div>
                </div>
                <div className="col">
                    <div className='card shadow p-3'>
                        <div className="d-flex justify-content-start">
                            <h4>Productivity</h4>
                        </div>
                        <TableKendoProductivity dataTableProps={ProductivityData}/>
                        {/* <BarChartComponent chartNameProps={"OutLoadingABB"} chartDataProps={OutloadingABBData} chartLineProps={"abbachiev"} categoryChartProps={"category"} /> */}
                    </div>
                </div>
            </div>
            <div className='row mt-3'>
                <div className="col">
                    <div className='card shadow p-3'>
                        <div className="d-flex justify-content-start">
                            <h4>A2B Support</h4>
                        </div>
                        <div className='row'>
                            <div className="col">
                                <TableKendoA2BSupport dataTableProps={A2BWLSupportData}/>
                            </div>
                            <div className="col">
                                <TableKendoA2BSupport dataTableProps={A2BLDSupportData}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row mt-3'>
                <div className="col">
                    <div className="card shadow p-3">
                        <div className="d-flex justify-content-start">
                            <h4>Delay Time All Jetty</h4>
                        </div>
                        <TableKendoDelayTimeAllJetty dataTableProps={DelayTimeAllJettyData} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default DashboardPerformanceJettyPLH;
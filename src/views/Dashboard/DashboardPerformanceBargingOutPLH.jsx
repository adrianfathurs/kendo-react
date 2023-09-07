import React from 'react';
import ExampleAmchartComponent from '../../components/AmCharts/ExampleAmchartComponent';
import PieChartComponent from '../../components/AmCharts/PieChartComponent';
import XYChartComponent from '../../components/AmCharts/XYChartComponent';
import BarChartComponent from '../../components/AmCharts/BarChartComponent';

// import data for chart daily achievement
import DailyAchievementData from '../../components/AmCharts/dummyData/dailyAchievement.json'

//import data for chart outloading abb
import OutloadingABBData from '../../components/AmCharts/dummyData/outloadingABB.json'

//import data for chart tas plh
import TASPLHData from '../../components/AmCharts/dummyData/TASPLHData.json'

//import data for chart outloading PLH
import OutloadingPLHData from '../../components/AmCharts/dummyData/outloadingPLHData.json'

function DashboardRealTimeMonitoring() {
    return (
        <>
            <div className='row mt-3'>
                <div className="col">
                    <div className='card shadow p-3'>
                        <div className="d-flex justify-content-start">
                            <h4>Daily Achievement</h4>
                        </div>
                        <BarChartComponent chartNameProps={"DailyAchievement"} chartDataProps={DailyAchievementData} chartLineProps={"achiev"} categoryChartProps={"category"} />
                    </div>
                </div>
                <div className="col">
                    <div className='card shadow p-3'>
                        <div className="d-flex justify-content-start">
                            <h4>Outloading ABB</h4>
                        </div>
                        <BarChartComponent chartNameProps={"OutLoadingABB"} chartDataProps={OutloadingABBData} chartLineProps={"abbachiev"} categoryChartProps={"category"} />
                    </div>
                </div>
            </div>
            <div className='row mt-3'>
                <div className="col">
                    <div className='card shadow p-3'>
                        <div className="d-flex justify-content-start">
                            <h4>TAS PLH</h4>
                        </div>
                        <BarChartComponent chartNameProps={"TasPLH"} chartDataProps={TASPLHData} chartLineProps={"PAAchieve"} categoryChartProps={"category"} />
                    </div>
                </div>
                <div className="col">
                    <div className='card shadow p-3'>
                        <div className="d-flex justify-content-start">
                            <h4>Outloading PLH</h4>
                        </div>
                        <BarChartComponent chartNameProps={"OutLoadingPLH"} chartDataProps={OutloadingPLHData} chartLineProps={"achiev"} categoryChartProps={"category"} />
                    </div>
                </div>
            </div>
            <div className='row mt-3'>
                <div className="col">
                    <div className='card shadow p-3'>
                        <div className="d-flex justify-content-start">
                            <h4>KTPD Port PLH</h4>
                        </div>
                        <BarChartComponent chartNameProps={"KTPD Port PLH"} chartDataProps={TASPLHData} chartLineProps={"PAAchieve"} categoryChartProps={"category"} />
                    </div>
                </div>
                <div className="col">
                    <div className='card shadow p-3'>
                        <div className="d-flex justify-content-start">
                            <h4>Outloading TOP</h4>
                        </div>
                        <BarChartComponent chartNameProps={"Outloading TOP"} chartDataProps={OutloadingPLHData} chartLineProps={"achiev"} categoryChartProps={"category"} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default DashboardRealTimeMonitoring;
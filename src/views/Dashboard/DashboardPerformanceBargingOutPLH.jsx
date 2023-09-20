import React from 'react';
import ExampleAmchartComponent from '../../components/AmCharts/ExampleAmchartComponent';
import PieChartComponent from '../../components/AmCharts/PieChartComponent';
import XYChartComponent from '../../components/AmCharts/XYChartComponent';
import BarLineChartComponent from '../../components/AmCharts/BarLineChartComponent';
import ParetoChartComponent
 from '../../components/AmCharts/ParetoChartComponent';
// import data for chart daily achievement
import DailyAchievementData from '../../components/AmCharts/dummyData/dailyAchievement.json'

//import data for chart outloading abb
import OutloadingABBData from '../../components/AmCharts/dummyData/outloadingABB.json'

//import data for chart tas plh
import TASPLHData from '../../components/AmCharts/dummyData/TASPLHData.json'

//import data for chart outloading PLH
import OutloadingPLHData from '../../components/AmCharts/dummyData/outloadingPLHData.json'

//import data for chart ktpdPort PLH
import KTPDPortPLH from '../../components/AmCharts/dummyData/ktpdPortPLH.json'

//import data for chart outloading TOP
import OutloadingTOPData  from '../../components/AmCharts/dummyData/outloadingTOP.json'  

//import data for chart outloading TOP
import OutloadingSMMData  from '../../components/AmCharts/dummyData/outloadingSMM.json' 

//import  table kendo tas
import TableKendoTAS from "../../components/Table/TableKendoTAS";

// import data for table kendo tas data
import TASTrendData from "../../components/Table/dummyData/TASTrendData.json";

//import column for table kendo tas
import ColumnsTASTrend from "../../components/Table/dummyData/columnsTASTrend"

function DashboardRealTimeMonitoring() {
    // using ParetoChartComponent
    return(
        <>
            <div className='row mt-3'>
                 <div className="col">
                     <div className='card shadow p-3'>
                         <div className="d-flex justify-content-start">
                             <h4>Daily Achievement</h4>
                         </div>
                         <ParetoChartComponent chartNameProps={"DailyAchievement"} chartDataProps={DailyAchievementData} chartLineProps={"achiev"} categoryChartProps={"category"} chartDividedNumber={'actual'} chartDividerNumber={'plan'} />
                     </div>
                 </div>
                 <div className="col">
                    <div className='card shadow p-3'>
                         <div className="d-flex justify-content-start">
                             <h4>KTPD Port PLH</h4>
                         </div>
                         <ParetoChartComponent chartNameProps={"KTPD Port PLH"} chartDataProps={KTPDPortPLH} chartLineProps={"KTPDachiev"} categoryChartProps={"category"} rotationProps={"vertical"} chartDividedNumber={'KTPDactual'} chartDividerNumber={'KTPDplan'}/>
                     </div>

                 </div>
                 <div className="col">
                    <div className='card shadow p-3'>
                         <div className="d-flex justify-content-start">
                             <h4>Outloading PLH</h4>
                         </div>
                         <ParetoChartComponent chartNameProps={"OutLoadingPLH"} chartDataProps={OutloadingPLHData} chartLineProps={"achiev"} categoryChartProps={"category"} chartDividedNumber={'actual'} chartDividerNumber={'plan'}/>
                     </div>
                 </div>
             </div>
            <div className='row mt-3'>
                 <div className="col">
                    <div className='card shadow p-3'>
                         <div className="d-flex justify-content-start">
                             <h4>Outloading ABB</h4>
                         </div>
                         <ParetoChartComponent chartNameProps={"OutLoadingABB"} chartDataProps={OutloadingABBData} chartLineProps={"abbachiev"} categoryChartProps={"category"} chartDividedNumber={'abbactual'} chartDividerNumber={'abbplan'}/>
                     </div>
                 </div>
                 <div className="col">
                     <div className='card shadow p-3'>
                         <div className="d-flex justify-content-start">
                             <h4>Outloading TOP</h4>
                         </div>
                         <ParetoChartComponent chartNameProps={"Outloading TOP"} chartDataProps={OutloadingTOPData} chartLineProps={"achiev"} categoryChartProps={"category"} chartDividedNumber={'actual'} chartDividerNumber={'plan'}/>
                     </div>
                 </div>
                 <div className="col">
                     <div className='card shadow p-3'>
                         <div className="d-flex justify-content-start">
                             <h4>Outloading SMM</h4>
                         </div>
                         <ParetoChartComponent chartNameProps={"Outloading SMM"} chartDataProps={OutloadingSMMData} chartLineProps={"achiev"} categoryChartProps={"category"} chartDividedNumber={'actual'} chartDividerNumber={'plan'}/>
                     </div>
                 </div>
             </div>
            <div className='row mt-3'>
                <div className="col">
                    <div className='card shadow p-3'>
                         <div className="d-flex justify-content-start">
                             <h4>TAS PLH</h4>
                         </div>
                         <ParetoChartComponent chartNameProps={"TasPLH"} chartDataProps={TASPLHData} chartLineProps={"PAAchieve"} categoryChartProps={"category"} rotationProps={"horizontal"} chartDividedNumber={'PAActual'} chartDividerNumber={'PAPlan'}/>
                     </div>
                 </div>
                <div className="col">
                    <div className='card shadow p-3'>
                         <div className="d-flex justify-content-start">
                             <h4>Trend TAS(m)</h4>
                         </div>
                         <TableKendoTAS dataTableProps={TASTrendData} columnsTableProps={ColumnsTASTrend} />
                     </div>
                </div>
            </div>
        </>
    )

    //// using BarLineChartComponent ///
    // return (
    //     <>
    //         <div className='row mt-3'>
    //             <div className="col">
    //                 <div className='card shadow p-3'>
    //                     <div className="d-flex justify-content-start">
    //                         <h4>Daily Achievement</h4>
    //                     </div>
    //                     <BarLineChartComponent chartNameProps={"DailyAchievement"} chartDataProps={DailyAchievementData} chartLineProps={"achiev"} categoryChartProps={"category"}/>
    //                 </div>
    //             </div>
    //             <div className="col">
    //                 <div className='card shadow p-3'>
    //                     <div className="d-flex justify-content-start">
    //                         <h4>Outloading ABB</h4>
    //                     </div>
    //                     <BarLineChartComponent chartNameProps={"OutLoadingABB"} chartDataProps={OutloadingABBData} chartLineProps={"abbachiev"} categoryChartProps={"category"}/>
    //                 </div>
    //             </div>
    //         </div>
    //         <div className='row mt-3'>
    //             <div className="col">
    //                 <div className='card shadow p-3'>
    //                     <div className="d-flex justify-content-start">
    //                         <h4>TAS PLH</h4>
    //                     </div>
    //                     <BarLineChartComponent chartNameProps={"TasPLH"} chartDataProps={TASPLHData} chartLineProps={"PAAchieve"} categoryChartProps={"category"} />
    //                 </div>
    //             </div>
    //             <div className="col">
    //                 <div className='card shadow p-3'>
    //                     <div className="d-flex justify-content-start">
    //                         <h4>Outloading PLH</h4>
    //                     </div>
    //                     <BarLineChartComponent chartNameProps={"OutLoadingPLH"} chartDataProps={OutloadingPLHData} chartLineProps={"achiev"} categoryChartProps={"category"} />
    //                 </div>
    //             </div>
    //         </div>
    //         <div className='row mt-3'>
    //             <div className="col">
    //                 <div className='card shadow p-3'>
    //                     <div className="d-flex justify-content-start">
    //                         <h4>KTPD Port PLH</h4>
    //                     </div>
    //                     <BarLineChartComponent chartNameProps={"KTPD Port PLH"} chartDataProps={TASPLHData} chartLineProps={"PAAchieve"} categoryChartProps={"category"} />
    //                 </div>
    //             </div>
    //             <div className="col">
    //                 <div className='card shadow p-3'>
    //                     <div className="d-flex justify-content-start">
    //                         <h4>Outloading TOP</h4>
    //                     </div>
    //                     <BarLineChartComponent chartNameProps={"Outloading TOP"} chartDataProps={OutloadingPLHData} chartLineProps={"achiev"} categoryChartProps={"category"} />
    //                 </div>
    //             </div>
    //         </div>
    //     </>
    // );
}

export default DashboardRealTimeMonitoring;
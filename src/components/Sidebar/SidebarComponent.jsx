import * as React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import { PanelBar, PanelBarItem } from '@progress/kendo-react-layout';
const SidebarComponent = ({sidebarData}) => {
  const location = useLocation()
  const navigate = useNavigate()
  const goToPage = (child) => {
    navigate(child.path)
    return true
  }
  return (
    <div className="panelbar-wrapper">
      <PanelBar>
        { sidebarData.map((element, index)=>(
          <PanelBarItem title={element.title_parent} expanded={true} key={index}>
            {
              element.children.map((child, index2) => (
                <div  className={child.path == location.pathname ? "text-danger px-3" : "px-3"} onClick={()=> navigate(child.path)} key={index}>
                  {child.title}
                </div>
              ))
            }
          </PanelBarItem>
        ))}
        {/* <PanelBarItem title={'Projects'} expanded={true}> */}
          {/* <PanelBarItem title={'New Business Plan'} selected={true} /> */}
          {/* <PanelBarItem title={'Sales Forecasts'}>
            <PanelBarItem title={'Q1 Forecast'} />
            <PanelBarItem title={'Q2 Forecast'} />
            <PanelBarItem title={'Q3 Forecast'} />
            <PanelBarItem title={'Q4 Forecast'} >
              <PanelBarItem title="Programs">
                <PanelBarItem title="Monday" />
                <PanelBarItem title="Tuesday" />
                <PanelBarItem title="Wednesday" />
                <PanelBarItem title="Thursday" />
                <PanelBarItem title="Friday" />
              </PanelBarItem>
            </PanelBarItem>
          </PanelBarItem>
          <PanelBarItem title={'Sales Reports'} />
        </PanelBarItem>
        
        <PanelBarItem title="Communication" /> */}
      </PanelBar>
    </div>
  )
};

export default SidebarComponent;
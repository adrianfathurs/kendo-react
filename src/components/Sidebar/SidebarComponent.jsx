import * as React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import { PanelBar, PanelBarItem } from '@progress/kendo-react-layout';
const SidebarComponent = ({sidebarData}) => {
  const location = useLocation()
  const navigate = useNavigate()
  const goToPage = (path) => {
    navigate(path)
    return true
  }
  return (
    <div className="panelbar-wrapper">
      <PanelBar>
        { sidebarData.map((element, index)=>(
            element.children.length != 0 ?
              <PanelBarItem title={element.title_parent} expanded={element.childrenList.includes(location.pathname) ? true : false } key={index}>
                {
                    element.children.map((child, index2) => (
                      <div  className={child.path == location.pathname ? "text-danger px-3 py-1 text-pointer" : "px-3 text-pointer py-1"} onClick={()=> navigate(child.path)} key={index}>
                        {child.icon} &nbsp; {child.title}
                      </div>
                    ))
                }
              </PanelBarItem>
            : 
              <div onClick={() => goToPage(element.path)} className={element.path == location.pathname ? "px-3 py-3 text-pointer bg-danger-custom text-white" : "text-danger-custom font-weight-bold px-3 text-pointer py-3"}>
                {element.title_parent}
              </div>
        ))}
      </PanelBar>
    </div>
  )
};

export default SidebarComponent;
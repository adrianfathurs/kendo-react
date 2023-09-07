import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Drawer, DrawerNavigation } from "@progress/kendo-react-layout";
import SidebarComponent from "./Sidebar/SidebarComponent"

// Import third party
import styled from "styled-components";

// const sidebarData = [
//   {
//     title: "About Us",
//     path: "/about-us",
//     icon: <AiIcons.AiFillHome />,
//     iconClosed: <RiIcons.RiArrowDownSFill />,
//     iconOpened: <RiIcons.RiArrowUpSFill />,
 
//     subNav: [
//       {
//         title: "Our Aim",
//         path: "/about-us/aim",
//         icon: <IoIcons.IoIosPaper />,
//       },
//       {
//         title: "Our Vision",
//         path: "/about-us/vision",
//         icon: <IoIcons.IoIosPaper />,
//       },
//     ],
//   },
// ]

// const items = [
//   {
//     title: "Dashboard RTM",
//     path: "/dashboard/real-time-monitoring",
//     icon: "k-i-inbox",
//     selected: true,
//     subNav: [
//       {
//         title: "Our Aim",
//         path: "/about-us/aim",
//         icon: "k-i-inbox",
//       },
//       {
//         title: "Our Vision",
//         path: "/about-us/vision",
//         icon: "k-i-inbox",
//       },
//     ],
//   }
// ]

// const items = [
//   {
//     text: "Dashboard RTM",
//     icon: "k-i-inbox",
//     path: "/dashboard/real-time-monitoring",
//     selected: true,
//   },
//   {
//     text: "Pergerakan Barge",
//     icon: "k-i-inbox",
//     path: "/dashboard/pergerakan-barge",
//     selected: true,
//   },
//   {
//     text: "Performance Barging Out PLH",
//     icon: "k-i-inbox",
//     path: "/dashboard/performance-barging-out-plh",
//     selected: true,
//   },
//   {
//     separator: true,
//   },
//   {
//     text: "Chart",
//     icon: "k-i-bell",
//     path: "/chart",
//   },
// ];

const items = [
  {
    title_parent: "Dashboard",
    path:"",
    childrenList: ['/dashboard/real-time-monitoring', '/dashboard/performance-barging-out-plh'],
    children:[
      {
        title: "Real Time Monitoring",
        path: "/dashboard/real-time-monitoring",
      },
      // {
      //   title: "Pergerakan Barge",
      //   path: "/dashboard/pergerakan-barge",
      // },
      {
        title: "Performance Barging Out PLH",
        path: "/dashboard/performance-barging-out-plh",
      },
    ]
  },
  {
    title_parent: "Dashboard",
    path:"",
    childrenList: ['/dashboard/real-time-monitoring', '/dashboard/performance-barging-out-plh'],
    children:[
      {
        title: "Real Time Monitoring",
        path: "/dashboard/real-time-monitoring",
      },
      // {
      //   title: "Pergerakan Barge",
      //   path: "/dashboard/pergerakan-barge",
      // },
      {
        title: "Performance Barging Out PLH",
        path: "/dashboard/performance-barging-out-plh",
      },
    ]
  },
  // {
  //   title_parent: "Comunication",
  //   path: "/dashboard/pergerakan-barge",
  //   childrenList:[],
  //   children:[]
  // },
]

const StyledDrawer = styled(Drawer)`
  min-height: 100vh;
  .k-drawer-items {
    padding: 8px !important;
  }
`;
const DrawerComponent = ({ propExpanded, propMode, emitHandleClick }) => {
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState(
    items.findIndex((x) => x.selected === true)
  );

  const handleSelect = (ev) => {
    setSelectedId(ev.itemIndex);
    let selectedMenu = items.filter((element, index) => {
      return index === ev.itemIndex;
    });
    navigate(selectedMenu[0].path);
  };
  return (
    <div>
      {propExpanded ? (
        <div className="">
          <StyledDrawer
            expanded={propExpanded}
            position={"start"}
            mode={propMode}
            animation={{
              duration: 400,
            }}
            // items={items.map((item, index) => ({
            //   ...item,
            //   selected: index === selectedId,
            // }))}
            onOverlayClick={emitHandleClick}
            onSelect={handleSelect}
          >
            <DrawerNavigation>
              <SidebarComponent sidebarData={items}/>
            </DrawerNavigation>
          </StyledDrawer>
        </div>
      ) : null}
    </div>
  );
};

export default DrawerComponent;

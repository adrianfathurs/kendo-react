import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Drawer, DrawerNavigation } from "@progress/kendo-react-layout";

// Import third party
import styled from "styled-components";

const items = [
  {
    text: "Dashboard RTM",
    icon: "k-i-inbox",
    path: "/dashboard/real-time-monitoring",
    selected: true,
  },
  {
    text: "Pergerakan Barge",
    icon: "k-i-inbox",
    path: "/dashboard/pergerakan-barge",
    selected: true,
  },
  {
    text: "A2B Support",
    icon: "k-i-inbox",
    path: "/dashboard/A2B",
    selected: true,
  },
  {
    text: "Performacen Barging Out PLH",
    icon: "k-i-inbox",
    path: "/dashboard/performance-barging-out-plh",
    selected: true,
  },
  {
    separator: true,
  },
  {
    text: "Chart",
    icon: "k-i-bell",
    path: "/chart",
  },
  {
    text: "Calendar",
    icon: "k-i-calendar",
    path: "/",
  },
  {
    separator: true,
  },
  {
    text: "Attachments",
    icon: "k-i-hyperlink-email",
    path: "/",
  },
  {
    text: "Favourites",
    icon: "k-i-star-outline",
    path: "/",
  },
];
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
            items={items.map((item, index) => ({
              ...item,
              selected: index === selectedId,
            }))}
            onOverlayClick={emitHandleClick}
            onSelect={handleSelect}
          >
            {/* <DrawerNavigation>
                  <ul className="k-drawer-items">
                      <li className="k-drawer-item k-selected">
                          <span className="k-item-text">Home</span>
                      </li>
                      <li className="k-drawer-item">
                          <span className="k-item-text">Products</span>
                      </li>
                      <li className="k-drawer-item">
                          <span className="k-item-text">About</span>
                      </li>
                  </ul>
            </DrawerNavigation> */}
          </StyledDrawer>
        </div>
      ) : null}
    </div>
  );
};

export default DrawerComponent;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Drawer } from "@progress/kendo-react-layout";

// Import third party
import styled from "styled-components";

const items = [
    {
      text: "Inbox",
      icon: "k-i-inbox",
      path: "/dashboard",
      selected: true,
    },
    {
      separator: true,
    },
    {
      text: "Notifications",
      icon: "k-i-bell",
      path: "/",
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
const DrawerComponent = ({propExpanded, propMode, emitHandleClick}) => {
    const navigate = useNavigate()
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
            { propExpanded ? (
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
            ></StyledDrawer>
          </div>
        ) : null}
        </div>
    );
};

export default DrawerComponent;
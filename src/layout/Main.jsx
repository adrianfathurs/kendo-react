import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

//Import component
import AppBarComponent from "../components/AppBarComponent";
import DrawerComponent from "../components/DrawerComponent";

function getCurrentDimension() {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
}

function Main() {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  const [expanded, setExpanded] = useState(true);
  const [mode, setMode] = useState(
    screenSize.width <= 768 ? "overlay" : "push"
  );

  const handleClick = (view) => {
    setExpanded((prevState) => !prevState);
    view === "mobileView" ? setMode("overlay") : setMode("push");
  };

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);

  return (
    <>
      <div className="d-flex h-100">
        { expanded ? (<DrawerComponent propExpanded={expanded} propMode={mode} emitHandleClick={handleClick} />) : null }
        {/* {expanded ? (
          <div className="">
            <StyledDrawer
              expanded={expanded}
              position={"start"}
              mode={mode}
              animation={{
                duration: 400,
              }}
              items={items.map((item, index) => ({
                ...item,
                selected: index === selectedId,
              }))}
              onOverlayClick={handleClick}
              onSelect={handleSelect}
            ></StyledDrawer>
          </div>
        ) : null} */}
        <div className="w-100">
          <AppBarComponent emitHandleClick={handleClick} />
          <div>
            <Outlet />
          </div>
        </div>
      </div>
      <style>{`
            body {
                background: #dfdfdf;
            }
            .title {
                font-size: 18px;
                margin: 0;
            }
            ul {
                font-size: 14px;
                list-style-type: none;
                padding: 0;
                margin: 0;
                display: flex;
            }
            li {
                margin: 0 10px;
            }
            li:hover {
                cursor: pointer;
                color: #84cef1;
            }
            .k-button k-button-md k-rounded-md k-button-solid k-button-solid-base {
                padding: 0;
            }
            .k-badge-container {
                margin-right: 8px;
            }
        `}</style>
    </>
  );
}

export default Main;

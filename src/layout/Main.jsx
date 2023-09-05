import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

//Import component
import AppBarComponent from "../components/AppBarComponent";
import DrawerComponent from "../components/DrawerComponent";
import { maxWidthIcon } from "@progress/kendo-svg-icons";

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
      <div className="d-flex h-100" style={{overflowX: "hidden", maxWidth:"100%"}}>
        {expanded ? (
          <DrawerComponent
            propExpanded={expanded}
            propMode={mode}
            emitHandleClick={handleClick}
          />
        ) : null}
        <div className="w-100">
          <AppBarComponent emitHandleClick={handleClick} />
          <div className="p-3 mw-100" style={{overflowX: "scroll", width: expanded ? "80vw": "100vw"}}>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;

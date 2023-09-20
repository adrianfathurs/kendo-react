export const cellWithBackGround = (props, limit) => {
  const examplePrice = props.dataItem[props.field] < limit;
  const icon = examplePrice ? (
    <span className="k-icon k-i-sort-desc-sm" />
  ) : (
    <span className="k-icon k-i-sort-asc-sm" />
  );
  var style = {
    backgroundColor: examplePrice
      ? "rgb(243, 23, 0, 0.32)"
      : "rgb(55, 180, 0,0.32)",
  };
  var field = props.field || "";
  return (
    <td style={style}>
      {props.dataItem[field]} {icon}
    </td>
  );
};
export const cellWithBackGroundA2BSupport = (props, limit) => {
  const examplePrice = props.dataItem[props.field] < limit;
  var style = {
    backgroundColor: examplePrice
      ? "rgb(243, 23, 0, 0.32)"
      : "",
    color: examplePrice ? "rgb(207, 57, 0)" : "",
    fontWeight: examplePrice ? 600 : 400
  };
  var field = props.field || "";
  return (
    <td style={style}>
      {props.dataItem[field]}
    </td>
  );
};
export const cellWithBackGroundPergerakanBarge = (props) => {
  var style = {
    backgroundColor: "rgb(243, 23, 0, 0.32)",
  };
  var field = props.field || "";
  if (props.dataItem[field].includes("LOADING")) {
    style.backgroundColor = "rgba(55, 180, 0, 0.32)";
  } else if (props.dataItem[field].includes("Next")) {
    style.backgroundColor = "rgb(255, 255, 0, 0.32)";
  } else if (props.dataItem[field].includes("ANCHOR")) {
    style.backgroundColor = "rgb(255, 255, 0, 0.32)";
  } else if (props.dataItem[field].includes("FAW")) {
    style.backgroundColor = "rgb(0, 128, 255, 0.32)";
  }
  return <td style={style}>{props.dataItem[field]}</td>;
};

export const cellFontColor = (props, limit) => {
  let style = { color: "black" };
  if (props.dataItem[props.field] === "On Proses") {
    style.color = "#FDAF2F";
  } else if (props.dataItem[props.field] === "Complete") {
    style.color = "#10CB13";
  } else {
    style.color = "#DE2812";
  }
  style.fontWeight = 600;
  const field = props.field || "";
  return <td style={style}>{props.dataItem[field]}</td>;
}

export const cellFontColorPlanHauling = (props, limit) => {
  let style = { color: "black" };
  if(props.dataItem['statusSubTotal'] || props.field == "Total"){
    style.fontWeight = 700;
  }
  const field = props.field || "";
  return <td style={style}>{props.dataItem[field]}</td>;
};

export const cellFontColorA2B = (props, limit) => {
  let style = { color: "black" };
  if (props.dataItem[props.field] !== "RFU") {
    style.color = "#DE2812";
    style.fontWeight = 600;
  }
  const field = props.field || "";
  return <td style={style}>{props.dataItem[field]}</td>;
};

export const cellFontColorJetty = (props, limit) => {
  let style = { color: "black" };
  if (props.dataItem[props.field] === "per Day" || props.dataItem[props.field] === "per Barge") {
    style.color = "#128FDA";
    style.fontWeight = 600;
  }
  const field = props.field || "";
  return <td style={style}>{props.dataItem[field]}</td>;
};

export const cellFontColorTAS = (props, limit) =>{
  let style = { color: "black" };
  if (props.dataItem[props.field] === "Turun") {
    style.color = "#DE2812";
    style.fontWeight = 600;
  }
  else if (props.dataItem[props.field] === "Naik") {
    style.color = "#51CD13";
    style.fontWeight = 600;
  }
  else if (props.dataItem[props.field] === "Bertahan") {
    style.color = "#DAD117";
    style.fontWeight = 600;
  }
  const field = props.field || "";
    return <td style={style}>{props.dataItem[field]}</td>;
};

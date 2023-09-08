export const cellWithBackGround = (props, limit) => {
    const examplePrice = props.dataItem[props.field] < limit;
    const icon = examplePrice ? (
      <span className="k-icon k-i-sort-desc-sm" />
    ) : (
      <span className="k-icon k-i-sort-asc-sm" />
    );
    const style = {
      backgroundColor: examplePrice
        ? "rgb(243, 23, 0, 0.32)"
        : "rgb(55, 180, 0,0.32)",
    };
    const field = props.field || "";
    return (
      <td style={style}>
        {props.dataItem[field]} {icon}
      </td>
    );
  };
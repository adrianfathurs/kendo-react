import React, { useState } from "react";

const TablePergerakanBarge = ({header, items}) => {
  //dummy data
  const [header, setHeader] = useState([
    {
      name: "No",
    },
    {
      name: "Tug Boat",
    },
    {
      name: "Barge",
    },
    {
      name: "Size (feet)",
    },
    {
      name: "Owner",
    },
    {
      name: "Arrival / Eta PALA",
    },
    {
      name: "Port Of Discharge (Plan)",
    },
    {
      name: "Status",
    },
  ]);
  const [items, setItems] = useState([
    {
      id: 1,
      tugboat: "ERCALM",
      barge: "STELLA",
      size: 300,
      owner: "BPR",
      eta: "2023-07-20T07:06:37.000000Z",
      plan: "MV. PHEDOULAS ROSE",
      status: "LOADINGJ1",
    },
    {
      id: 2,
      tugboat: "ERCALM",
      barge: "STELLA",
      size: 300,
      owner: "BPR",
      eta: "2023-07-20T07:06:37.000000Z",
      plan: "MV. PHEDOULAS ROSE",
      status: "LOADINGJ1",
    },
    {
      id: 3,
      tugboat: "ERCALM",
      barge: "STELLA",
      size: 300,
      owner: "BPR",
      eta: "2023-07-20T07:06:37.000000Z",
      plan: "MV. PHEDOULAS ROSE",
      status: "LOADINGJ1",
    },
    {
      id: 4,
      tugboat: "ERCALM",
      barge: "STELLA",
      size: 300,
      owner: "BPR",
      eta: "2023-07-20T07:06:37.000000Z",
      plan: "MV. PHEDOULAS ROSE",
      status: "LOADINGJ1",
    },
    {
      id: 5,
      tugboat: "ERCALM",
      barge: "STELLA",
      size: 300,
      owner: "BPR",
      eta: "2023-07-20T07:06:37.000000Z",
      plan: "MV. PHEDOULAS ROSE",
      status: "LOADINGJ1",
    },
  ]);

  return (
    <div id="pergerakan-barge">
      <div>
        <h5>PERGERAKAN BARGE</h5>
      </div>
      <table>
        <thead>
          <tr>
            {header.map((element, index) => (
              <th>{element.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
            {items.map((element, index) => (
              <tr>
                <td>{++index}</td>
                <td>{element.tugboat}</td>
                <td>{element.barge}</td>
                <td>{element.size}</td>
                <td>{element.owner}</td>
                <td>{element.eta}</td>
                <td>{element.plan}</td>
                <td>{element.status}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablePergerakanBarge;

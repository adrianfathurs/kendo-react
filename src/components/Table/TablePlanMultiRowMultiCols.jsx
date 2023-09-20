import { useEffect, useState } from "react";
import {formatRupiah} from "../../utils/typography/index"

const TablePlanMultiRowMultiCols = ({dataTableProps}) => {

  const filterHeader = () => {
    let headers = []
    for(let i = 0; i < data.length; i ++) {
      headers.push(data[i].product[0])
    }
    headers.sort((b, a) => a.plan.length - b.plan.length);
    for(let i = 0; i< headers.length ; i++){
      headers[i].countColumnSpan = headers[0].plan.length - headers[i].plan.length
    }
    setHeader(headers)
  }
  const mergeCells = () => {
    let looped = 1;
    for (let i = 0; i < data.length; i ++) {
      let rowSpan = 1;
      looped = 1;
      for (let j = 0; j < data[i].product.length; j++) {
        for(let k = j + 1; k < data[i].product.length; k++){
          if (data[i].product[j].keyProduct === data[i].product[k].keyProduct) {
            looped++;
            rowSpan++;
          } else {
            break;
          }
        }
        data[i].disContinueRows =
          rowSpan === 1 ? (looped === 1 ? 1 : undefined) : rowSpan;
      }
    }
    setData(data)
  };
  const [header, setHeader] = useState([
    {
      plan:[ 
        {
          planName: "SP2",
          value: 12000
        },
        {
          planName: "SP5",
          value: 12000
        },
        {
          planName: "SP6",
          value: 12000
        },
        {
          planName: "SP8",
          value: 12000
        },
      ]
    },
    {
      plan:[ 
        {
          planName: "SP2",
          value: 12000
        },
        {
          planName: "SP5",
          value: 12000
        },
        {
          planName: "SP6",
          value: 12000
        },
        {
          planName: "SP8",
          value: 12000
        },
      ]
    },
    {
      plan:[ 
        {
          planName: "SP2",
          value: 12000
        },
        {
          planName: "SP5",
          value: 12000
        },
        {
          planName: "SP6",
          value: 12000
        },
        {
          planName: "SP8",
          value: 12000
        },
      ]
    },
])
  // const [data, setData] = useState([
  //   {
  //     entity: "ABB",
  //     product:[
  //       {
  //         keyProduct: "abb",
  //         productName: "LA reg",
  //         plan:[
  //           {
  //             planName: "SP2",
  //             value: 12000
  //           },
  //           {
  //             planName: "SP5",
  //             value: 12000
  //           },
  //           {
  //             planName: "SP6",
  //             value: 12000
  //           },
  //           {
  //             planName: "SP8",
  //             value: 12000
  //           },  
  //           {
  //             planName: "SP10",
  //             value: 12000
  //           },  
  //         ],
  //         total: 12000
  //       },
  //       {
  //         keyProduct: "abb",
  //         productName: "MCV CC",
  //         plan:[
  //           {
  //             planName: "SP2",
  //             value: 12000
  //           },
  //           {
  //             planName: "SP5",
  //             value: 12000
  //           },
  //           {
  //             planName: "SP6",
  //             value: 12000
  //           },
  //           {
  //             planName: "SP8",
  //             value: 12000
  //           },  
  //           {
  //             planName: "SP10",
  //             value: 12000
  //           }, 
  //         ],
  //         total: 12000
  //       },
  //       {
  //         keyProduct: "abb",
  //         productName: "MCV CC",
  //         plan:[
  //           {
  //             planName: "SP2",
  //             value: 12000
  //           },
  //           {
  //             planName: "SP5",
  //             value: 12000
  //           },
  //           {
  //             planName: "SP6",
  //             value: 12000
  //           },
  //           {
  //             planName: "SP8",
  //             value: 12000
  //           },  
  //           {
  //             planName: "SP10",
  //             value: 12000
  //           }, 
  //         ],
  //         total: 12000
  //       },
  //       {
  //         keyProduct: "abb",
  //         productName: "Subtotal",
  //         plan:[
  //           {
  //             planName: "SP2",
  //             value: 12000
  //           },
  //           {
  //             planName: "SP5",
  //             value: 12000
  //           },
  //           {
  //             planName: "SP6",
  //             value: 12000
  //           },
  //           {
  //             planName: "SP8",
  //             value: 12000
  //           },  
  //           {
  //             planName: "SP10",
  //             value: 12000
  //           }, 
  //         ],
  //         total: 12000
  //       },
  //     ]
  //   },
  //   {
  //     entity: "SMM",
  //     product:[
  //       {
  //         keyProduct: "smm",
  //         productName: "LA reg",
  //         plan:[
  //           {
  //             planName: "SP1",
  //             value: 12000
  //           },
  //           {
  //             planName: "SP7",
  //             value: 12000
  //           },
  //           {
  //             planName: "SP9",
  //             value: 12000
  //           },
  //           {
  //             planName: "SP11",
  //             value: 12000
  //           },
  //         ],
  //         total: 12000
  //       },
  //       {
  //         keyProduct: "smm",
  //         productName: "LA 22",
  //         plan:[
  //           {
  //             planName: "SP1",
  //             value: 12000
  //           },
  //           {
  //             planName: "SP7",
  //             value: 12000
  //           },
  //           {
  //             planName: "SP9",
  //             value: 12000
  //           },
  //           {
  //             planName: "SP11",
  //             value: 12000
  //           },
  //         ],
  //         total: 12000
  //       },
  //       {
  //         keyProduct: "smm",
  //         productName: "Subtotal",
  //         plan:[
  //           {
  //             planName: "SP1",
  //             value: 12000
  //           },
  //           {
  //             planName: "SP7",
  //             value: 12000
  //           },
  //           {
  //             planName: "SP9",
  //             value: 12000
  //           },
  //           {
  //             planName: "SP11",
  //             value: 12000
  //           },
  //         ],
  //         total: 12000
  //       },
  //     ]
  //   },
  //   {
  //     entity: "TOP",
  //     product:[
  //       {
  //         keyProduct: "top",
  //         productName: "LA reg",
  //         plan:[
  //           {
  //             planName: "SP3",
  //             value: 12000
  //           },
  //           {
  //             planName: "SP4",
  //             value: 12000
  //           },
  //           {
  //             planName: "SP11",
  //             value: 12000
  //           },
  //         ],
  //         total: 12000
  //       },
  //       {
  //         keyProduct: "top",
  //         productName: "LA 22",
  //         plan:[
  //           {
  //             planName: "SP3",
  //             value: 12000
  //           },
  //           {
  //             planName: "SP4",
  //             value: 12000
  //           },
  //           {
  //             planName: "SP11",
  //             value: 12000
  //           },
  //         ],
  //         total: 12000
  //       },
  //       {
  //         keyProduct: "top",
  //         productName: "Subtotal",
  //         plan:[
  //           {
  //             planName: "SP3",
  //             value: 12000
  //           },
  //           {
  //             planName: "SP4",
  //             value: 12000
  //           },
  //           {
  //             planName: "SP11",
  //             value: 12000
  //           },
  //         ],
  //         total: 12000
  //       },
  //     ]
  //   },
  // ])
  const [data, setData] =useState(dataTableProps)
  useEffect(()=>{
    mergeCells()
    filterHeader()
  }, [])
  return (
    <>
    <div id="table-plan-multi-row-multi-cols">
      <table>
        {

          data.map((element, index) => (
            index == 0 ?
              <>
                <thead>
                  <tr>
                    <th rowSpan={2}>Entity</th>
                    <th rowSpan={2}>Product</th>
                    <th colSpan={header[index].plan.length}>Dump To</th>
                    <th rowSpan={2}>Total</th>
                  </tr>
                  <tr>
                    {
                      header[index].plan.map((element2, index2)=>(
                        <th>{element2.planName}</th>
                      ))
                    }
                    {
                      [...Array(header[index].countColumnSpan)].map(()=>(
                        <th></th>
                      ))
                    }
                  </tr>
                </thead>
                <tbody>
                  {
                    element.product.map((element3, index3)=>(
                      <tr>
                        {
                          index3 == 0 ?
                          <>
                            <td rowSpan={element.disContinueRows}>{element.entity}</td>
                            <td>{element3.productName}</td>
                            {
                              element3.plan.map((element4, index4)=>(
                                <td>{element4.value ? formatRupiah(element4.value) : element4.value}</td>
                               ))
                            }
                            {
                                [...Array(header[index].countColumnSpan)].map(()=>(
                                  <td></td>
                                ))
                            }
                            <td>{element3.total ? formatRupiah(element3.total) : element3.total}</td>
                          </>
                          : <>
                              <td className={element3.productName == 'Subtotal' ? 'fw-semibold' : ''}>{element3.productName}</td>
                              {
                                element3.plan.map((element4, index4)=>(
                                  <td className={element3.productName == 'Subtotal' ? 'fw-semibold' : ''}>{element4.value ? formatRupiah(element4.value) : element4.value}</td>
                                ))
                              }
                              {
                                [...Array(header[index].countColumnSpan)].map(()=>(
                                  <td></td>
                                ))
                              }
                              <td className={element3.productName == 'Subtotal' ? 'fw-semibold' : ''}>{element3.total ? formatRupiah(element3.total) : element3.total}</td>
                            </>
                        }
                      </tr>
                    ))
                  }
                </tbody>
              </>
            : <>
              <thead>
                  <tr>
                    <th rowSpan={2}>Entity</th>
                    <th rowSpan={2}>Product</th>
                    {
                      header[index].plan.map((element2, index2)=>(
                        <th>{element2.planName}</th>
                      ))  
                    }
                    {
                      [...Array(header[index].countColumnSpan)].map(()=>(
                        <th></th>
                      ))
                    }
                    <th rowSpan={2}>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    element.product.map((element3, index3)=>(
                      <tr>
                        {
                          index3 == 0 ?
                          <>
                            <td rowSpan={element.disContinueRows}>{element.entity}</td>
                            <td>{element3.productName}</td>
                            {
                              element3.plan.map((element4, index4)=>(
                                <td >{element4.value ? formatRupiah(element4.value) : element4.value}</td>
                               ))
                            }
                            {
                                [...Array(header[index].countColumnSpan)].map(()=>(
                                  <td></td>
                                ))
                            }
                            <td>{element3.total ? formatRupiah(element3.total) : element3.total}</td>
                          </>
                          : <>
                              <td className={element3.productName == 'Subtotal' ? 'fw-semibold' : ''}>{element3.productName}</td>
                              {
                                element3.plan.map((element4, index4)=>(
                                  <td className={element3.productName == 'Subtotal' ? 'fw-semibold' : ''}>{element4.value ? formatRupiah(element4.value) : element4.value}</td>
                                ))
                              }
                              {
                                [...Array(header[index].countColumnSpan)].map(()=>(
                                  <td></td>
                                ))
                              }
                              <td className={element3.productName == 'Subtotal' ? 'fw-semibold' : ''}>{element3.total ? formatRupiah(element3.total) : element3.total}</td>
                            </>
                        }
                      </tr>
                    ))
                  }
                </tbody>
            </>
          ))
        }
      </table>
    </div>
    </>
  )
}

export default TablePlanMultiRowMultiCols
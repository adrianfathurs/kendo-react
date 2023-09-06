import React, {useState, useEffect} from 'react';
import * as ReactDOM from 'react-dom';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';

import products from '../Table/dummyData/planHauling.json';

// dummy test with even odd merged cells
// products.forEach((p) => {
//   p.discontinuedCellRowSpan = p.ProductID % 2 !== 0 ? 2 : undefined;
// });

const App = () => {
    // state
    const [gridData, setGridData] = useState(null)

    //method
    const initialization = () => {
        // merge cells with the same value in the 'Discontinued' column
        let looped = 1;
        for (let i = 0; i < products.length; i += looped) {
        let rowSpan = 1;
        looped = 1;
        for (let j = i + 1; j < products.length; j++) {
            if (products[i].Discontinued === products[j].Discontinued) {
                looped++;
                rowSpan++;
            } else {
                break;
            }
        }

        // add special property for the 'Discontinued' column cells rowSpan
        products[i].discontinuedCellRowSpan =
            rowSpan === 1 ? (looped === 1 ? 1 : undefined) : rowSpan;
        }
    }
    const getItemIndex = (dataItem) => {
        return gridData.findIndex(
          (record) => record.ProductID === dataItem.ProductID
        );
    };
    const updateItem = (item) => {
        let index = products.findIndex(
            (record) => record.ProductID === item.ProductID
        );
        products[index] = item;
        return products;
    };
    const hoverMergedCellByIndex = (index, hover) => {
        let currentIndex = index;
        let currentDataItem = gridData[currentIndex];
        while (!currentDataItem.discontinuedCellRowSpan) {
            currentIndex--;
            currentDataItem = gridData[currentIndex];
        }
        // add special property for the 'Discontinued' column cells hover
        currentDataItem.discontinuedClassName = hover ? 'k-hover' : undefined;
        update(currentDataItem);
    };

    const updateNextItems = (index, count, hover) => {
        for (let i = index; i < index + count; i++) {
            const dataItem = gridData[i];
            dataItem.className = hover ? 'k-hover' : undefined;
            update(dataItem);
        }
    };

    const handleMergedHover = (dataItem, rowSpanNumber, hover) => {
        const index = getItemIndex(dataItem);
        updateNextItems(index, rowSpanNumber, hover);
    };

    const handleCellHover = (dataItem, hover) => {
        if (dataItem.discontinuedCellRowSpan) {
            return;
        }
        let index = getItemIndex(dataItem);
        hoverMergedCellByIndex(index, hover);
    };

    const update = (dataItem) => {
        const gridData = updateItem(dataItem);
        setGridData({ gridData });
      };
    
    const cellRender = (cell, props) => {
        const { dataItem, field } = props;
        if (field === 'Discontinued') {
          if (dataItem.discontinuedCellRowSpan) {
            return (
              <td
                {...cell.props}
                rowSpan={dataItem.discontinuedCellRowSpan}
                className={dataItem.className || dataItem.discontinuedClassName}
                onMouseOver={() => {
                  handleMergedHover(
                    dataItem,
                    dataItem.discontinuedCellRowSpan,
                    true
                  );
                }}
                onMouseOut={() => {
                  handleMergedHover(
                    dataItem,
                    dataItem.discontinuedCellRowSpan,
                    false
                  );
                }}
              >
                {cell.props.children}
              </td>
            );
          } else if (dataItem.discontinuedCellRowSpan === 1) {
            return <td {...cell.props}>{cell.props.children}</td>;
          } else {
            return null;
          }
        }
        return (
          <td
            {...cell.props}
            className={dataItem.className}
            colSpan={props.colSpan}
            onMouseOver={() => {
               handleCellHover(props.dataItem, true);
            }}
            onMouseOut={() => {
               handleCellHover(props.dataItem, false);
            }}
          >
            {cell.props.children}
          </td>
        );
      };
      
    //useEffect
    useEffect(() => {
        initialization()
    }, [])

    return (
        <div>
          <Grid
            style={{ height: '700px' }}
            data={gridData}
            cellRender={cellRender}
          >
            <Column field="ProductID" title="ID" width="60px" />
            <Column field="ProductName" title="Name" width="250px" />
            <Column field="Category.CategoryName" title="CategoryName" />
            <Column field="UnitPrice" title="Price" width="80px" />
            <Column field="UnitsInStock" title="In stock" width="80px" />
            <Column field="Discontinued" width="120px" />
          </Grid>
        </div>
      );
}
export default App;
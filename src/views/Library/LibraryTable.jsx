import React from 'react';
import TableKendoFilter from '../../components/Table/TableKendoFilter';
import TableKendoFilter2 from '../../components/Table/trial/TableKendoFilter';
import TableKendoMultiHeader from '../../components/Table/trial/TableKendoMultiHeader/TableKendoMultiHeader';
import TableKendoMultiHeader2 from '../../components/Table/trial/TableKendoMultiHeader/TableKendoMultiHeader2';

const LibraryTable = props => {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className="col card shadow px-3 py-2">
                        <div>
                            <h4>Table With Lock Column, Selected Row, but filter not function, Pagination</h4>
                        </div>
                        <TableKendoFilter/>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className="col card shadow px-3 py-2">
                        <div>
                            <h4>Table With Lock Column, Selected Row, Filter, Pagination</h4>
                        </div>
                        <TableKendoFilter2/>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className="col card shadow px-3 py-2">
                        <div>
                            <h4>Table Multi Column Header</h4>
                        </div>
                        <TableKendoMultiHeader/>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className="col card shadow px-3 py-2">
                        <div>
                            <h4>Table Multi Column Header</h4>
                        </div>
                        <TableKendoMultiHeader2/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LibraryTable;
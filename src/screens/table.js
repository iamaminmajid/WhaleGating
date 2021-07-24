import React, {useState} from 'react';

import Grid from '@material-ui/core/Grid';

import Sidebar from './../Sidebar.js';

import TablePodSelection from './../tablePodSelection.js';
import ComparisonTable from './../table.js';

function Table(props){
    return (
        <div>
            <TablePodSelection />
            <Grid container>
            <Grid item md={12}>
                <ComparisonTable/>
            </Grid>
           
            </Grid>
        </div>
    )
}

export default Table;
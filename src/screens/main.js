import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';

import Grid from '@material-ui/core/Grid';

import axios from "axios";

import VennPodSelection from './../vennPodSelection.js';

import Venn from './../venn.js';

import Sidebar from './../Sidebar.js'

function MainScreen(){
    const scheme = ['#1abc9c', '#3498db', '#9b59b6', '#34495e', '#f1c40f', '#e67e22', '#e74c3c', '#2ecc71'];
    const [data, setData] = useState(0);
    const [isBusy, setBusy] = useState(true);

    

    async function getData(){
        await axios.get(`http://localhost/whalegating-api/getTransactions.php?date=300`).then(result => {
            let res = result.data;
            setData(res)
            setBusy(false);
            
            // console.log(result.data)        
        })
    }
    
    
    useEffect(() => {
        getData()
        
    },[])
console.log(data)
    
    
    return ( 
        <div>
            <VennPodSelection />
            {isBusy ? '' : ( 
            <Grid container>
            
                <Grid item md={10}>
                    <Venn vdata={data} scheme={scheme}/> 
                </Grid>
                <Grid item md={2}>
                    <Sidebar vdata={data} scheme={scheme}/>
                </Grid>
            </Grid>
            )}

            
        </div>
    );
}

export default MainScreen;
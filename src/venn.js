import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import {VennDiagram, VennSeries, VennArc, VennLabel} from 'reaviz';

import bg from './bg.jpg'

function Venn(props){
    const height = 450;
    const width = 450;
    const showAll = true;
    const showValues = false;
    const strokeWidth = 3
    // const stroke = cybertron[0];
    const gradient = false;

    
    return ( 
        <div className="vennContainer" style={{margin:"0 auto", display:"flex", justifyContent:"center", margin:"25px", borderRadius:"8px", backgroundColor:"#fff", backgroundImage: 'url(' + bg + ')', boxShadow:"0 0 18px -11px #333", marginTop:"40px"}}>
        <VennDiagram
        height={height}
        width={width}
        data={props.vdata}
        series={
            <VennSeries
            colorScheme={(data, index) => {
                return props.scheme[index]
              }}
            arc={
                <VennArc
                strokeWidth={strokeWidth}
                />
            }
            label={
                <VennLabel
                labelType={showValues ? 'value' : 'key'}
                showAll={showAll}
                />
            }
            />
        }
        />
        
        
        </div>
    );
}

export default Venn;
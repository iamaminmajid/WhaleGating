import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    span:{
        width:"10px",
        height:"10px",
        backgroundColor:"#ff5722",
        marginRight:"10px",
        marginBottom:"1px",
        borderRadius:"10px",
        display:"inline-block",
    }
}))

export default function Sidebar(props){
    const classes = useStyles()
    // const sdata = props.vdata.concat([props.vdata]);
    // console.log(props.vdata[0])
    const sdata = [props.vdata];
    
    return (
        <div>
            {/* <div style={{width: "100%", height: "250px", backgroundColor: "#428bca", color: "#fff", lineHeight: "250px", textAlign: "center"}}>MEDIUM RECTANGLE</div> */}

            <div style={{textAlign:"left"}}>
                <ul style={{margin:"0px", padding:"20px", boxShadow:"rgb(51 51 51 / 28%) 0px 5px 20px 0px", backgroundColor:"#fff", listStyle:"none", lineHeight:"25px", marginTop:"40px", borderRadius:"6px"}}>
                    {sdata[0].map(function(v,k){
                      return (
                        <li><span className={classes.span} style={{backgroundColor: props.scheme[k] }}></span>{v.key[0]}</li>
                      )
                    })}
                    
                    
                </ul>
            </div>

        </div>
    );
}
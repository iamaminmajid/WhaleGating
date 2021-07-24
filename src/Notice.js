import React from 'react';

export default function Notice(){
    return(
        <div>
            <div style={{
                backgroundColor:"#ecb100",
                color:"#fff",
                maxWidth:"850px",
                fontSize:"14px",
                margin:"0 auto",
                marginBottom:"25px",
                padding:"12px 15px",
                borderRadius:"6px",
                textTransform:"uppercase",
                letterSpacing:"1px",
                fontWeight:500
            }}>This page is for entertainment only. It is not a financial advice, Please do your own research.</div>
            {/* <div style={{width: "728px", height: "90px", backgroundColor: "#d3d3d3", color: "#333", lineHeight: "90px", textAlign: "center", margin: "0 auto", marginBottom:"25px" }}>
            LEADERBOARD
            </div> */}
        </div>
    );
}
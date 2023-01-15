import { Grid } from '@mui/material';
import React from 'react'

const GenerateRedBox = (props) => {
    let divNum = Number(props.details.divNumber2);
    let prefix = props.details.prefix2;

    const num =[];
    for(let i=0;i<divNum;i++){
        num.push(i)
    }

    const divStyle = {
        background:'red',
        width:'100px',
        height:'100px',
        margin:'1rem'
    }

    const gridStyle ={
        display: "flex",
        flexWrap: "wrap",
        position: "relative",
    }
  return (
    <>
        <Grid style={gridStyle}>
            {num.map((val,index)=>{
                return (
                    <Grid item key={index} style={divStyle}>
                        <span 
                        style={{
                            display:'flex',
                            justifyContent:'center',
                            alignItems:'center',
                            padding:'25%',
                            fontSize:'25px',
                            fontWeight:600,
                            letterSpacing:'2px'
                        }}>
                            {prefix}{val+1}
                        </span>
                    </Grid>
                )
            })}
        </Grid>
    </>
  )
}

export default GenerateRedBox
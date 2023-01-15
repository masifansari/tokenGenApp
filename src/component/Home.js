import { Button, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import GenerateBlueBox from './GenerateBlueBox';
import GenerateRedBox from './GenerateRedBox';

const Home = () => {
    const [display, setDisplay] = useState(false);
    const [details, setDetails] = useState({
        divNumber1: "",
        divNumber2: "",
        prefix1: "",
        prefix2: "",
        rowNumber1: "",
        rowNumber2: "",
        widthVal1: "",
        widthVal2: "",
    })

    const setDisplayValue = () =>{
        setDisplay(true)
    }

    const sendDetails = (e) =>{
        e.preventDefault();
    }

    const onChange = (e) =>{
        setDetails({...details,[e.target.name]: e.target.value});
    };

    const clearAll = () => {
        setDisplay(false);
        setDetails({
          divNumber1: "",
          divNumber2: "",
          prefix1: "",
          prefix2: "",
          rowNumber1: "",
          rowNumber2: "",
          

        });
      };

    if(details.rowNumber1){
        details.widthVal1 = `${details.rowNumber1*100+200}px`;
    }
    if(details.rowNumber2){
        details.widthVal2 = `${details.rowNumber2*100+200}px`;
    }

  return (
    <>
        <div>
            <div className='fromDiv'>
                <form onSubmit={sendDetails}
                    style={{
                    display: "flex",
                    textAlign: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    }}>
                    <Typography variant="h4" sx={{ marginBottom: "4rem" }} mt={5}>
                    Token Generator Application
                    </Typography>
                    <Stack sx={{justifyContent:"center"}} direction={'row'} spacing={2} mt={10}>
                        <Typography variant='h6' mt={1}>Number of blue tokens:</Typography>
                        <TextField 
                        name='divNumber1' 
                        type='text' 
                        variant='outlined' 
                        autoComplete='off'
                        value={details.divNumber1}
                        onChange={onChange}
                        />
                    </Stack>
                    <Stack sx={{justifyContent:"center"}} direction={'row'} spacing={7}mt={2}>
                        <Typography variant='h6' mt={1}>Blue tokens prefix:</Typography>
                        <TextField 
                        name='prefix1' 
                        type='text' 
                        variant='outlined' 
                        autoComplete='off'
                        value={details.prefix1}
                        onChange={onChange}
                        />
                    </Stack>
                    <Stack sx={{justifyContent:"center"}} direction={'row'} spacing={6}mt={2}>
                        <Typography variant='h6' mt={1}>Blue token per row:</Typography>
                        <TextField 
                        name='rowNumber1' 
                        type='text' 
                        variant='outlined' 
                        autoComplete='off'
                        value={details.rowNumber1}
                        onChange={onChange}
                        />
                    </Stack>
                    <Stack sx={{justifyContent:"center"}} direction={'row'} spacing={2}mt={2}>
                        <Typography variant='h6' mt={1}>Number of red tokens:</Typography>
                        <TextField 
                        name='divNumber2' 
                        type='text' 
                        variant='outlined' 
                        autoComplete='off'
                        value={details.divNumber2}
                        onChange={onChange}
                        />
                    </Stack>
                    <Stack sx={{justifyContent:"center"}} direction={'row'} spacing={7}mt={2}>
                        <Typography variant='h6' mt={1}>Red tokens prefix:</Typography>
                        <TextField 
                        name='prefix2' 
                        type='text' 
                        variant='outlined' 
                        autoComplete='off'
                        value={details.prefix2}
                        onChange={onChange}
                        />
                    </Stack>
                    <Stack sx={{justifyContent:"center"}} direction={'row'} spacing={6}mt={2}>
                        <Typography variant='h6' mt={1}>Red token per row:</Typography>
                        <TextField 
                        name='rowNumber2' 
                        type='text' 
                        variant='outlined' 
                        autoComplete='off'
                        value={details.rowNumber2}
                        onChange={onChange}
                        />
                    </Stack>
                </form>
            <div>
                <Stack
                sx={{ justifyContent: "center" }}
                mt={3}
                spacing={2}
                direction={"row"}>
                <Button
                  type="submit"
                  variant="contained" onClick={setDisplayValue}>
                  Generate
                </Button>
                <Button variant="contained" onClick={clearAll}>
                  Clear
                </Button>
                </Stack>
            </div>
            </div>
               

            <div 
                style={{
                    maxWidth: `${details.widthVal1}`,
                    margin:'auto',
                    display:'flex',
                    textAlign:'center',
                    justifyContent:'center',
                    flexDirection:'column'
            }}>
            {display===true ? <GenerateBlueBox details={details}/> :""}   
            </div>
            <div
                style={{
                    maxWidth: `${details.widthVal2}`,
                    margin: "auto",
                    display: "flex",
                    textAlign: "center",
                    justifyContent: "center",
                    flexDirection: "column",
            }}
            >
                {display===true ? <GenerateRedBox details={details}/> : ""}
            </div>
        </div>
    </>
  )
}

export default Home
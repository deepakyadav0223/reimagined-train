import React, {useState, useEffect} from 'react'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import "../Assests/styles.css"

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });
  
const ShowData = (props) => {
  const[data ,setdata] = useState({});

   useEffect(() => {

    if(props.id != -1) {

      async function fetchData() {
        let num = Number(props.id) + 1
        let data  = await fetch("https://reqres.in/api/users/"+num);
        const resp = await data.json();
        // alert(resp.data.length);
        setdata(resp);
        }
        fetchData();

    }
    

    
   }, [props.id])
   

    return (

        <div id="info-container">

          {
            JSON.stringify(data) === '{}' ?  
                    

            <h1 style={{textAlign:'center', marginTop:'15px'}}>Please Click the Buttons first to Show the data</h1>

            : 
            <Paper
            sx={{
              p: 2,
              margin: 'auto',
              maxWidth: 500,
              flexGrow: 1,
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
  
          >
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase sx={{ width: 128, height: 128 }}>
                  <Img alt="complex" src={data.data.avatar} />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1" component="div">
                      Standard license
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      <b>Full Name:  </b> {data.data.first_name + " " + data.data.last_name }
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                     <b>Email:</b>  {data.data.email}
                    </Typography>
                    <Typography variant="body3" color="text.secondary">
                      <b>Text:</b> {data.support.text}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography sx={{ cursor: 'pointer' }} variant="body2">
                      <b>Support:</b>  {data.support.url}
                    </Typography>
                  </Grid>
                </Grid>
                
              </Grid>
            </Grid>
          </Paper>

          }
        
        </div>
      );
  
}

export default ShowData
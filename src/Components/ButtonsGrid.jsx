import React , {useEffect, useState} from 'react'
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


const ButtonsGrid = (props) => {
   const [postcount , setpostcount] = useState(0);

   function handleChange(event) {
    // console.log(event.target.name);
    props.onChange(event.target.name);
}

   useEffect(() => {
    async function fetchData() {
    let data  = await fetch("https://reqres.in/api/users");
    const resp = await data.json();
    // alert(resp.data.length);
    setpostcount(resp.data.length);
    }
    fetchData();
   }, [])
   


  return (
    <Box style={{padding:'25px 25px'}} sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(postcount)).map((_, index) => (
          <Grid item xs={1} sm={1} md={1} key={index}>
            <Item><Button variant="outlined" name={index} onClick={handleChange}>{index+1}</Button></Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default ButtonsGrid
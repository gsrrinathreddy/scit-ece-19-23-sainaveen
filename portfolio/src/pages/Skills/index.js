import Card1 from '../../components/card1';
import { Grid } from '@mui/material';
import Card2 from '../../components/card2';
import Card3 from '../../components/card3';
import Card4 from '../../components/card4';
import Card5 from '../../components/card5';
import Card6 from '../../components/card6';
import Card7 from '../../components/card7';
import Card8 from '../../components/card8';
import Card9 from '../../components/card9';
import Card10 from '../../components/card10';
import {useState,useEffect} from 'react';
import axios from 'axios';
import { Typography } from '@mui/material';

export default function Skills(){
  const [loader,setLoader] = useState(true);
    const [skills,setSkills] = useState(null);

    const connectToServer = async  () => axios.get('http://localhost:7000/Skills')
                                            .then(res=>{
                                        
                                                console.log(res.data);
                                                setSkills(res.data);
                                                setLoader(false)
                                            }).catch(err=>console.log(err))
useEffect(()=>{
   connectToServer();
},[])



  return(
    <>
    <h1>Skills</h1>
      <Grid container sx={{ p: 3 }} spacing={4}>
      <Grid item xs={4}>
      <Card1/>
      </Grid>
      <Grid item xs={4}>
      <Card2/>
      </Grid>
      <Grid item xs={4}>
      <Card3/>
      </Grid>
      <Grid item xs={4}>
      <Card4/>
      </Grid>
      <Grid item xs={4}>
      <Card5/>
      </Grid>
      <Grid item xs={4}>
      <Card6/>
      </Grid>
      <Grid item xs={4}>
      <Card7/>
      </Grid>
      <Grid item xs={4}>
      <Card8/>
      </Grid>
      <Grid item xs={4}>
      <Card9/>
      </Grid>
      <Grid item xs={4}>
      <Card10/>
      </Grid>
      </Grid>
    </>
  )
}
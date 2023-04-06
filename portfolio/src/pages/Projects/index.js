import * as React from 'react';
import ProjectCard1 from '../../components/projectCards/card1';
import {useState,useEffect} from 'react';
import axios from 'axios';
import { Typography } from '@mui/material';

export default function Projects(){
const [loader,setLoader] = useState(true);
    const [projects,setProjects] = useState(null);

    const connectToServer = async  () => axios.get('http://localhost:7000/Projects')
                                            .then(res=>{
                                        
                                                console.log(res.data);
                                                setProjects(res.data);
                                                setLoader(false)
                                            }).catch(err=>console.log(err))
useEffect(()=>{
   connectToServer();
},[])


    return(
        <div>
            <h1>Projects</h1>
            <ProjectCard1/>
        </div>
        
    );
}
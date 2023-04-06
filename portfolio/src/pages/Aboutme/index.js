import {useState,useEffect} from 'react';
import axios from 'axios';
import { Typography } from '@mui/material';

export default function Aboutme(){
const [loader,setLoader] = useState(true);
    const [aboutme,setAboutme] = useState(null);

    const connectToServer = async  () => axios.get('http://localhost:7000/Aboutme')
                                            .then(res=>{
                                        
                                                console.log(res.data);
                                                setAboutme(res.data);
                                                setLoader(false)
                                            }).catch(err=>console.log(err))
useEffect(()=>{
   connectToServer();
},[])


    return(
        <>
        <img alt='profile' style={{borderRadius:'10rem',height:'15rem', marginTop:'6rem', marginBottom:'1rem'}} src={"https://media.licdn.com/dms/image/D5603AQHYwwtT0b-_0g/profile-displayphoto-shrink_200_200/0/1641603356237?e=1684972800&v=beta&t=iGUIeloYHpqLIpoqQ-kTjCXiQaCekiYMC-yjHbWlCJs"}/>
        <div>
            <h3>Name: Gajula Sai Naveen</h3>
            <h3>Father Name: Laxminarayana</h3>
            <h3>Mother Name: Bagya Laxmi</h3>
            <h3>Email: sainaveengajula6@gmail.com</h3>
            <h3>Phone No.: 8639026184</h3>
        </div>

        </>
    )
}
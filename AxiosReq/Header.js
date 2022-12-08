
//import { SettingsApplications } from '@material-ui/icons';
import axios from 'axios'
import {useState} from 'react'
import '../index.css'
const url = 'https://icanhazdadjoke.com/';

const Header=()=>{
    const[joke, setJoke] =useState("nithish is good boy in the world");
const fetchData= async ()=>{
    try {
   const {data} = await axios(url,{
    headers:{
        Accept:'application/json',
    },
   });
   console.log(data.joke)
} catch(error){
    console.log(error.response)
}

};
return(
    <section className='section text-center'>
  
    <button className='btn' onClick={fetchData} > fetch</button>
    <p className='dad-joke'>{joke}</p> 
    </section>
    ) 
 };
 export default Header;

import axios from 'axios'
import {useEffect,useState} from 'react'
const url = "https://course-api.com/react-store-products"

const FirstRequest=()=>{
    const[data, setData] =useState([])
const fetchData= async ()=>{
    try {
    const res= await axios(url)
    console.log(res)
    const data= res.data;
    setData(data)
    } catch(error){
        console.log(error)
    }
}
//fetchData().then(r=>{console.log(r)})

 useEffect(()=>{
   fetchData();
 },[])


return(
    <h2 className='text-center'> {data.map((nithish)=>setData(nithish.id))}</h2> 
) 
 };
 export default FirstRequest;
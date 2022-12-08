import { useEffect } from 'react';
import axios from 'axios';
const productsUrl = 'https://course-api.com/react-store-products';
const randomUserUrl = 'https://randomuser.me/api';
 function Globalinstance() {
    const fetchData= async()=>{
    
        try {
            const resp1 = await axios(productsUrl);
            const resp2 = await axios(randomUserUrl);

            console.log(resp1)
        } 
        catch(error){console.log(error)}
      }
    
    useEffect(()=>{
        fetchData();
    },[])
  return (
    <div>
      <h2 className='text-center'> global instance</h2>
    </div>
  )
  }
export default Globalinstance;
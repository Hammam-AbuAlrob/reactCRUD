import axios from 'axios';
import React, { useEffect, useState } from 'react'
/* من شروط عمل الكستم هوك:
use أن يبدا اسم الفنكشن بكلمة
أن نستخدم الهوكس الموجودة في الرياكت
*/
function useFetch(patho) {
 const [users,setUsers] = useState([]);
  const [error,setError] = useState(null);
  const [isLoading,setIsLoading] = useState(true);

  const getUsers = async ()=>{
    try{
      const response = await axios.get(`${import.meta.env.VITE_BURL}/${patho}`);
      console.log(response.data.users);
      setUsers(response.data.users);
    }
    catch(err){
      setError(err);
    }
    finally{
      setIsLoading(false);
    }
  }

  useEffect(()=>{
    getUsers();
  },[]); 

  return ({users,error,isLoading})
}

export default useFetch
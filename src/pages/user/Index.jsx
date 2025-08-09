import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Loader from '../../components/loader/Loader';
import useFetch from '../../components/custom/useFetch';
function Index() {

  const {users,error,isLoading} = useFetch("users");

  if(isLoading) return <Loader/>
  if(error) return <p className='text-danger'>{error.message}</p>

  return (
    <>
    {
        users.map(user=>
              <div className='user' key={user._id}>
                <h2>{user.userName}</h2>
              </div>
        )
    }
    </>
  )
}

export default Index
/* custom hook بما انه الكود رح يتكرر، رح نحطه بجلد اخر اسمه  */
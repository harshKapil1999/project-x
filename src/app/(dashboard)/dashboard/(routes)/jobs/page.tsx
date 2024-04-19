'use client'

import React, { useEffect } from 'react'
import axios from 'axios'
import { Button } from '@/components/ui/button'

import { getCookie } from 'cookies-next';

const Job = () => {
  const myCookie = getCookie('mindprism-token')
  /* useEffect(() => {
    axios.get(`http://localhost:8000/api/v1/recruitersearch`, { headers: { 'Authorization': `Bearer ${myCookie}` } })
          .then((response) => {
            console.log(response.data);
          })         
          .catch((error) => {
            console.log(error);
          })
  })
  console.log(myCookie) */

  const getUser = () => {
    axios.get(`http://localhost:8000/api/v1/users/profile`, { headers: { 'Authorization': `Bearer ${myCookie}` } })
          .then((response) => {
            console.log(response.data);
          })         
          .catch((error) => {
            console.log(error);
          })
  }
  return (
    <div className=' flex flex-col'>
      <h1 className=' text-2xl Font-bold'>Jobs</h1>
      <Button onClick={() => getUser()}>Get User</Button>
    </div>
  )
}

export default Job
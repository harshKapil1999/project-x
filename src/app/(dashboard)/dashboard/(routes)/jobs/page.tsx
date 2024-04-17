'use client'

import React, { useEffect } from 'react'
import axios from 'axios'

const Job = () => {

  useEffect(() => {
    axios.get(`http://localhost:8000/api/v1/recruitersearch`)
          .then((response) => {
            console.log(response.data);
          })         
          .catch((error) => {
            console.log(error);
          })
  })

  return (
    <div className=' flex flex-col'>
      <h1 className=' text-2xl Font-bold'>Jobs</h1>
    </div>
  )
}

export default Job
import React from 'react'
import { getAuth } from '../helper'
import { Navigate } from 'react-router'

function AuthRoutes({children , to}) {
   const auth=getAuth()
   if(auth) return <Navigate to={to}/>
   return children
}

export default AuthRoutes

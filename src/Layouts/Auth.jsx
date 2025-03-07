import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap'
import { Outlet } from 'react-router'

export class Auth extends Component {
  render() {
    return (
      <>
      <Navbar />
      <Outlet />
      </>
    )
  }
}

export default Auth
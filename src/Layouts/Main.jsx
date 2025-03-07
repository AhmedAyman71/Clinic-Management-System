import React, { Component } from 'react'
import { Outlet } from 'react-router'

export class Main extends Component {
  render() {
    return (
      <Outlet/>
    )
  }
}

export default Main
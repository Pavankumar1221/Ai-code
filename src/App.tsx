import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'

const App = () => {
  return (
    <>
    <Header/>
            <div className="px-24 py-10">
            <Outlet/>
            </div>
    </>
  )
}

export default App
import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

import AppointmentsPage from '../../pages/AppointmentsPage'

const AppComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AppointmentsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppComponent
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './layout/Layout'
import Selection from './pages/Selection'
import Summary from './pages/Summary'
import UserDetails from './pages/UserDetails'
import Note from './pages/Note'
function App() {


  return (
    <>
          <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Selection />} />
          <Route path="user/:id" element={<UserDetails />} />
          <Route path="note" element={<Note />} />
          <Route path="summary" element={<Summary />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

import Home from './pages/Home'
import Experiances from './pages/Experiances'
import Services from './pages/Services'
import Layout from './pages/Layout'
import { Route, Routes } from 'react-router-dom'
import Rough from './components/Rough'
import Three from './components/Three'



function App() {


  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/Experiances" element={< Experiances/>} />
        <Route path="/Services" element={<Services />} />
      </Route>
      <Route path='/rough' element = { <Rough/>} />
      <Route path='/three' element = { <Three/>} />
    </Routes>
    </>
  )
}

export default App

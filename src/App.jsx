
import { Suspense, useState } from 'react'
import './App.css'
import Hero from './components/Hero/Hero'
import Navbar from './components/navbar/Navbar'
import Players from './components/Players/Players'
import { ToastContainer } from 'react-toastify'
import Footer from './components/Footer/Footer'

const fetchPlayer = async () => {
  const res = await fetch('/data.json');

  return res.json();
}

function App() {
  const [coin, setCoin] = useState(10000000);
   const PlayersPromise = fetchPlayer();

  return (
    <>
 
  <Navbar coin={coin} /> 
  <Hero> </Hero>
  
  <Suspense fallback={<span className="loading loading-spinner loading-md"></span>}> 
    <Players coin={coin} setCoin = {setCoin} PlayersPromise = {PlayersPromise}> </Players>
  </Suspense>
  <ToastContainer />
  <Footer> </Footer>
    </>
  )
}

export default App

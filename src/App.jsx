import { useState } from 'react'
import Header from './Global Components/header'
import Footer from './Global Components/footer'
import Home from './Home/home'
import { SkeletonTheme } from 'react-loading-skeleton'
import './App.css'
import loggedInHeader from './Global Components/AdminHeader'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <SkeletonTheme baseColor='#313131' highlightColor='#525252'>
        <loggedInHeader/>
      <Header/>
      <Home/>
      <Footer/>
      </SkeletonTheme>
    </div>
  )
}

export default App

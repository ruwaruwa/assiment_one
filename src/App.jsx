import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Ass from './Design'
import Designone from './Design'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
    {/* <h1 className='text-3xl text-red-500'>helo</h1> */}
  <Designone  items={'one'}/>
  <Designone  items={'two'}/>
  <Designone  items={'three'}/>
  </div>
  )
}

export default App

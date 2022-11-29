import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='wrapper'>
        <div className='static-txt'></div>
          <ul className='dynamic-txts'>
            <li><span>Hi Im Kalvin . .</span></li>
            <li><span>Freelancer . .</span></li>
            <li><span>Web developer</span></li>
          </ul>
      </div>
    </div>
  )
}

export default App

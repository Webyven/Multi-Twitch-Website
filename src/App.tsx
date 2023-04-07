import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Stream from './components/Stream'
import StreamsContainer from './containers/StreamsContainer'
import './App.css'

function App() {
  const [streams, setStreams] = useState([])

  return (
    <div className='App'>
      <StreamsContainer>
        <Stream streamer='IamCristinini'></Stream>
        <Stream streamer='Ibai'></Stream>
      </StreamsContainer>
    </div>
  )
}

export default App

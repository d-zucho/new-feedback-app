import './App.css'
import Header from './components/Header'
import InputBox from './components/InputBox'
import Reviews from './components/Reviews'

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <Header />
        <InputBox />
        <Reviews />
      </div>
    </div>
  )
}

export default App

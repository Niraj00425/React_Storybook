import './App.css'
import TextInput from './TextInput/TextInput'

function App() {
  return (
    <div className='App'>
      <TextInput label='Name' placeholder='Enter name..' backgroundColor='red' />
      <TextInput label='Address' placeholder='Enter Address..' backgroundColor='green' />
    </div>
  )
}

export default App

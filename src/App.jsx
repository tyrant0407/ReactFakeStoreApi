import './App.css'
import { Routes,Route,Link, useLocation} from 'react-router-dom'
import Home from './components/Home'
import Details from './components/Details'

function App() {
  const {search,pathname}=useLocation()
console.log(search,pathname)
  return (
    <div className='h-screen w-screen flex'>
    
      {(pathname !="/" || search.length > 0) && 
       <Link to="/" className='uppercase font-bold flex items-center absolute left-[18%] top-[3%]'>Home</Link> }
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/details/:id' element={<Details/>} />
     </Routes>
     
   
    </div>
  )
}

export default App

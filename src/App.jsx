import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import LoginPage from './Pages/LoginPage'
import NotFound from './Components/NotFound/NotFound'
import Register from './Components/Register/Register'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import database from './firebase'





function App() {

  const route  = createBrowserRouter(
    createRoutesFromElements(
      <Route>
          <Route path='/' element = {<LoginPage />} /> 
          <Route path='/Register' element = {<Register />} /> 
          <Route path='*' element = {<NotFound />} />
      </Route>
      
    )
  )


  return (
    <>
    
    <RouterProvider router={route} />
    <ToastContainer />
    </> 
  )
}

export default App

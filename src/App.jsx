import './App.css'
import AddingBook from './components/AddingBook'
import Dashboard from './components/Dashboard'
import Books from './components/Books'
import Author from './components/Author'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Routelayout from './components/Routelayout'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Routelayout />}>
        <Route path='/' element={<Dashboard />}></Route>
        <Route path='Books' element={<Books />}></Route>
        <Route path='Author' element={<Author />}></Route>
        <Route path='AddData' element={<AddingBook />} ></Route>
      </Route>
    )
  )
  return (

    <RouterProvider router={router} />

  )
}

export default App

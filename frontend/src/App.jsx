import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import AboutUs from './components/AboutUs'
import GetInTouch from './components/GetInTouch'
import FreelancerMarketPlace from './components/FreelancerMarketPlace'
import { Toaster } from 'sonner'
import ScrollToTop from './components/shared/ScrollToTop'

function App() {
  const router = createBrowserRouter([
    {path : "/",element:<><ScrollToTop/><Home/></>},
    {path : "/services",element : <><ScrollToTop/><Services/></>},
    {path : "/testimonials",element : <><ScrollToTop/><Testimonials/></>},
    {path : "/aboutUs",element : <><ScrollToTop/><AboutUs/></>},
    {path : "/getInTouch",element : <><ScrollToTop/><GetInTouch/></>},
    {path : "/freelanceMarketPlace",element :<><ScrollToTop/><FreelancerMarketPlace/></>}
  ])
  return (
    <>
    <Toaster richColors/>
    <RouterProvider router={router}/>
    </>
  )
}

export default App

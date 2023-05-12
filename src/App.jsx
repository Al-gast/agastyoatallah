import React from "react"
import Header from "./components/Header"
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom"
import Home from "./pages/Home"
import Project from "./pages/Project"
import Footer from "./components/Footer"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route index element={<Home />} />
      <Route path="/project" element={<Project />} />
    </Route>
  )
)

const App = ({ routes }) => {
  return (
    <>
      <RouterProvider router={router} />
      <Footer />
    </>
  )
}

export default App

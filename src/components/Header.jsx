import React from "react"
import { NavLink, Outlet } from "react-router-dom"
import "../assets/css/style.css"

const Header = () => {
  return (
    <>
      <nav className="flex justify-center max-w-3xl mx-auto lg:my-16 my-8">
        <div className="hidden lg:flex gap-8 text-white">
          <NavLink
            to="/"
            activeclassname="active"
            className="font-bold uppercase link"
          >
            Home
          </NavLink>
          <NavLink
            to="/project"
            activeclassname="active"
            className="font-bold uppercase link"
          >
            Projects
          </NavLink>
        </div>
        <div className="lg:hidden flex justify-center gap-8 text-text w-full">
          <NavLink
            to="/"
            activeclassname="active"
            className="font-bold uppercase link"
          >
            Home
          </NavLink>
          <NavLink
            to="/project"
            activeclassname="active"
            className="font-bold uppercase link"
          >
            Projects
          </NavLink>
        </div>
      </nav>
      <Outlet />
    </>
  )
}

export default Header

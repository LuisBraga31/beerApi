import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "../App"
import Home from "../Home"
import Contact from "../Contact"
import Beer from "../Beer"
import Navbar from "../components/Navbar"

export function RouteList() {
    return (
        <BrowserRouter>
            <>
                <h1>Mais do que bebidas, vamos celebrar o encontro!!</h1> 
                <Navbar/>
            </>

            <Routes>
                <Route path='/home' element={<Home/>} />
                <Route path='/contact' element={<Contact/>} />
                <Route path='/beer/:id' element={<Beer/>} />
            </Routes>
        </BrowserRouter>
    )
}
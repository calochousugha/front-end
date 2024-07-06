import Nuevo from "pages/Nuevo";
const { default: Inicio } = require("pages/Inicio")
const { BrowserRouter, Routes, Route } = require("react-router-dom")

const AppRotes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio />}></Route>
                <Route path="/Nuevo" element={<Nuevo />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRotes;
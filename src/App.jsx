import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import UserLogin from "./pages/UserLogin"
import CaptainLogin from "./pages/CaptainLogin"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/register" element={<CaptainLogin />} />
      </Routes>
    </>
  )
}

export default App
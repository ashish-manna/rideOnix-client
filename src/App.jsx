import { Route, Routes } from "react-router-dom"
import UserLogin from "./pages/UserLogin"
import CaptainLogin from "./pages/CaptainLogin"
import Start from "./pages/Start"
import { Home } from "./pages/Home"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/register" element={<CaptainLogin />} />
      </Routes>
    </>
  )
}

export default App
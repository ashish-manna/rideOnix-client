import { Route, Routes } from "react-router-dom"
import UserLogin from "./pages/UserLogin"
import CaptainLogin from "./pages/CaptainLogin"
import { Home } from "./pages/Home"
import Layout from "./components/Layout"
import UserContext from "./context/UserContext"
import { useState } from "react"
import Start from "./pages/Start"

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route element={<Layout />}>
            <Route path="/home" element={<Home />} />
          </Route>
          <Route path="/login" element={<UserLogin />} />
          <Route path="/register" element={<CaptainLogin />} />
        </Routes>
      </UserContext.Provider>
    </>
  )
}

export default App
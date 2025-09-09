import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import axios from "axios"
import { useContext, useEffect } from "react"
import UserContext from "../context/UserContext"

const Layout = () => {
    const { setUser } = useContext(UserContext);
    const userAuthHandler = async () => {
        try {
            const response = await axios.get(
                `${import.meta.env.VITE_BASE_URL}/user/profile/view`,
                { withCredentials: true }
            );
            setUser(response.data);
        } catch (err) {
            setUser(null);
            console.error("Auth failed:", err.response?.data || err.message);
        }
    };

    useEffect(() => {
        userAuthHandler();
    }, []);
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout
import { useContext } from "react"
import UserContext from "../context/UserContext"
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();
    console.log(user, "form header");

    const handleLogout = async () => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/logout`, { withCredentials: true });
            console.log(response.data);
            setUser(null);
            navigate("/login");
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div className="w-full flex justify-between items-center">
            <h1 className="text-2xl font-bold px-4 py-6">RideOnix</h1>
            {user && <div className="flex gap-2 px-2">
                <h1>{user.firstName}</h1>
                <div onClick={handleLogout}>Logout</div>
            </div>}
        </div>
    )
}

export default Header
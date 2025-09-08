import { useState } from "react";
import { Link } from "react-router-dom";

const CaptainLogin = () => {

    const [isLogin, setIsLogin] = useState(true);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const loginHandler = () => {
        console.log(email, password);
        setEmail("");
        setPassword("");
    }
    return (
        <div className="w-full min-h-screen flex flex-col">
            <div>
                <h1 className="text-3xl font-bold text-black px-4 py-6">RideOnix</h1>
            </div>
            <div className="w-full px-4 flex flex-col gap-2 pt-5">
                {!isLogin && <div className="w-full flex flex-col gap-1">
                    <div className="text-lg font-semibold ">Whats Your Name</div>
                    <div className="w-full flex gap-2">
                        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="bg-gray-200 text-black w-full p-2 rounded-md" placeholder="First name" />
                        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} className="bg-gray-200 text-black w-full p-2 rounded-md" placeholder="Last name" />
                    </div>
                </div>
                }

                <div className="w-full flex flex-col gap-1">
                    <div className="text-lg font-semibold ">Whats's your email</div>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-gray-200 text-black w-full p-2 rounded-md" placeholder="example@gmail.com" />
                </div>
                <div className="w-full flex flex-col gap-1">
                    <div className="text-lg font-semibold">Enter password</div>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="bg-gray-200 text-black w-full p-2 rounded-md" placeholder="password" />
                </div>
            </div>
            <div className="w-full p-4 pb-6 flex flex-col grow justify-between">
                <div className="pt-5 text-center">
                    <Link className="w-full bg-black rounded-lg text-white font-bold inline-block p-3  text-center" onClick={loginHandler}>{isLogin ? "Login" : "Sign In"}</Link>
                    <p className="text-md text-black pt-2">{isLogin ? "Don't Have any accout?" : "Already have an account?"} <span onClick={() => { setIsLogin(!isLogin) }}>{isLogin ? "Create one" : "Login"}</span></p>
                </div>
                <div className="w-full">
                    <Link className="w-full bg-green-600 rounded-lg text-white font-bold inline-block p-3  text-center" to={"/login"}>Sign in as User</Link>
                </div>
            </div>
        </div>
    )
}

export default CaptainLogin
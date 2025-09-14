import { useState } from "react";
import { Link } from "react-router-dom";

const CaptainLogin = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [vehicleColor, setVehicleColor] = useState("");
    const [vehicleCapacity, setVehicleCapacity] = useState("");
    const [vehiclePlate, setVehiclePlate] = useState("");
    const [vehicleType, setVehicleType] = useState("car");

    const loginHandler = () => {
        console.log(email, password);
        setEmail("");
        setPassword("");
    }
    return (
        <div className="w-full min-h-screen flex flex-col">
            <div className="w-full px-4 flex flex-col gap-1 pt-5">
                {!isLogin && (
                    <div className="w-full flex flex-col gap-1">
                        <div className="text-lg font-semibold">What's Your Name</div>
                        <div className="w-full flex gap-2">
                            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="bg-gray-200 text-black w-full p-2 rounded-md" placeholder="First name" />
                            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} className="bg-gray-200 text-black w-full p-2 rounded-md" placeholder="Last name" />
                        </div>
                    </div>
                )}
                <div className="w-full flex flex-col gap-1">
                    <div className="text-lg font-semibold">What's your email</div>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-gray-200 text-black w-full p-2 rounded-md" placeholder="example@gmail.com" />
                </div>
                <div className="w-full flex flex-col gap-1">
                    <div className="text-lg font-semibold">Enter password</div>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="bg-gray-200 text-black w-full p-2 rounded-md" placeholder="password" />
                </div>
                {!isLogin && (
                    <>
                        <div className="w-full flex flex-col gap-2 mt-4">
                            <div className="text-lg font-semibold">Vehicle Information</div>
                            <div className="flex w-full justify-between gap-1">
                                <div className="w-full flex flex-col gap-1">
                                    <input
                                        type="text"
                                        value={vehicleColor}
                                        onChange={(e) => setVehicleColor(e.target.value)}
                                        className="bg-gray-200 text-black w-full p-2 rounded-md"
                                        placeholder="Vehicle Color"
                                    />
                                </div>
                                <div className="w-full flex flex-col gap-1">
                                    <input
                                        type="number"
                                        value={vehicleCapacity}
                                        onChange={(e) => setVehicleCapacity(e.target.value)}
                                        className="bg-gray-200 text-black w-full p-2 rounded-md"
                                        placeholder="Vehicle Capacity"
                                    />
                                </div>
                            </div>
                            <div className="flex w-full justify-between gap-1">
                                <div className="w-full flex flex-col gap-1">
                                    <input
                                        type="number"
                                        value={vehiclePlate}
                                        onChange={(e) => setVehiclePlate(e.target.value)}
                                        className="bg-gray-200 text-black w-full p-2 rounded-md"
                                        placeholder="Vehicle Plate Number"
                                    />
                                </div>
                                <div className="w-full flex flex-col gap-1">
                                    <select
                                        value={vehicleType}
                                        onChange={(e) => setVehicleType(e.target.value)}
                                        className="bg-gray-200 text-black w-full h-full rounded-md"
                                    >
                                        <option value="car">Car</option>
                                        <option value="auto">Auto</option>
                                        <option value="moto">Moto</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </>
                )}
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
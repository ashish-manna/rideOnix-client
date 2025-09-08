import { Link } from "react-router-dom"

const Start = () => {
    return (
        <div className="bg-[url(/images/hero-banner.jpg)] bg-top-right bg-cover w-full h-screen flex flex-col justify-between">
            <h1 className="text-2xl font-bold text-white px-4 py-6">RideOnix</h1>
            <div className="bg-white w-full flex flex-col gap-4 px-4 py-6 rounded-t-xl">
                <h2 className="text-2xl text-black font-bold">Get started with RideOnix</h2>
                <div className="bg-black px-2 py-4 text-white flex justify-center items-center rounded-xl">
                    <Link className="text-xl font-semibold" to={'/login'}> Continue </Link>
                </div>
            </div>
        </div>
    )
}

export default Start
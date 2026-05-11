import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
function Login() {
    const navigate = useNavigate()
    const [message, setMessage] = useState("")
    const [formData, setFormData] = useState({
        email: "",
        password: ""

    })
    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    async function handleSubmit(e) {
        e.preventDefault()
        try {
            const response = await axios.post(
                "http://127.0.0.1:8000/api/signin/",
                formData
            )

            setMessage(response.data.message)
            if (response.data.user) {
                localStorage.setItem(
                    "user",
                    JSON.stringify(response.data.user)
                )
                setTimeout(() => {
                    navigate("/dashboard")
                }, 1500)
            }

        }
        catch (error) {
            if (error.response) {
                setMessage(error.response.data.message)
            }
            else {
                setMessage("Server Error")
            }
        }
    }
    return (
        <div className="bg-gray-600 min-h-screen flex items-center justify-center">
            <div className="bg-black w-[450px] text-white rounded-3xl p-10 shadow-2xl">
                <h1 className="text-5xl font-bold mb-3">
                    WELCOME BACK
                </h1>
                <p className="text-xl mb-5">
                    Login to Continue
                </p>
                <form
                    onSubmit={handleSubmit}
                    className="space-y-5">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        autoComplete="off"
                        className="w-full h-14 pl-5 rounded-xl border border-gray-400 outline-none bg-[#1f1f1f]"
                    />
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Password"
                        autoComplete="off"
                        className="w-full h-14 pl-5 rounded-xl border border-gray-400 outline-none bg-[#1f1f1f]"
                    />

                    <button
                        type="submit"
                        className="w-full h-14 rounded-xl bg-blue-500 hover:bg-blue-600 transition-all duration-300"
                    >
                        LOGIN
                    </button>

                </form>
                <p className="text-center text-lg mt-5 text-yellow-300">
                    {message}
                </p>
                <p className="mt-5">
                    Don't have account?
                    <Link
                        to="/signin"
                        className="ml-2 underline"
                    >
                        SignUp
                    </Link>

                </p>

            </div>

        </div>
    )
}

export default Login
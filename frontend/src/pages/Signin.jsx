import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
function Signin() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
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
                "http://127.0.0.1:8000/api/register/",
                formData
            )
            console.log(response.data)
            navigate("/")
        }
        catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="bg-gray-600 min-h-screen flex items-center justify-center">
            <div className="bg-black w-[600px] text-white rounded-3xl p-10 shadow-2xl">
                <h1 className="text-5xl font-bold mb-3">
                    CREATE ACCOUNT
                </h1>
                <p className="mb-5">
                    Already have account?

                    <Link
                        to="/"
                        className="ml-2 underline">
                        Login
                    </Link>
                </p>
                <form
                    onSubmit={handleSubmit}
                    className="space-y-5">
                    <input
                        type="text"
                        name="first_name"
                        id="first_name"
                        value={formData.first_name}
                        onChange={handleChange}
                        placeholder="First Name"
                        autoComplete="off"
                        className="w-full p-4 border border-gray-400 rounded-xl text-xl outline-none bg-[#1f1f1f]"
                    />

                    <input
                        type="text"
                        name="last_name"
                        id="last_name"
                        value={formData.last_name}
                        onChange={handleChange}
                        placeholder="Last Name"
                        autoComplete="off"
                        className="w-full p-4 border border-gray-400 rounded-xl text-xl outline-none bg-[#1f1f1f]"
                    />

                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        autoComplete="off"
                        className="w-full p-4 border border-gray-400 rounded-xl text-xl outline-none bg-[#1f1f1f]"
                    />
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Password"
                        autoComplete="off"
                        className="w-full p-4 border border-gray-400 rounded-xl text-xl outline-none bg-[#1f1f1f]"
                    />
                    <button
                        type="submit"
                        className="w-full p-4 rounded-xl text-xl bg-blue-500 hover:bg-blue-600 transition-all duration-300"
                    >
                        Create Account
                    </button>

                </form>

            </div>

        </div>
    )
}

export default Signin
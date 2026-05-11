function Dashboard() {

    const storedUser = localStorage.getItem("user")

    // If no user

    if (!storedUser) {

        return (

            <div className="min-h-screen flex items-center justify-center text-3xl">

                No User Found

            </div>
        )
    }

    const user = JSON.parse(storedUser)

    return (

        <div className="min-h-screen bg-[#544d67] flex items-center justify-center text-white">

            <div className="bg-[#241f35] p-10 rounded-3xl shadow-2xl w-[500px] text-center">

                <h1 className="text-5xl font-bold mb-5">
                    Welcome 🎉
                </h1>

                <p className="text-3xl mb-4">

                    {user.first_name} {user.last_name}

                </p>

                <p className="text-xl text-gray-300">

                    {user.email}

                </p>

            </div>

        </div>
    )
}

export default Dashboard
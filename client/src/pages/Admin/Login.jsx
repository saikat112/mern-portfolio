import React from 'react'

function Login() {
    const [user, setUser] = React.useState({ username: "", password: "" })
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='w-96 flex gap-5 p-5 shadow border border-gray-500 flex-col'>
                <h1 className='text-2xl'>Saikat -Admin Login</h1><hr/>
                <input type="text" value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} />
                <input type="text" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
                <button className='bg-primary text-white p-2 ' onClick={login}>Login</button><hr/>
            </div>
        </div>

    )
}

export default Login

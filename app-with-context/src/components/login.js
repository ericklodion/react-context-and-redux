import React, { useState } from "react";
import { useAuth } from "../providers/auth";

const Login = () => {

    const [name, setName] = useState('');
    const { setUser } = useAuth();

    const handleLogin = () => {
        const user = {name};

        localStorage.setItem("user", JSON.stringify(user));
        setUser(user);
    };

    const handleLogout = () => {
        setName('');
        setUser({name: ''});
    }

    return (
        <div>
            <label>Type your name: </label>
            <input type="text" onChange={e=> setName(e.target.value)} value={name} />
            <br/>            
            <button onClick={handleLogin}>
                Login
            </button>
            <button onClick={handleLogout}>
                Logout
            </button>
        </div>
    );
}

export default Login;
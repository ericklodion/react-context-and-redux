import React from "react";
import { useAuth } from "../providers/auth";

const Profile = () => {
    const { user } = useAuth();
    
    return (
        user.name &&
        <div>
            <h1>Hello {user.name}, nice to meet you!</h1>
        </div>
    )
}

export default Profile;
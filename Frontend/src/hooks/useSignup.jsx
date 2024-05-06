import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axios from "../config/axiosConfig";

export const useSignup = () =>{

    const { login } = useAuthContext();
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)

    const signup = async (firstName, lastName,email, password) =>{
        setIsLoading(true);
        setError(null)        

        try {
            const response = await axios.post("/auth/signup", {
                firstname: firstName,
                lastname: lastName,
                email: email,
                password: password,
            });


            const json = await response.data;

            if (response.status === 200) {
                // Save token to local storage
                console.log('Sign Up Successful from backend!!');
                localStorage.setItem("user", JSON.stringify(json));
                login(JSON.stringify(json)); 
                setIsLoading(false)
            } else {
                setIsLoading(false);
                setError("Signup failed. Please try again.",json.error);
            }
        } catch (error) {
            setError("Signup failed. Please try again.",error);
        } finally {
            setIsLoading(false);
        }
    }

    return {signup, isLoading, error}

}
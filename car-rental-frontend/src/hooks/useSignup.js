import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isloading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()
    const navigate = useNavigate()

    const signup = async (email, password) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('/carRental/user/signup', {
            method : 'POST',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify({email, password})
        })


        const json = await response.json();



        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
        }

        
        if(response.ok){
            localStorage.setItem('user', JSON.stringify(json))
            navigate('/quote')
           
            dispatch({type: 'LOGIN', payload : json})

            setIsLoading(false)
        }
    }

    return {signup, isloading, error}
}
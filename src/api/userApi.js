import { API } from "../config";

// API = http://localhost:5000/api

export const register=(username, email, password)=>{
    const user ={username, email, password}
    return fetch(`${API}/register`,{
        method:"POST",
        headers:{
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body:JSON.stringify(user)
    })
    .then(res=>{return res.json()})
    .catch(error=>console.log(error))
}

//to confirm email
export const confirmUser = (token) => {
    return fetch(`${API}/confirmuser/${token}`)
    .then(res=>{return res.json()})
    .catch(error=>console.log(error))
}

// to forget password
export const forgetPassword = (email) => {
    return fetch(`${API}/forgetpassword`,{
        method:"POST",
        headers:{
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body:JSON.stringify({email})
    })
    .then(res=>{return res.json()})
    .catch(error=>console.log(error))
}

// to reset password
export const resetPassword = (token, password) => {
    return fetch(`${API}/resetpassword/${token}`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({password})
    })
    .then(res=>{return res.json()})
    .catch(error=>console.log(error))
}

// to resend confirmation link
export const resendVerification = (email) => {
    return fetch(`${API}/resendconfirmation`,{
        method:"POST",
        headers:{
            Accept: "application/json",
            "Content-Type":"application/json"
        },
        body:JSON.stringify({email})
    })
    .then(res=>{return res.json()})
    .catch(error=>console.log(error))
}

// for signin
export const signIn = (email, password) => {
    return fetch(`${API}/signin`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        body:JSON.stringify({email,password})
    })
    .then(res=>{return res.json()})
    .catch(error=>console.log(error))
}

// to keep signed in
export const authenticate = (data) => {
    localStorage.setItem('jwt', JSON.stringify(data))
}

// to check if user is logged in or not
export const isAuthenticated = () => {
    if(localStorage.getItem('jwt')){
        return JSON.parse(localStorage.getItem('jwt'))
    }
    else{
        return false
    }
}

// to signout
export const signOut = () => {
    localStorage.removeItem('jwt')
    return fetch(`${API}/signout`,{
        method:"GET"
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}
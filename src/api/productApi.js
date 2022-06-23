import { API } from "../config"

export const addProduct = (product, token) => {
    return fetch(`${API}/addproduct`, {
        method:"POST",
        headers:{
            Accept: "application/json", 
            Authorization: `Bearer ${token}`
        },
        body: product
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}


export const viewProducts = (sortBy, order, limit) => {
    return fetch(`${API}/products?sortBy=${sortBy}&order=${order}&limit=${limit}`,{
        method:"GET"
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}
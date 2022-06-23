import { API } from "../config"

export const addCategory = (token, category_name) => {
    console.log(token)
    return fetch(`${API}/addcategory`,{
        method:"POST",
        headers:{
            Accept: "application/json",
            "Content-Type":"application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({category_name})
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}

export const viewCategories = () => {
    return fetch(`${API}/categories`,{
        method:"GET"
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}

export const categoryDetails = (category_id) => {
    return fetch(`${API}/findcategory/${category_id}`,{
        method:"GET"
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}

export const updateCategory = (category_id, category_name) => {
    return fetch(`${API}/category/update/${category_id}`,{
        method: "PUT",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        body: JSON.stringify({category_name})
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}

export const deleteCategory = (category_id, token) => {
    return fetch(`${API}/deletecategory/${category_id}`,{
        method:"DELETE",
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}
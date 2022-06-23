import { Checkbox, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { viewCategories } from '../api/categoryApi'

const Checkbox_categories = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        viewCategories()
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                }
                else {
                    setCategories(data)
                }
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <Typography variant="h4" sx={{ p: "20px" }}>
                Category
            </Typography>
            {
                categories.map(category => {
                    return <div key={category._id}>
                        <Checkbox id={category._id} /> <label htmlFor={category._id}><Typography variant='h6'>{category.category_name}</Typography></label><br />
                    </div>

                })
            }


        </>
    )
}

export default Checkbox_categories
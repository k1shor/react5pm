import { Checkbox, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { viewCategories } from '../api/categoryApi'

const Checkbox_categories = ({handleFilter}) => {
    const [categories, setCategories] = useState([])
    const [checked, setChecked] = useState([])

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

    const handleChange = e => {
        const new_checked = [...checked]
        const checked_category = e.target.value
        let index = new_checked.findIndex(category=>category===checked_category)
        if(index === -1){
            new_checked.push(checked_category)
        }
        else{
            new_checked.splice(index,1)
        }
        setChecked(new_checked)
        handleFilter(new_checked,'category')
    }

    return (
        <>
            <Typography variant="h4" sx={{ p: "20px" }}>
                Category
            </Typography>
            {
                categories.map(category => {
                    return <div key={category._id}>
                        <Checkbox id={category._id} onChange={handleChange} value={category._id}/>
                        <label htmlFor={category._id}>
                            <Typography variant='h6'>
                                {category.category_name}
                            </Typography>
                        </label><br />
                    </div>

                })
            }


        </>
    )
}

export default Checkbox_categories
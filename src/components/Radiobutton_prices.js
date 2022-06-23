import { prices } from "./prices";
import React from 'react'
import { Typography, RadioGroup, Radio } from "@mui/material";

const Radiobutton_prices = () => {
    return (
        <>
            <Typography variant="h4" sx={{ p: "20px" }}>
                Prices
            </Typography>
            <RadioGroup name="price">
            {
                prices.map(price=>{
                    return <div key={price.id}>
                    <Radio id={price.id} name='price'/> <label htmlFor={price._id}><Typography variant='h6'>{price.name}</Typography></label><br />
                </div>
                })
            }
            </RadioGroup>
        </>
    )
}

export default Radiobutton_prices
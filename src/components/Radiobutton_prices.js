import { prices } from "./prices";
import React from 'react'
import { Typography, RadioGroup, Radio, FormControlLabel } from "@mui/material";

const Radiobutton_prices = ({handleFilter}) => {

    const handleChange = e => {
        console.log(e.target.value)
        handleFilter(e.target.value, 'product_price')
    }


    return (
        <>
            <Typography variant="h4" sx={{ p: "20px" }}>
                Prices
            </Typography>
            <RadioGroup name="prices">
                {
                    prices.map(price=>{
                        return <FormControlLabel key={price.id} value={price.id} control={<Radio />} label={price.name} onChange={handleChange}/>
                    })
                }
            </RadioGroup>

        </>
    )
}

export default Radiobutton_prices
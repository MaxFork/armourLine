import React, { useState} from 'react'

import "./product-form.styles.css"
import FormInput from "../form-input/form-input.component"
import CustomButton from "../custom-button/custom-button.component"

export default function ProductForm() {
    const [productForm, setProductForm] = useState({
        name: "",
        email: "",
        address: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductForm({...productForm, [name]: value})
    }

    const { name, email, address } = productForm
    return (
        <form className="container product-form-container">
            <FormInput name="name" type="text" value={name} handleChange={handleChange} placeholder="Full Name"  required/>
            <FormInput name="email" type="email" value={email} handleChange={handleChange} placeholder="Email"  required/>
            <FormInput name="address" type="text" value={address} handleChange={handleChange} placeholder="Full Address"  required/>
            <CustomButton type="submit" title="Submit" button="product-form-btn" />
        </form>
    )
}

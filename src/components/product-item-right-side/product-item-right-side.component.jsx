import React,{ useState } from 'react'
import { Link } from "react-router-dom"

import "./product-item-right-side.styles.css"
import Heading from "../heading/heading.component"
import CustomButton from "../custom-button/custom-button.component"
import FormInput from "../form-input/form-input.component"

export default function ProductItemRightSide() {

    const [referrel, setReferrel] = useState("");

    const handleChange = (e) => {
        setReferrel(e.target.value)
    }

    return (
        <div className="product-item-right-side-container">
            <Heading title="Car title" display="display-5"
                h1="heading-in-individual-item"  />
            <h4 className="display-4 text-center my-5 text-uppercase"> cad $67</h4>
            
            <form className="d-flex">
                <FormInput name="referrel" type="text" value={referrel} handleChange={handleChange} placeholder="Enter Your Referrel Code Here"  required/>
                <button type="submit">Apply</button>
            </form>

            <div className="add-to-cart-button text-center">
            {
                /*!cart.map(item => item.id).includes(state.id) ? ( */
                <Link to="/product-form">
                    <CustomButton title="Buy Mat" button="btn-cart p-2" />
                </Link>
              /*  ) : ( */
                    //<CustomButton title="Already Added" button="btn-cart p-2" />
              /*  )  */
            }
                
            </div>
            <div className="descriptions">
                <h5 className="display-4 my-5">Description</h5>
                <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae suscipit nemo aliquam facilis temporibus excepturi molestiae omnis nihil praesentium. Non culpa enim, nesciunt incidunt quae suscipit commodi voluptas. Unde, officiis?</p>
                <h5 className="display-4 my-4">Product Details</h5>
            </div>
        </div>
    )
}

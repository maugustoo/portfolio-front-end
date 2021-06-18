import React from 'react'
import './CustomButton.css'

import {
    Link
} from "react-router-dom";

interface CustomButtonProps {
    name: string
    type: any
    children: any
}


const CustomButton = (props: CustomButtonProps) => {

    return (
        <div>
            <Link to='/about'>
                <button
                    className="custom-button"
                    type={props.type}
                >
                    {props.name}
                </button>
            </Link>
        </div>
    )
}

export default CustomButton;
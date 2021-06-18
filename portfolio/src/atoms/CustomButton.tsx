import React from 'react'
import './CustomButton.css'

import {
    Link
} from "react-router-dom";

interface CustomButtonProps {
    name: string
    type: any
    children: any
    linkTo: string
    handleClick: any
}


const CustomButton = (props: CustomButtonProps) => {

    return (
        <div>
            <Link to={props.linkTo} className='button-link'>
                <button
                    className="custom-button"
                    type={props.type}
                    onClick={props.handleClick}
                >
                    {props.name}
                </button>
            </Link>
        </div>
    )
}

export default CustomButton;
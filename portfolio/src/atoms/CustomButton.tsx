import React from 'react'
import './CustomButton.css'

interface CustomButtonProps {
    name: string
    type: any
}

const CustomButton = (props: CustomButtonProps) => {

    return (
        <div>
            <button
                className="custom-button"
                type={props.type}
            >
                {props.name}
            </button>
        </div>
    )
}

export default CustomButton;
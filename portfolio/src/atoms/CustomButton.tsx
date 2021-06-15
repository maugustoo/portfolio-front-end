import React from 'react'

interface CustomButtonProps {
    name: String
}

const CustomButton = (props: CustomButtonProps) => {
    return (
        <div className="custom-button">
            <button>
                { props.name }
            </button>
        </div>
    )
}

export default CustomButton;
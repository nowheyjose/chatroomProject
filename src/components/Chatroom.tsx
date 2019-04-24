import * as React from 'react'

interface ButtonProps {
    hideButton: () => void
}

export const Button: React.FunctionComponent<ButtonProps> = props => {
    return (
        <div className = "container">
            {/* <div className = "row">
                <div className = "col s12"><History/></div>
                <div className = "col s12"><TextBox/></div>
            </div> */}
            <a onClick={props.hideButton}>
                TO-DO: Open chatroom
            </a>
        </div>
    )
}

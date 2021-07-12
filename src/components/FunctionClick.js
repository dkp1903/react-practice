import React from 'react'

function FunctionClick() {

    const clickHandler = () => {
        console.log('Button logged')
    }
    return (
        <div>
            {/* Note, in onClick it's a function and not a function call */}
            <button onClick={clickHandler}>
                Click
            </button>
        </div>
    )
}

export default FunctionClick

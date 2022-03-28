// write code for Welcome component here
import React from 'react'
import Message from './Message'

const Welcome = (props) => {
    return (
        <div>
            <h1>Hey {props.name}!</h1>
            <Message />
        </div>
    )
}

export default Welcome

import React from "react"
import Accordion from "./Accordion"

const items = [
    {
        title: 'What is React?',
        content: 'React is a front ent js framework'
    }, 
    {
        title: 'Why use React?',
        content: 'Makes front end development easier'
    }
]

export default () => {
    return (
        <div>
            <Accordion items={items}/>
        </div>
    )
} 
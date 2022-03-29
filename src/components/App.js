import React, {useState} from "react"
import Accordion from "./Accordion"
import Dropdown from "./Dropdown"
import Search from "./Search"

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

const options = [
    {
        label: "The Color Red",
        value: 'red'
    },
    {
        label:'The Color Green',
        value: 'green'
    },
    {
        label: 'A shade of blue',
        value: 'blue'
    }
]

export default () => {
    const [selected, setSelected] = useState(options[0])

    return (
        <div>
            <Dropdown 
            selected={selected}
            onSelectedChange={setSelected}
            options={options} />
        </div>
    )
} 
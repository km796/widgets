import React, {useState} from "react"
import Accordion from "./Accordion"
import Dropdown from "./Dropdown"
import Route from "./Route"
import Search from "./Search"
import Translate from "./Translate"
import Header from "./Header"

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
            <Header />
            <Route path="/">
                <Accordion items={items} />
            </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/dropdown">
                <Dropdown 
                    label = "Select a color"
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelected}
                />
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
        </div>
    )
} 
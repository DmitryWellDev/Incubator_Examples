import React, {ChangeEvent, useRef, useState} from 'react';


export default {
    title: 'input Stories',
    //component: Rating
}

export const NewInput = () => {
    let [value, setValue] = useState("")
    const entering = (event:  ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value)
    }
     return <><input onChange={entering}/> - {value}</>
}

export const NewInputWithId = () => {
    let [value, setValue] = useState("")

    const entering = () => {
        let el = document.getElementById("inpValue") as HTMLInputElement
        setValue(el.value)
    }
     return <><input id={"inpValue"}/><button onClick={entering}>save</button> - {value}</>
}

export const NewInputWithRef = () => {
    const [value, setValue] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)

    const entering = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }
    return <><input ref={inputRef}/><button onClick={entering}>save</button> - {value}</>
}


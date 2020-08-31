import React, {useState} from 'react';
import ControledOnOff from "./ControledOnOff";
import {action} from "@storybook/addon-actions";

export default {
    title: 'OnOff Stories',
    component: ControledOnOff
}

const callback = action('on or off was clicked')

export const onMode = () => <ControledOnOff on={true} onChange={callback}/>
export const offMode = () => <ControledOnOff on={false} onChange={callback}/>
export const modeChanging = () => {
    let [on, setOn] = useState<boolean>(false)
    return <ControledOnOff on={on} onChange={setOn}/>
}

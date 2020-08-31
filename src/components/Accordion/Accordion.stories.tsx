import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import Accordion from "./Accordion";

export default {
    title: 'Accordion Stories',
    component: Accordion
}

const callback = action('Menu was clicked')

export const AccordionOnMode = () => <Accordion title={'Menu'} collapsed={true} setCollapsed={callback}/>
export const AccordionOffMode = () => <Accordion title={'Menu'} collapsed={false} setCollapsed={callback}/>
export const AccordionChanging = () => {
    let [collapsed, setCollapsed] = useState<boolean>(false)
    return <Accordion title={'Menu'} collapsed={collapsed} setCollapsed={() => {setCollapsed(!collapsed)}}/>
}




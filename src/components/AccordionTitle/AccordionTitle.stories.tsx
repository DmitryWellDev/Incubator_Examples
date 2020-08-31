import React, {useState} from 'react';
import AccordionTitle from "./AccordionTitle";
import {action} from "@storybook/addon-actions";

export default {
    title: 'AccordionTitle Stories',
    component: AccordionTitle
}

const callback = action('Condition was changed')

export const AccordionTitleHead = () => <AccordionTitle title={'Menu'} setCollapsed={callback}/>


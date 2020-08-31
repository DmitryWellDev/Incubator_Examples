import React, {useState} from 'react';
import SelfControledOnOff from "./selfControledOnOff";
import {action} from "@storybook/addon-actions";

export default {
    title: 'SelfControledOnoff Stories',
    component: SelfControledOnOff
}

const callback = action('button was clicked')

export const EmptySelfControledOn = () => <SelfControledOnOff defaultOn={true} onChange={callback}/>
export const EmptySelfControledOff = () => <SelfControledOnOff defaultOn={false} onChange={callback}/>



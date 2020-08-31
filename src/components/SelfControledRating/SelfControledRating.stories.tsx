import React, {ChangeEvent, useState} from 'react';
import SelfControledRating from "../SelfControledRating/uncontroledRating";
import {action} from "@storybook/addon-actions";

export default {
    title: 'SelfControledRating Stories',
    component: SelfControledRating
}

const callback = action('Rating was changed inside component')

export const EmptySelfControledRating = () => <SelfControledRating defaultValue={0} onChange={callback}/>
export const Rating1 = () => <SelfControledRating defaultValue={1} onChange={callback}/>
export const Rating2 = () => <SelfControledRating defaultValue={2} onChange={callback}/>
export const Rating3 = () => <SelfControledRating defaultValue={3} onChange={callback}/>
export const Rating4 = () => <SelfControledRating defaultValue={4} onChange={callback}/>
export const Rating5 = () => <SelfControledRating defaultValue={5} onChange={callback}/>

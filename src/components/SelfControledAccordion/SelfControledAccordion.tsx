import React, {useState} from "react";
import AccordionTitle from "../AccordionTitle/AccordionTitle";
import AccordionBody from "../AccordionBody/AccordionBody";

type SelfControledAccordionPropsType = {
    title: string
}

function SelfControledAccordion(props: SelfControledAccordionPropsType) {

    let [collapsed, setCollapsed] = useState(false)

    return(
        <div>
           <AccordionTitle title={props.title} setCollapsed={() => {setCollapsed(!collapsed)}}/>
            {collapsed && <AccordionBody/>}
        </div>
    )
}

export default SelfControledAccordion
import React, {useState} from 'react';
import './App.css';
import SelfControledOnOff from "./components/SelfControledOnOff/selfControledOnOff";
import SelfControledAccordion from "./components/SelfControledAccordion/SelfControledAccordion";
import SelfControledRating from "./components/SelfControledRating/uncontroledRating";
import Rating, {RatingValueType} from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";
import ControledOnOff from "./components/ControledOnOff/ControledOnOff";
//import Accordion from "./components/Accordion/Accordion";

function App() {

    let [ratingValue, setRatingvalue] = useState<RatingValueType>(0)

    let [collapsed, setCollapsed] = useState(false)

    let [on, setOn] = useState(false)

    return (
        <div className="App">
            {/*<PageTitle title={'This is App component'}/>*/}
            {/*<SelfControledAccordion title={'Menu'}/>*/}
            {/*<Accordion title={'Menu'} setCollapsed={() => {setCollapsed(!collapsed)}} collapsed={collapsed}/>*/}
            {/*<Rating setRatingvalue={setRatingvalue} value={ratingValue}/>*/}
            {/*<SelfControledRating/>*/}
            <SelfControledOnOff onChange={setOn}/>{on.toString()}
            {/*<ControledOnOff on={on} onChange={setOn}/>*/}
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle (props:PageTitlePropsType) {
    return (
        <div>
            {props.title}
        </div>
    )
}

export default App;

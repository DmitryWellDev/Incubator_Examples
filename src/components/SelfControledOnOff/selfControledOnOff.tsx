import React, {useState} from "react";
import styles from './selfControledOnOff.module.css'

type OnOffPropsType = {
    onChange: (on: boolean) => void
}

function SelfControledOnOff(props:OnOffPropsType) {

 let [on, setOn] = useState(false)

    const onClicked = () => {
     setOn(true)
        props.onChange(true)
 }

    const offClicked = () => {
        setOn(false)
        props.onChange(false)
    }

return(
    <div className={styles.wrap}>
        <div className={on ? `${styles.on} ${styles.onColor}`: styles.on} onClick={onClicked}>On</div>
        <div className={on ? styles.off : `${styles.off} ${styles.offColor}`} onClick={offClicked}>Off</div>
        <div className={on ? styles.circle : styles.circleOff}></div>
    </div>
)
}

export default SelfControledOnOff
import React, { Fragment } from "react";
import classes from './Modal.module.css';


const Backdrop = () => {
    return <div className={classes.backdrop}></div>
}

const Overlay = (props) => {
    return <div className={classes.overlay}>
        <div className={classes.innerSection}>
            {props.children}
        </div>
    </div>
}


const Modal = (props) => {
    return (
        <Fragment>
            <Backdrop />
            <Overlay {...props}/>
        </Fragment>
    )
}


export default Modal
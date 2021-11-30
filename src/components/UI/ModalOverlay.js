import CSSTransition from "react-transition-group/CSSTransition";
import {useSelector} from 'react-redux';

import React from 'react';
import classes from './Modal.module.css';


const ModalOverlay = (props) => {
    const showModal = useSelector(state => state.modal.modalIsVisible);

    const animationTiming = {
        enter: 500,
        exit: 0
    }

    return (
        <CSSTransition
        mountOnEnter
        unmountOnExit
        in={showModal}
        timeout={animationTiming}
        classNames={{
            enter:'',
            enterActive: `${classes.modalOpen}`,
            exit:'',
            exitActive:''
        }}
        >
            <div className={classes.modal}>
                <div className={classes.content}>{props.children}</div>
            </div>
        </CSSTransition>
    );
};

export default ModalOverlay;
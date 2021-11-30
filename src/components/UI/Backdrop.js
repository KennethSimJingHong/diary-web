import {useDispatch, useSelector} from 'react-redux';

import {modalActions} from '../../store/modal-slice';
import React from 'react';
import classes from './Modal.module.css';

const Backdrop = () => {

    const dispatch = useDispatch();

    const closeHandler = () => {
        dispatch(modalActions.toggleHandler());
    }

    const showModal = useSelector(state => state.modal.modalIsVisible);

    return (
        showModal && <div className={classes.backdrop} onClick={closeHandler}> </div>
    );
};

export default Backdrop;
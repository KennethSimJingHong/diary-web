import {useDispatch, useSelector} from 'react-redux';

import React from 'react';
import Modal from './Modal';
import {modalActions} from '../../store/modal-slice';


const OperationMessage = () => {
    const ttl = useSelector(state => state.modal.title);
    const msg = useSelector(state => state.modal.message);

    const dispatch = useDispatch();

    const closeHandler = () => {
        dispatch(modalActions.toggleHandler());
    }
    
    return (
        <Modal>
            <h2>{ttl}</h2>
            <p>{msg}</p>
            <button onClick={closeHandler}>Close</button>
        </Modal>
    );
};

export default OperationMessage;
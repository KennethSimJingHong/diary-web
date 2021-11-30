import React, {useRef, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';


import classes from './Save.module.css';
import {diaryActions} from '../../store/diary-slice';
import {modalActions} from '../../store/modal-slice';

const Save = () => {
    const params = useParams(); 
    const id = params.diaryId ?? 0;
    const info = useSelector(state => state.diary.items).find(item => item.id === id);

    const dispatch = useDispatch();
    let titleInputRef = useRef();
    let contentInputRef = useRef();

    useEffect(() => {
        titleInputRef.current.value = info?.title ?? '';
        contentInputRef.current.value = info?.content ?? '';
    }, [titleInputRef, contentInputRef, info]);

    const createHandler = (e) => {
        e.preventDefault();
        
        if(titleInputRef.current.value !== '' || contentInputRef.current.value !== ''){
            dispatch(diaryActions.addItem({title:titleInputRef.current.value, content:contentInputRef.current.value}));
            dispatch(modalActions.toggleHandler());
            dispatch(modalActions.messageHandler({operation:'create'}));
        }
        
        titleInputRef.current.value='';
        contentInputRef.current.value='';
    }

    const updateHandler = (e) => {
        e.preventDefault();

        if(titleInputRef.current.value !== '' || contentInputRef.current.value !== ''){
            dispatch(diaryActions.updateItem({id:info.id, date:info.date, title:titleInputRef.current.value, content:contentInputRef.current.value}));
            dispatch(modalActions.toggleHandler());
            dispatch(modalActions.messageHandler({operation:'update'}));
        }
        
        titleInputRef.current.value='';
        contentInputRef.current.value='';
    }

    return (
        <div className={classes.createWrapper}>
            <h2>{id === 0 ? "Create" : "Update"} New Diary</h2>
            <form>
                <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" ref={titleInputRef}/>
                </div>
                <div>
                    <label htmlFor="content">Content</label>
                    <textarea id="content" rows="10" cols="50" ref={contentInputRef}/>
                </div>
                <button onClick={ id === 0 ? createHandler : updateHandler}>Save</button>
            </form>
        </div>
    );
};

export default Save;
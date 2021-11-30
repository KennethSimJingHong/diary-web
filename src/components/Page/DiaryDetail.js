import React from 'react';
import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';

import classes from './DiaryDetail.module.css';

const DiaryDetail = () => {
    const params = useParams();
    const info = useSelector(state => state.diary.items).find(item => item.id === params.diaryId);

    return (
        <div className={classes.diaryDetail}>
            <div>
                <span>ID No: {info.id}</span>
                <span>{info.date}</span>
            </div>
            <h2>{info.title}</h2>
            <hr/>
            <p>{info.content}</p>
        </div>
    );
};

export default DiaryDetail;
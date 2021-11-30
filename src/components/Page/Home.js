import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

import classes from "./Home.module.css";
import {diaryActions} from '../../store/diary-slice';
import {modalActions} from '../../store/modal-slice';

const Home = () => {
    const dispatch = useDispatch(); 
    let items = useSelector(state => state.diary.items);

    const deleteHandler = (id) => {
        dispatch(diaryActions.removeItem({id}));
        dispatch(modalActions.toggleHandler());
        dispatch(modalActions.messageHandler({operation:'delete'}));
    }

    return (
        <ul className={classes.diaryList}>
            {items.map( item => {
                return (
                    <li key={item.id}>
                        <div>
                            <h3>{item.title}</h3>
                            <p>{item.content}</p>
                        </div>
                        <div>
                            <div>
                                <Link to={`/diary-detail/${item.id}`}><button>View</button></Link>
                                <Link to={`/update-diary-detail/${item.id}`}><button>Update</button></Link>
                                <button onClick={() => deleteHandler(item.id)}>Delete</button>
                            </div>
                        </div>
                    </li>
                )
            })}
        </ul>
    );
};

export default Home;


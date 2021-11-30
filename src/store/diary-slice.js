import {createSlice} from "@reduxjs/toolkit";

const dateFormatter = () => {
    return Intl.DateTimeFormat(navigator.language, options).format(new Date());
}

const options = {
    day:'2-digit',
    month:'short',
    year:'numeric'
}

const initialState = {
    items:[{id: "123456", title: "Favourite time of day", content: "Today while I was cleaning my cupboard, I want some old pictures of me and my sisters. We all were laughing a lot in this picture. I believe that it should be some really funny moment. Another moment was captured, when I was hiding and eating chocolates from my Father’s pocket so that I don’t have to share with anyone.", date: dateFormatter()}],
}

const reducers = {
    addItem(state, action){
        const newItem = action.payload;
        const newId = Date.now().toString().slice(-6);
        Intl.DateTimeFormat(navigator.language, )
        state.items.push({id: newId, title: newItem.title, content: newItem.content, date: dateFormatter()});
    },

    updateItem(state, action){
        const updateItem = action.payload;
        const index = state.items.findIndex(item => item.id === updateItem.id);
        state.items[index] = updateItem;
    },

    removeItem(state, action){
        const theId = action.payload;
        state.items = state.items.filter(item => item.id !== theId.id);
    }
}

const diarySlice = createSlice({
    name:"diary",
    initialState: initialState,
    reducers:reducers,
});

export const diaryActions = diarySlice.actions;

export default diarySlice;


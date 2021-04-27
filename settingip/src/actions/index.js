const ADD_SETTING = 'ADD_SETTING';
export const addList = (_id, st_key) => ({
    type: ADD_SETTING,
    _id,
    st_key
});
const DELETE_SETTING = 'DELETE_SETTING';
export const deleteSetting = (_id) => ({
    type: DELETE_SETTING,
    _id
});
const LIST_ITEM = 'LIST_ITEM';
export const listItem = (a) => ({
    type: LIST_ITEM,
    a
});
const ADD_ITEM = 'ADD_ITEM';
export const addItem = (_id,a) => ({
    type: ADD_ITEM,
    _id,
    a
});
const DELETE_ITEM = 'DELETE_ITEM';
export const deleteItem = (_id,i) => ({
    type: DELETE_ITEM,
    _id,
    i
});
const LOAD_SETTING = 'LOAD_SETTING';
export const loadSetting = (data) => ({
    type: LOAD_SETTING,
    data,
});
const IS_UPDATE = 'IS_UPDATE';
export const isUpdate = (data) => ({
    type: IS_UPDATE,
    data,
});
const UPDATE_ITEM = 'UPDATE_ITEM';
export const updateItem = (_id, i,data) => ({
    type: UPDATE_ITEM,
    _id,
    i,
    data,
});




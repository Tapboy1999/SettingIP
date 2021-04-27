const initialState = {
    datas: [
        // {
        //     _id: Math.random(),
        //     st_key: 'ip_black',
        //     st_value: [
        //         '192.168.1.1','192.168.1.2'
        //     ]
        // },
    ],
    show: {
        _id: null,
        st_key: '',
        st_value: [
            
        ]

    },
    isUpdate : false

}
const settings = (state = initialState, action) => {
    // console.log(state);
    switch (action.type) {
        case 'ADD_SETTING':
            return {
                ...state,
                datas: [
                    ...state.datas, 
                    {
                        _id: action._id,
                        st_key: action.st_key,
                        st_value : []
                    }
                ]
            }
        case 'DELETE_SETTING':
            const list = state.datas.filter((item, index) => item._id != action._id)
            return {
                ...state,
                datas: list
            }
        case 'LIST_ITEM':
            console.log(action.a.st_value);
            return {
                ...state,
                show: {
                    _id: action.a._id,
                    st_value: action.a.st_value,
                }
            }
        case 'ADD_ITEM':
            // console.log(action._id)
            {
                if(state.show.st_value == ""){
                    // console.log("null");
                    state.datas.filter((item, index) => item._id == action._id ? item.st_value = action.a : item)
                    return {
                        ...state,
                        show: {
                            _id: action._id,
                            st_value: [action.a],
                        }
                    }
                }
                else {
                    // console.log('not null')
                    state.datas.filter((item, index) => item._id == action._id ? item.st_value = [...item.st_value ,action.a] : item)
                    return {
                        ...state,
                        show:
                            {
                                _id: action._id,
                                st_value: [...state.show.st_value,action.a],
                            }
                    }
                }
                
            }
        case 'DELETE_ITEM':{
            // console.log(action._id+'and'+action.i);
            let list = [];
            state.datas.filter((item, index) => item._id == action._id ? list = item.st_value : item.st_value);
            // console.log(list);
            let a = list.filter((item,i) => i != action.i);
            state.datas.filter((item, index) => item._id == action._id ? item.st_value = a : item.st_value);
            console.log(a);
            //  = list.filter((item,i) => i != action.i);
            // console.log(a);
            return {
                ...state,
                datas : [...state.datas],
                show: {
                    _id: action._id,
                    st_value: a,
                }
            }
        }
        case 'LOAD_SETTING':{
            // console.log(action.data);
            return {
                ...state,
                datas: action.data
            }
        }
        case 'IS_UPDATE':{
            // console.log(action.data);
            return {
                ...state,
                isUpdate: action.data
            }
        }
        case 'UPDATE_ITEM':{
            let list = [];
            state.datas.filter((item, index) => item._id == action._id ? list = item.st_value : item.st_value);
            let a = list.filter((item,i) => i != action.i);
            a.push(action.data);
            state.datas.filter((item, index) => item._id == action._id ? item.st_value = a : item.st_value);
            return{
                ...state,
                datas : [
                    ...state.datas,
                ],
                show: {...state.show},
                show: {
                    // _id: action._id,
                    st_value: a,
                },
                isUpdate: false
            }
            
        }
            
        default:
            return state
    }
}

export default settings;
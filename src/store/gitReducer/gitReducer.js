import { gitAPi } from "../../api/gitApi";

//Constatnts
const SET_SEARCH_ITEMS = 'SET-SEARCH-ITEMS';


//Reducer
let initialState = {
    searchItems: []
};

const gitReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SEARCH_ITEMS:
            return {
                ...state,
                searchItems: [...action.items]
            }
        default:
            return state;
    }
}



//actionCreators

export const setSerarchItems = (items) => ({ type: SET_SEARCH_ITEMS, items });


//Thunks

export const getSearch10Items = (search) => async(dispatch) => {
    console.log(search);
    const res = await gitAPi.getSearchItems(search, 1, 10);
    if (res) {
        dispatch(setSerarchItems(res.data.items));
    }
}


export default gitReducer;
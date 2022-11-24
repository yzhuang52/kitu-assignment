const searchReducer = (state={infos: []}, action) => {
    switch(action.type) {
        case 'search':
            return {...state, infos: [...state.infos, action.payload]};
        default:
            return state;
    }
}
export default searchReducer;
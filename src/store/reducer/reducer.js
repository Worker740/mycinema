function reducer(state, action) {
    switch(action.type) {
        case 'MovieId': return { movieId: action.value };
        
        default: return state;
    }
}

export default reducer

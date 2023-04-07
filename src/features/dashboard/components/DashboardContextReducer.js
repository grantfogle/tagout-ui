export const dashboardContextReducer = (state, action) => {
    switch(action.type) {
        case 'FETCH_DRAW_STATS':
            return {...state, drawStats: {data: null, loading: true, error: false}}
        case 'RETURNED_DRAW_STATS':
            return {...state, drawStats: {data: action.payload, loading: true, error: false}}
        case 'ERROR_DRAW_STATS':
            return {...state, drawStats: {data: null, loading: false, error: true}}
        default:
            return state;
    }
}
// state is only part of application state, which this
// reducer is reponsible for

export default function(state=null, action) {
    switch (action.type) {
    case 'BOOK_SELECTED':
        return action.payload;
        break;
    default:
        return state;
    }
    return state;
}

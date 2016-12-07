export function selectBook(book) {
    // return an action - an object with type property
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}

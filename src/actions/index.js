const actionTypes = {
    ADD_POST: 'ADD_POST',
    EDIT_POST: 'EDIT_POST',
    DELETE_POST: 'DELETE_POST',
    SET_BACKGROUND_COLOR: 'SET_BACKGROUND_COLOR'
};

export const addPost = () => ({
    type: actionTypes.ADD_POST,
    payload: {
        date: new Date().getTime()
    }
});

export const editPost = ({ date, field, value }) => {
    return {
        type: actionTypes.EDIT_POST,
        date,
        payload: {
            [field]: value
        }
    };
};

export const deletePost = ({ date }) => ({
    type: actionTypes.DELETE_POST,
    date
});

export const setRandomBg = () => {
    const hValue = Math.floor(Math.random() * 350) + 1;
    return {
        type: actionTypes.SET_BACKGROUND_COLOR,
        payload: hValue
    };
};

const actionTypes = {
    ADD_POST: 'ADD_POST',
    EDIT_POST: 'EDIT_POST',
    DELETE_POST: 'DELETE_POST',
    SET_BACKGROUND_COLOR: 'SET_BACKGROUND_COLOR'
};

export const addPost = ({ id }) => ({
    type: actionTypes.ADD_POST,
    payload: {
        id: id,
        date: new Date()
    }
});

export const editPost = ({ id, field, value }) => {
    return {
        type: actionTypes.EDIT_POST,
        id,
        payload: {
            [field]: value
        }
    };
};

export const deletePost = ({ id }) => ({
    type: actionTypes.DELETE_POST,
    id
});

export const setRandomBg = () => {
    const hValue = Math.floor(Math.random() * 350) + 1;
    return {
        type: actionTypes.SET_BACKGROUND_COLOR,
        payload: hValue
    };
};

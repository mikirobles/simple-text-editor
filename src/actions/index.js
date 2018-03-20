export const addPost = ({ id }) => ({
    type: 'ADD_POST',
    payload: {
        id: id,
        date: new Date()
    }
});

export const editPost = ({ id, field, value }) => {
    return {
        type: 'EDIT_POST',
        id,
        payload: {
            [field]: value
        }
    }
};

export const viewPost = ({ id }) => ({
    type: 'CHANGE_POST_VIEW',
    payload: {
        id
    }
});



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
    };
};

export const deletePost = ({id}) =>  ({
    type: 'DELETE_POST',
    id
});

export const setRandomBg = () => {
    const hValue = Math.floor(Math.random()*350)+1;
    return {
        type: 'SET_BACKGROUND_COLOR',
        payload: hValue
    }
}
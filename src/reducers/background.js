const randomColor = Math.floor(Math.random()*350)+1;

const background = (state = randomColor, action) => {
    switch (action.type) {
        case 'SET_BACKGROUND_COLOR':
            return action.payload;
        default:
            return state;
    }
};

export default background;

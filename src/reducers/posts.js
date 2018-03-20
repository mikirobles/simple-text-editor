const posts = (state = [], action) => {
    switch (action.type) {
        case 'ADD_POST':
            if (state.find(post => !post.title && !post.text)) {
                return state;
            }
            return [...state, action.payload];
        case 'EDIT_POST':
            return [
                ...state.filter(post => post.id !== action.id),
                {
                    ...state.find(post => post.id === action.id),
                    ...action.payload
                }
            ];
        default:
            return state;
    }
};

export default posts;

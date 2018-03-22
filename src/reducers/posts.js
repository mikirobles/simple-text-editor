const posts = (state = [], action) => {
    switch (action.type) {
        case 'ADD_POST':
            if (state.find(post => !post.title && !post.text)) {
                return state;
            }
            return [...state, action.payload];
        case 'EDIT_POST':
            return [
                ...state.filter(post => post.date !== action.date),
                {
                    ...state.find(post => post.date === action.date),
                    ...action.payload
                }
            ];
        case 'DELETE_POST':
            return [
                ...state.filter(post => post.date !== action.date),
            ];
        default:
            return state;
    }
};

export default posts;

export const todoReducer = (state = [], action) => {
    switch (action.type){
        case "add":
            return [...state, action.payload];
        case "delete":
            return state.filter( (t) => t.id !== action.payload );
        case "toggle":
            const pos = state.findIndex(t => t.id === action.payload);
            if( pos!== -1) state[pos].done = !state[pos].done;
            return [...state];
        default:
            return state;
    }

};

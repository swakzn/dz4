const ADD_USER = 'ADD_USER';

export const addUser = (userData) => ({
    type: ADD_USER,
    payload: userData,
});

const initialState = {
    users: [],
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                users: [...state.users, action.payload],
            };
        default:
            return state;
    }
};

export default userReducer;
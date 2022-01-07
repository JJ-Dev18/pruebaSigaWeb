


export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case 'loggin':
            return {
                ...action.payload,
                logged: true,
            };

        case 'loggout':
            return {
                logged: false,
            };

        default:
            return state;
    }
};
